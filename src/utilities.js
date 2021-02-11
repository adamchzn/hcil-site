import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { getNotebookRoute } from "./routes";
import Papa from "papaparse";

export const useCreateNewNotebook = () => {
  const history = useHistory();

  return () => {
    const ref = firebase.database().ref("notebooks/");
    const notebookID = ref.push().key;
    const notebook = {
      title: "",
    };

    history.push(getNotebookRoute(notebookID));

    ref.child(notebookID).set(notebook);
    createNewCell(notebookID, notebook);
  };
};

export const createNewCell = (notebookID, notebook) => {
  const ref = firebase.database().ref("cells/");
  const cellID = ref.push().key;

  ref.child(cellID).set({
    notebookID: notebookID,
    name: "",
    input: "",
    output: "",
    description: "",
  });

  const notebookRef = firebase
    .database()
    .ref("notebooks/" + notebookID + "/cells");
  notebookRef.set([...(notebook.cells == null ? [] : notebook.cells), cellID]);
};

export const deleteCell = (cellID, cell, notebook) => {
  const ref = firebase.database().ref("cells/" + cellID);
  const notebookRef = firebase
    .database()
    .ref("notebooks/" + cell.notebookID + "/cells");

  ref.remove();
  notebookRef.set(notebook.cells.filter((c) => c !== cellID));
};

export const deleteNotebook = (notebook, notebookID) => {
  const ref = firebase.database().ref("notebooks/" + notebookID);

  ref.remove();
};

export const useImportNewDataset = () => {
  // const history = useHistory();

  return (file) => {
    // Parse local CSV file
    Papa.parse(file, {
      complete: function (results) {
        console.log("Finished:", results.data);
        console.log(rotateData(results.data));
        const ref = firebase.database().ref("datasets/");
        const datasetID = ref.push().key;
        const dataset = {
          title: file.name,
          data: rotateData(results.data),
        };

        // history.push(getDatasetRoute(datasetID));

        ref.child(datasetID).set(dataset);
      },
      header: true,
      dynamicTyping: true,
    });
  };
};

export const rotateData = (data) => {
  const result = {};

  for (let i in data) {
    for (let key in data[i]) {
      if (key in result) {
        result[key].push(data[i][key]);
      } else {
        result[key] = [data[i][key]];
      }
    }
  }
  return result;
};

// // Parse CSV string
// var data = Papa.parse(csv);

// // Convert back to CSV
// var csv = Papa.unparse(data);

// // Parse local CSV file
// Papa.parse(file, {
//   complete: function (results) {
//     console.log("Finished:", results.data);
//   },
// });

// // Stream big file in worker thread
// Papa.parse(bigFile, {
// 	worker: true,
// 	step: function(results) {
// 		console.log("Row:", results.data);
// 	}
// });

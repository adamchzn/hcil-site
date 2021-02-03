import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { getNotebookRoute } from "./routes";

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
    console.log(notebookID);
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

  console.log(notebook);

  const notebookRef = firebase
    .database()
    .ref("notebooks/" + notebookID + "/cells");
  notebookRef.set([...(notebook.cells == null ? [] : notebook.cells), cellID]);
};
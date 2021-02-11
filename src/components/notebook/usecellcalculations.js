import { useEffect, useState, useContext } from "react";
import { doCalculations } from "../../calculations";
import firebase from "firebase";
import DatasetsContext from "../../datasetscontext";

export function useCellCalculations(notebook) {
  const [cells, setCells] = useState({});
  const [results, setResults] = useState({});
  const [hasFetched, setHasFetched] = useState({});
  const datasets = useContext(DatasetsContext);
  // need a state for referenced datasets

  // Need a similar thing for loading referenced datasets
  useEffect(() => {
    if (notebook == null) {
      return;
    }
    for (let i in notebook.cells) {
      const cellID = notebook.cells[i];

      if (hasFetched[cellID]) {
        continue;
      }

      setHasFetched((hasFetched) => ({ ...hasFetched, [cellID]: true }));
      console.log(cellID);

      var cellRef = firebase.database().ref("cells/" + cellID);
      cellRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setCells((cells) => ({ ...cells, [cellID]: data }));
      });
    }
  }, [notebook, cells]);

  useEffect(() => {
    if (notebook == null) {
      return;
    }

    // need a similar hasMissingDataset
    let hasMissingCell = false;
    for (const i in notebook.cells) {
      const cellID = notebook.cells[i];

      if (cells[cellID] == null) {
        hasMissingCell = true;

        break;
      }
    }

    if (hasMissingCell == false && datasets !== null) {
      // Need to pass in datasets here

      setResults(doCalculations(cells, notebook.cells, datasets));
    }
  }, [notebook, cells]);

  return { cells, results };
}

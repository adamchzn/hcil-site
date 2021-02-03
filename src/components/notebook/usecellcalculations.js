import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { docalculations } from "../../calculations";
import firebase from "firebase";

export function useCellCalculations(notebook) {
  const [cells, setCells] = useState({});
  const [results, setResults] = useState({});
  const [hasFetched, setHasFetched] = useState({});

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

    let hasMissingCell = false;
    for (const i in notebook.cells) {
      const cellID = notebook.cells[i];

      if (cells[cellID] == null) {
        hasMissingCell = true;

        break;
      }
    }

    if (hasMissingCell == false) {
      setResults(docalculations(cells, notebook.cells));
    }
  }, [notebook, cells]);

  return { cells, results };
}

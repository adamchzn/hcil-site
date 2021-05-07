import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { createNewCellGroup, allCellgroupsLoaded } from "./../../utilities.js";
import NotebookTitle from "./notebooktitle.js";
import NotebookHeader from "./notebookheader.js";
import NotebookContext from "./../../notebookcontext.js";
import InputData from "./inputdata.js";
import CellGroup from "./cellgroup.js";
import { useCellCalculations } from "./usecellcalculations.js";

function Notebook({ notebookID }) {
  const [notebook, setNotebook] = useState(null);
  const [cells, setCells] = useState({});
  const [hasFetched, setHasFetched] = useState({});

  // to do: unsubscribe from old notebook ID
  useEffect(() => {
    var notebookRef = firebase.database().ref("notebooks/" + notebookID);
    notebookRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setNotebook(data);
    });
  }, [notebookID]);

  const [cellgroups, setCellgroups] = useState({});

  // to do: unsubscribe from old cellgroup ID
  useEffect(() => {
    if (notebook == null) {
      return;
    }
    for (const index in notebook.cellgroups) {
      const groupID = notebook.cellgroups[index];
      var cellgroupRef = firebase.database().ref("cellgroups/" + groupID);
      cellgroupRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setCellgroups((cellgroups) => ({ ...cellgroups, [groupID]: data }));
      });
    }
  }, [notebook]);

  const cellgroupsLoaded = allCellgroupsLoaded(notebook, cellgroups);

  useEffect(() => {
    if (notebook == null || !cellgroupsLoaded) {
      return;
    }

    for (let i in notebook.cellgroups) {
      const groupID = notebook.cellgroups[i];

      for (let i in cellgroups[groupID].cells) {
        const cellID = cellgroups[groupID].cells[i];

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
    }
  }, [notebook, cellgroups, cellgroupsLoaded, cells]);


  const results = useCellCalculations(notebook, cellgroups, cells);
  let previousCells = [];

  return (
    <NotebookContext.Provider value={notebook}>
      <div className="notebook-container">
        <NotebookHeader />
        <div className="page-container">
          {notebook == null || !cellgroupsLoaded ? (
            "Loading..."
          ) : (
            <>
              <NotebookTitle notebook={notebook} notebookID={notebookID} />
              <InputData notebook={notebook} notebookID={notebookID} />
              {notebook.cellgroups == null
                ? "Create a new cell group"
                : Object.values(notebook.cellgroups || {}).map((groupID) => {
                    const previousCellsCopy = previousCells;
                    previousCells = previousCells.concat(
                      cellgroups[groupID].cells == null
                        ? []
                        : cellgroups[groupID].cells
                    );
                    return (
                      <CellGroup
                        groupID={groupID}
                        cellgroup={cellgroups[groupID]}
                        cellsAbove={previousCellsCopy}
                        cells={cells}
                        results={results}
                      />
                    );
                  })}
              <button
                className="newcellgroup-button"
                onClick={() => createNewCellGroup(notebookID, notebook)}
              >
                New cell group
              </button>
            </>
          )}
        </div>
      </div>
    </NotebookContext.Provider>
  );
}

export default Notebook;

import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase";
import { createNewCell } from "./../../utilities.js";
import AddButton from "./../../images/add-button.svg";
import Cell from "./cell.js";
import NotebookTitle from "./notebooktitle.js";
import NotebookHeader from "./notebookheader.js";
import { useCellCalculations } from "./usecellcalculations.js";
import NotebookContext from "./../../notebookcontext.js";
import InputData from "./inputdata.js";

function Notebook({ notebookID }) {
  const [notebook, setNotebook] = useState(null);

  // to do: unsubscribe from old notebook ID
  useEffect(() => {
    var notebookRef = firebase.database().ref("notebooks/" + notebookID);
    notebookRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setNotebook(data);
    });
  }, [notebookID]);

  const { results, cells } = useCellCalculations(notebook);

  return (
    <NotebookContext.Provider value={notebook}>
      <div className="notebook-container">
        <NotebookHeader />
        <div className="page-container">
          {notebook == null ? (
            "Loading..."
          ) : (
            <>
              <NotebookTitle notebook={notebook} notebookID={notebookID} />
              <InputData notebook={notebook} notebookID={notebookID} />
              {notebook.cells == null
                ? "Create a new cell"
                : Object.values(notebook.cells || {}).map((cellID) => (
                    <Cell
                      cellID={cellID}
                      cell={cells[cellID]}
                      data={results[cellID]}
                      notebook={notebook}
                    />
                  ))}
              <div
                className="add-button-container"
                onClick={() => createNewCell(notebookID, notebook)}
              >
                <img className="add-button" src={AddButton}></img>
                New cell
              </div>
            </>
          )}
        </div>
      </div>
    </NotebookContext.Provider>
  );
}

export default Notebook;

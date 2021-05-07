import React, { useState, useEffect } from "react";
import { createNewCell } from "./../../utilities.js";
import Cell from "./cell.js";
import { useCellCalculations } from "./usecellcalculations.js";
import CellgroupMenu from "./cellgroupmenu.js";
import Modal from "./../modal.js";

function CellGroup({ groupID, cellsAbove, cellgroup, cells, results }) {
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (cellgroup.input == null) {
      setModalShown(true);
    }
  }, [setModalShown, cellgroup.input]);

  return (
    <div className="cellgroup-container">
      {/* <NotebookTitle notebook={notebook} notebookID={notebookID} /> */}
      <button className="newcell-button" onClick={() => setModalShown(true)}>
        Select input
      </button>
      {cellgroup.cells == null
        ? "Create a new cell"
        : Object.values(cellgroup.cells || {}).map((cellID) => (
            <Cell cellID={cellID} cell={cells[cellID]} data={results[cellID]} />
          ))}
      <button
        className="newcell-button"
        onClick={() => createNewCell(groupID, cellgroup)}
      >
        New cell
      </button>
      <Modal isShown={modalShown} hideModal={() => setModalShown(false)}>
        <CellgroupMenu
          hideModal={() => setModalShown(false)}
          cellgroup={cellgroup}
          groupID={groupID}
          cellIDList={cellsAbove}
          cells={cells}
        />
      </Modal>
    </div>
  );
}

export default CellGroup;

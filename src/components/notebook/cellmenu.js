import React, { useRef, useContext } from "react";
import useOutsideAlerter from "./../../useoutsidealerter.js";
import { deleteCell } from "./../../utilities.js";
import NotebookContext from "./../../notebookcontext.js";

function CellMenuPopup({ setPopupHidden, children, cell, cellID }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopupHidden);

  const notebook = useContext(NotebookContext);

  return (
    // Menu contents should change depending on the type of cell
    <div className="cell-menu-popup" ref={wrapperRef}>
      {children}
      <div className="cell-menu-row delete-row" onClick={() => deleteCell(cellID, cell, notebook)}>
        <p>Delete</p>
      </div>
    </div>
  );
}

export default CellMenuPopup;

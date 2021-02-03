import React, { useRef } from "react";
import useOutsideAlerter from "./../../useoutsidealerter.js";
import { CELL_TYPES } from "../../constants.js";
import CalculationsCellMenuContents from "./calculationscellmenucontents";

function CellMenuPopup({ setPopupHidden, cell, cellID }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopupHidden);

  let cellMenuContents;
  switch (cell.type) {
    case CELL_TYPES.calculation:
      cellMenuContents = (
        <CalculationsCellMenuContents cell={cell} cellID={cellID} />
      );
      break;
    case CELL_TYPES.chart:
      cellMenuContents = (
        <>
          <div className="cell-menu-row">
            <p>Change input</p>
          </div>
          <div className="cell-menu-row delete-row">
            <p>Delete</p>
          </div>
        </>
      );
      break;
    case CELL_TYPES.loadData:
      cellMenuContents = (
        <>
          <div className="cell-menu-row">
            <p>Filter data</p>
          </div>
          <div className="cell-menu-row delete-row">
            <p>Delete</p>
          </div>
        </>
      );
      break;
  }

  return (
    // Menu contents should change depending on the type of cell
    <div className="cell-menu-popup" ref={wrapperRef}>
      {cellMenuContents}
    </div>
  );
}

export default CellMenuPopup;
import React, { useState, useEffect } from "react";
import CellName from "./cellname";
import CellDescription from "./celldescription";
import CellType from "./celltype";
import { CELL_TYPES } from "../../constants.js";

import CalculationCell from "./calculationcell";
import ChartCell from "./chartcell";
import DataCell from "./datacell";
import CellMenuPopup from "./cellmenu";
import Options from "./../../images/options.svg";
import CalculationsMenu from "./calculationsmenu.js";

function Cell({ cellID, cell, data, setPopupShown }) {
  // const [popupShown, setPopupShown] = useState(false);

  if (cell == null) {
    return <div className="cell-container">Loading...</div>;
  }

  let cellOutput;
  switch (cell.type) {
    case CELL_TYPES.calculation:
      cellOutput = <CalculationCell cell={cell} cellID={cellID} data={data} />;
      break;
    case CELL_TYPES.chart:
      cellOutput = <ChartCell cell={cell} cellID={cellID} />;
      break;
    case CELL_TYPES.loadData:
      cellOutput = <DataCell cell={cell} cellID={cellID} data={data} />;
      break;
  }

  let cellOperation;
  switch (cell.type) {
    case CELL_TYPES.calculation:
      cellOperation =
        cell.calculation == null
          ? "Choose calculation"
          : "Calculating" + " " + cell.calculation;
      break;
    case CELL_TYPES.chart:
      cellOperation = "Displaying chart";
      break;
    case CELL_TYPES.loadData:
      cellOperation = "Loading data";
      break;
  }

  return (
    <>
      <div className="cell-container">
        <div className="cell-options">
          <CellName cell={cell} cellID={cellID} />
          <div className="cell-operation"> {cellOperation}</div>
          <CellType cell={cell} cellID={cellID} />
          <img
            className="cell-menu"
            src={Options}
            onClick={() => setPopupShown(true)}
          ></img>
        </div>
        <div className="cell-output">{cellOutput}</div>
        <CellDescription cell={cell} cellID={cellID} />
      </div>
      {cell.type == "Calculation" ? (
        /* <div className="calculations-menu-bg" > */
        <CalculationsMenu
          setPopupHidden={() => setPopupShown(false)}
          cell={cell}
          cellID={cellID}
        />
      ) : null}
    </>
  );
}

export default Cell;

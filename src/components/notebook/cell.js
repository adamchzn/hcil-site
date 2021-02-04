import React from "react";
import { CELL_TYPES } from "../../constants.js";

import CalculationCell from "./calculationcell";
import ChartCell from "./chartcell";
import DataCell from "./datacell";
import CellLayout from "./celllayout";

function Cell({ cellID, cell, data }) {
  if (cell == null) {
    return <div className="cell-container">Loading...</div>;
  }

  switch (cell.type) {
    case CELL_TYPES.calculation:
      return <CalculationCell cell={cell} cellID={cellID} data={data} />;
    case CELL_TYPES.chart:
      return <ChartCell cell={cell} cellID={cellID} />;
    case CELL_TYPES.loadData:
      return <DataCell cell={cell} cellID={cellID} data={data} />;
    default:
      return <CellLayout cell={cell} cellID={cellID} />;
  }
}

export default Cell;

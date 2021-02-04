import React from "react";
import CellLayout from "./celllayout.js";
import Chart from "./../../images/Group 5.png";
import ChartCellMenuContents from "./chartcellmenucontents.js";

function ChartCell({ cell, cellID }) {
  return (
    <CellLayout
      cell={cell}
      cellID={cellID}
      cellOperation="Chart"
      popupContents={<ChartCellMenuContents />}
    >
      <img className="chart" src={Chart}></img>
    </CellLayout>
  );
}

export default ChartCell;

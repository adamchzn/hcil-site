import React from "react";
import CellLayout from "./celllayout.js";
import DataTable from "./datatable.js";
import DataCellMenuContents from "./datacellmenucontents.js";

function DataCell({ cell, cellID, data }) {
  return (
    <CellLayout
      cell={cell}
      cellID={cellID}
      cellOperation="Load data"
      popupContents={<DataCellMenuContents />}
    >
      <DataTable data={data} />
    </CellLayout>
  );
}

export default DataCell;

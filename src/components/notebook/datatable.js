import React from "react";

import TableColumn from "./tablecolumn.js";

function DataTable({ data }) {
  return (
    <div className="data-table">
      {data == null
        ? "Loading..."
        : Object.keys(data).map((columnID) => (
            <TableColumn column={data[columnID]} columnID={columnID} />
          ))}
    </div>
  );
}

export default DataTable;

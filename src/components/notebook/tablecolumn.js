import React from "react";

import TableCell from "./tablecell.js";

function TableColumn({ column, columnID }) {
  return (
    <div className="table-column">
      {column == null ? (
        "Loading..."
      ) : (
        <>
          <div className="header-cell table-cell">{columnID}</div>
          {column.map((value) => (
            <TableCell column={column} value={value} />
          ))}
        </>
      )}
    </div>
  );
}

export default TableColumn;

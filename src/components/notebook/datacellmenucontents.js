import React, { useState } from "react";

function DataCellMenuContents({ onClickChangeDataset }) {
  return (
    <>
      <div className="cell-menu-row" onClick={onClickChangeDataset}>
        <p>Change dataset</p>
      </div>
    </>
  );
}

export default DataCellMenuContents;

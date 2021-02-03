import React, { useState } from "react";
import CalculationsMenu from "./calculationsmenu";

function CalculationsCellMenuContents(cell, cellID) {
  const [popupShown, setPopupShown] = useState(false);

  return (
    <>
      <div className="cell-menu-row" onClick={setPopupShown}>
        <p>Change calculation</p>
      </div>
      <div className="cell-menu-row delete-row">
        <p>Delete</p>
      </div>
    </>
  );
}

export default CalculationsCellMenuContents;

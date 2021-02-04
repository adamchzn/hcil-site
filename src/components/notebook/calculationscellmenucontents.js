import React from "react";

function CalculationsCellMenuContents({ onClickChangeCalc }) {
  return (
    <>
      <div className="cell-menu-row" onClick={onClickChangeCalc}>
        <p>Change calculation</p>
      </div>
    </>
  );
}

export default CalculationsCellMenuContents;

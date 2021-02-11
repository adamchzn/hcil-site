import React from "react";

function EmptyCalculationCell ({onClickChangeCalc}) {


    return (
        <button className="empty-calculation-cell" onClick={onClickChangeCalc}>
            Choose calculation
        </button>
    );
}

export default EmptyCalculationCell;
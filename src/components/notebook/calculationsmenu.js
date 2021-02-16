import React, { useRef, useState } from "react";
import firebase from "firebase";
import { CALCULATIONS } from "./../../constants.js";

function CalculationsMenu({ hideModal, cell, cellID }) {
  const [selectedCalc, setSelectedCalc] = useState(cell.calculation);

  const onTypeSelected = () => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        calculation: selectedCalc,
      });
    hideModal();
  };

  return (
    <>
      <div className="modal-item-container">
        <h4>Select operation</h4>
        {Object.keys(CALCULATIONS).map((key) => (
          <div className="calculations-menu-row">
            <input
              type="radio"
              name="calculations"
              value={CALCULATIONS[key]}
              id={CALCULATIONS[key]}
              onChange={() => setSelectedCalc(CALCULATIONS[key])}
              checked={CALCULATIONS[key] == selectedCalc}
            ></input>
            <label htmlFor={CALCULATIONS[key]}>{CALCULATIONS[key]}</label>
          </div>
        ))}
      </div>

      <button className="save-calculation-change" onClick={onTypeSelected}>
        Save
      </button>
    </>
  );
}

export default CalculationsMenu;

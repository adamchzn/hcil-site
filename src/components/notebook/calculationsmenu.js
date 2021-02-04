import React, { useRef } from "react";
import firebase from "firebase";
import useOutsideAlerter from "./../../useoutsidealerter.js";
import { CALCULATIONS } from "./../../constants.js";

function CalculationsMenu({ setPopupHidden, cell, cellID }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopupHidden);

  const onTypeSelected = (e) => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        calculation: e.target.value,
      });
  };

  return (
    <>
      <h4>Select operation</h4>
      {Object.keys(CALCULATIONS).map((key) => (
        <div className="calculations-menu-row">
          <input
            type="radio"
            name="calculations"
            value={CALCULATIONS[key]}
            onChange={onTypeSelected}
          ></input>
          <label htmlFor={CALCULATIONS[key]}>{CALCULATIONS[key]}</label>
        </div>
      ))}
    </>
  );
}

export default CalculationsMenu;

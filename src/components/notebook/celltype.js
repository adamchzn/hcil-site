import React from "react";
import firebase from "firebase";
import {CELL_TYPES} from "../../constants.js";

function CellType({ cell, cellID }) {
  const onTypeSelected = (e) => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        type: e.target.value,
      });
  };

  return (
    <select className="cell-type" value={cell.type} onChange={onTypeSelected}>
      {Object.keys(CELL_TYPES).map((key) => (
        <option value={CELL_TYPES[key]} defaultValue={cell.type==CELL_TYPES[key]}>
          {CELL_TYPES[key]}
        </option>
      ))}
    </select>
  );
}

export default CellType;

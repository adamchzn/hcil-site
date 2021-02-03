import React from "react";
import firebase from "firebase";

function CellName({ cell, cellID }) {
  const onTextChange = (e) => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        name: e.target.value,
      });
  };

  return (
    <input
      className="cell-name"
      onChange={onTextChange}
      placeholder="Cell name"
      value={cell.name}
    ></input>
  );
}

export default CellName;

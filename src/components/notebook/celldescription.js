import React from "react";
import firebase from "firebase";

function CellDescription({ cell, cellID }) {
  const onTextChange = (e) => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        description: e.target.value,
      });
  };

  return (
    <textarea
      className="cell-description"
      type="text"
      onChange={onTextChange}
      placeholder="What does this mean?"
      value={cell.description}
      //   oninput={this.style.height = "", this.style.height = this.scrollHeight + "px"}
    ></textarea>
  );
}

export default CellDescription;

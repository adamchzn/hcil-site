import React, { useRef, useState } from "react";
import firebase from "firebase";
import { SOURCE_DATA_ID } from "./../../constants.js";

function CellgroupMenu({ hideModal, cellgroup, groupID, cellIDList, cells }) {
  const [selectedInput, setSelectedInput] = useState(cellgroup.input);

  const onInputSelected = () => {
    firebase
      .database()
      .ref("cellgroups/" + groupID)
      .set({
        ...cellgroup,
        input: selectedInput,
      });
    hideModal();
  };

  return (
    <>
      <div className="modal-item-container">
        <h4>Select input</h4>
        <div className="inputs-menu-row">
          <input
            type="radio"
            name="inputs"
            value={SOURCE_DATA_ID}
            id={SOURCE_DATA_ID}
            onChange={() => setSelectedInput(SOURCE_DATA_ID)}
            checked={SOURCE_DATA_ID == selectedInput}
          ></input>
          <label htmlFor={SOURCE_DATA_ID}>Source dataset</label>
        </div>
        {cellIDList.map((cellID) => {
          return (
            <div className="inputs-menu-row">
              <input
                type="radio"
                name="inputs"
                value={cellID}
                id={cellID}
                onChange={() => setSelectedInput(cellID)}
                checked={cellID == selectedInput}
              ></input>
              <label htmlFor={cellID}>{cells[cellID].name}</label>
            </div>
          );
        })}
      </div>

      <button className="save-input-change" onClick={onInputSelected}>
        Save
      </button>
    </>
  );
}

export default CellgroupMenu;

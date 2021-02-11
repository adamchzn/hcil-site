import React, { useRef, useState } from "react";
import firebase from "firebase";
import { useContext } from "react/cjs/react.development";
import DatasetsContext from "../../datasetscontext.js";

function DatasetsMenu({ hideModal, cell, cellID }) {
  const [selectedDataset, setSelectedDataset] = useState(cell.dataset);
  const datasets = useContext(DatasetsContext);

  const onTypeSelected = () => {
    firebase
      .database()
      .ref("cells/" + cellID)
      .set({
        ...cell,
        dataset: selectedDataset,
      });
    hideModal();
  };

  return (
    <>
      <div className="modal-item-container">
        <h4>Select operation</h4>
        {Object.keys(datasets).map((key) => (
          <div className="calculations-menu-row">
            <input
              type="radio"
              name="calculations"
              value={datasets[key].title}
              onChange={() => setSelectedDataset(key)}
              checked={key == selectedDataset}
            ></input>
            <label htmlFor={datasets[key].title}>{datasets[key].title}</label>
          </div>
        ))}
      </div>

      <button className="save-calculation-change" onClick={onTypeSelected}>
        Save
      </button>
    </>
  );
}

export default DatasetsMenu;

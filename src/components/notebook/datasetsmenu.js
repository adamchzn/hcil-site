import React, { useRef, useState } from "react";
import firebase from "firebase";
import { useContext } from "react/cjs/react.development";
import DatasetsContext from "../../datasetscontext.js";

function DatasetsMenu({ hideModal, notebook, notebookID }) {
  const [selectedDataset, setSelectedDataset] = useState(notebook.dataset);
  const datasets = useContext(DatasetsContext);

  const onTypeSelected = () => {
    firebase
      .database()
      .ref("notebooks/" + notebookID)
      .set({
        ...notebook,
        dataset: selectedDataset,
      });
    hideModal();
  };

  return (
    <>
      <div className="modal-item-container">
        <h4>Select dataset</h4>
        {Object.keys(datasets).map((key) => (
          <div className="calculations-menu-row">
            <input
              type="radio"
              name="calculations"
              value={datasets[key].title}
              id={datasets[key].title}
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

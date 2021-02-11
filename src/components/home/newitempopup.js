import React, { useRef } from "react";
import { useCreateNewNotebook, useImportNewDataset } from "./../../utilities.js";
import useOutsideAlerter from "./../../useoutsidealerter.js";
import DatasetImporter from "./../dataset/datasetimporter.js";

function NewItemPopup({ setPopupHidden }) {
  const createNewNotebook = useCreateNewNotebook();
  const importNewDataset = useImportNewDataset();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopupHidden);

  return (
    <div className="new-item-popup" ref={wrapperRef}>
      <div className="popup-row" onClick={createNewNotebook}>
        <p>Notebook</p>
      </div>
      <DatasetImporter onFileSelected={importNewDataset}>
        <div className="popup-row">
          <p>Dataset</p>
        </div>
      </DatasetImporter>
      <div className="popup-row">
        <p>Chart</p>
      </div>
    </div>
  );
}

export default NewItemPopup;

import React, { useState, useEffect } from "react";
import firebase from "firebase";
import DatasetContainer from "./datasetcontainer.js";
import DatasetImporter from "./../dataset/datasetimporter.js";
import { useImportNewDataset } from "./../../utilities.js";

function DatasetList() {
  const [datasets, setDatasets] = useState(null);
  const importNewDataset = useImportNewDataset();

  useEffect(() => {
    var datasetsRef = firebase.database().ref("datasets/");
    datasetsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setDatasets(data);
    });
  }, []);

  return (
    <div className="list-container">
      <div className="list-header">
        <h1>Datasets</h1>
        <DatasetImporter onFileSelected={importNewDataset}>
          <button className="list-new-button">New dataset</button>
        </DatasetImporter>
      </div>
      <div className="list-desc">
        Import a dataset from your computer or enter data from scratch.
      </div>
      <div className="list-break"></div>
      {datasets == null ? (
        <div className="list-container">Import your first dataset!</div>
      ) : (
        Object.keys(datasets)
          .slice(0)
          .reverse()
          .map((datasetID) => (
            <DatasetContainer datasetID={datasetID} datasets={datasets} />
          ))
      )}
    </div>
  );
}

export default DatasetList;

import React, { useState, useEffect } from "react";
import firebase from "firebase";

import DatasetContainer from "./datasetcontainer.js";

function DatasetList() {
  const [datasets, setDatasets] = useState(null);

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
      </div>
      {datasets == null
        ? <div className="list-container">Import your first dataset!</div>
        : Object.keys(datasets)
            .slice(0)
            .reverse()
            .map(() => (
              <DatasetContainer

              />
            ))}
    </div>
  );
}

export default DatasetList;

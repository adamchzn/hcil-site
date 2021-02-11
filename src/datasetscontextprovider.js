import React, { useState, useEffect } from "react";
import DatasetsContext from "./datasetscontext";
import firebase from "firebase";

function DatasetsContextProvider({ children }) {
  const [datasets, setDatasets] = useState(null);

  useEffect(() => {
    var datasetsRef = firebase.database().ref("datasets/");
    datasetsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setDatasets(data);
      console.log(data);
    });
  }, []);

  return (
    <DatasetsContext.Provider value={datasets}>
      {children}
    </DatasetsContext.Provider>
  );
}

export default DatasetsContextProvider;

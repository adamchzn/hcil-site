import React, { useState, useEffect } from "react";
import firebase from "firebase";

import ItemContainer from "./itemcontainer.js";

function NotebookList() {
  const [notebooks, setNotebooks] = useState(null);

  useEffect(() => {
    var notebooksRef = firebase.database().ref("notebooks/");
    notebooksRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setNotebooks(data);
    });
  }, []);

  return (
    <div className="list-container">
      <div className="list-header">
        <h1>Notebooks</h1>
        <button className="list-new-button">New</button>
      </div>
      <div className="list-desc">
        Analyze your data and report your findings.
      </div>
      {notebooks == null ? (
        <div className="list-container">Create your first notebook!</div>
      ) : (
        Object.keys(notebooks)
          .slice(0)
          .reverse()
          .map((notebookID) => (
            <ItemContainer
              notebookID={notebookID}
              notebook={notebooks[notebookID]}
            />
          ))
      )}
    </div>
  );
}

export default NotebookList;

import React, { useState } from "react";
import firebase from "firebase";

function NotebookTitle({ notebookID, notebook }) {
  const onTextChange = (e) => {
    firebase
      .database()
      .ref("notebooks/" + notebookID)
      .set({
        ...notebook,
        title: e.target.value,
      });
  };

  return (
    <input
      className="notebook-title"
      type="text"
      onChange={onTextChange}
      placeholder="Enter title..."
      value={notebook.title}
    ></input>
  );
}

export default NotebookTitle;

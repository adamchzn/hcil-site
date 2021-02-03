import React from "react";
import { Link } from "react-router-dom";
import { getNotebookRoute } from "../../routes";

function ItemContainer({ notebook, notebookID, editNotebook }) {
  return (
    <div className="list-item">
      <div className="item-contents-row-one">
        <h3>{notebook.title}</h3>
        <Link to={getNotebookRoute(notebookID)}>
          <button className="edit-button wrap">Edit</button>
        </Link>
      </div>
      <div className="item-contents-row-two">
        <p>Last edited</p>
        <p>Yesterday</p>
      </div>
    </div>
  );
}

export default ItemContainer;

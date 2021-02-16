import React, { useContext } from "react";
import { Link } from "react-router-dom";

function DatasetContainer({ datasets, datasetID }) {

  return (
    <div className="list-item">
      <div className="item-contents-row-one">
        <h3>{datasets[datasetID].title}</h3>
        {/* <Link to={getNotebookRoute(cell.dataset)}> */}
          <button className="edit-button wrap">Edit</button>
        {/* </Link> */}
      </div>
      <div className="item-contents-row-two">
        <p>Last edited</p>
        <p>Yesterday</p>
      </div>
    </div>
  );
}

export default DatasetContainer;

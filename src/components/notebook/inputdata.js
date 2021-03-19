import React, { useState, useContext } from "react";
import DataTable from "./datatable.js";
import DatasetsMenu from "./datasetsmenu.js";
import Modal from "./../modal.js";
import DatasetsContext from "./../../datasetscontext.js";
import { loadData } from "./../../calculations.js";

function InputData({ notebook, notebookID }) {
  const [modalShown, setModalShown] = useState(false);
  const datasets = useContext(DatasetsContext);
  const data=loadData(datasets, notebook);

  return (
    <div className="input-data">
      <DataTable data={data} />

      <Modal isShown={modalShown} hideModal={() => setModalShown(false)}>
        <DatasetsMenu
          hideModal={() => setModalShown(false)}
          notebook={notebook}
          notebookID={notebookID}
        />
      </Modal>

      <button onClick={() => setModalShown(true)}>
        {data == null ? "Choose dataset" : "Change dataset"}
      </button>
    </div>
  );
}

export default InputData;

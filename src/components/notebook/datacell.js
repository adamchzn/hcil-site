import React, { useState, useEffect, useContext } from "react";
import CellLayout from "./celllayout.js";
import DataTable from "./datatable.js";
import DataCellMenuContents from "./datacellmenucontents.js";
import DatasetsMenu from "./datasetsmenu.js";
import Modal from "./../modal.js";
import DatasetsContext from "./../../datasetscontext.js";

function DataCell({ cell, cellID, data }) {
  const [modalShown, setModalShown] = useState(false);
  const datasets = useContext(DatasetsContext);

  useEffect(() => {
    if (cell.dataset == null) {
      setModalShown(true);
    }
  }, [setModalShown, cell.dataset]);

  return (
    <CellLayout
      cell={cell}
      cellID={cellID}
      cellOperation={
        cell.dataset == null
          ? "Loading data"
          : "Loading " + datasets[cell.dataset].title
      }
      popupContents={
        <DataCellMenuContents
          onClickChangeDataset={() => setModalShown(true)}
        />
      }
    >
      <DataTable data={data} />

      <Modal isShown={modalShown} hideModal={() => setModalShown(false)}>
        <DatasetsMenu
          hideModal={() => setModalShown(false)}
          cell={cell}
          cellID={cellID}
        />
      </Modal>
    </CellLayout>
  );
}

export default DataCell;

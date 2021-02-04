import React, { useState } from "react";
import CellLayout from "./celllayout.js";
import DataTable from "./datatable.js";
import CalculationsCellMenuContents from "./calculationscellmenucontents.js";
import Modal from "./../modal.js";
import CalculationsMenu from "./calculationsmenu.js";

function CalculationCell({ cell, cellID, data }) {
  const [modalShown, setModalShown] = useState(false);

  return (
    <CellLayout
      cell={cell}
      cellID={cellID}
      cellOperation="Calculation"
      popupContents={
        <CalculationsCellMenuContents
          onClickChangeCalc={() => setModalShown(true)}
        />
      }
    >
      <DataTable data={data} />
      <div className="calculations-chart"></div>
        <Modal isShown={modalShown} hideModal={() => setModalShown(false)}>
          <CalculationsMenu
            hideModal={() => setModalShown(false)}
            cell={cell}
            cellID={cellID}
          />
        </Modal>
    </CellLayout>
  );
}

export default CalculationCell;

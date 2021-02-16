import React, { useState, useEffect } from "react";
import CellLayout from "./celllayout.js";
import DataTable from "./datatable.js";
import CalculationsCellMenuContents from "./calculationscellmenucontents.js";
import Modal from "./../modal.js";
import CalculationsMenu from "./calculationsmenu.js";
import EmptyCalculationCell from "./emptycalculationcell.js";

function CalculationCell({ cell, cellID, data }) {
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (cell.calculation == null) {
      setModalShown(true);
    }
  }, [setModalShown, cell.calculation]);

  return (
    <CellLayout
      cell={cell}
      cellID={cellID}
      cellOperation={
        cell.calculation == null
          ? "Calculating"
          : "Calculating " + cell.calculation
      }
      popupContents={
        <CalculationsCellMenuContents
          onClickChangeCalc={() => setModalShown(true)}
        />
      }
    >
      {cell.calculation == null ? (
        <>
          <div> To use the calculation cell, select a calcualation </div>
          <EmptyCalculationCell onClickChangeCalc={() => setModalShown(true)} />
        </>
      ) : (
        <>
          <DataTable data={data} />
          <div className="calculations-chart"></div>
        </>
      )}
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

import React from "react";
import DataTable from "./datatable.js";

function CalculationCell({ cell, cellID, data }) {
  return (
    <>
      <DataTable data={data}/>
      <div className="calculations-chart"></div>
    </>
  );
}

export default CalculationCell;

import React from "react";
import firebase from "firebase";

import Chart from "./../../images/Group 5.png";

function ChartCell({ cell, cellID }) {
  return (
    <>
        <img className="chart" src={Chart}></img>
    </>
  );
}

export default ChartCell;

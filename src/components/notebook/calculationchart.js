import React from "react";
import ChartContainer from "./chartcontainer";
import {scatterplot} from "./../../charts.js";

function CalculationChart({data}) {
  return <ChartContainer chartFunction={scatterplot} data={data}/>;
}

export default CalculationChart;

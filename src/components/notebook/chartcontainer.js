import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function ChartContainer({chartFunction, data}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current == null || data == null) {
      return;
    }

    const svg = d3.select(svgRef.current);
    
    chartFunction(svg, data);

    return () => svg.selectAll().remove();
  }, [svgRef.current, chartFunction, data]);

  return <svg className="calculations-chart" ref={svgRef}></svg>;
}

export default ChartContainer;

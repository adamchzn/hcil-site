import * as d3 from "d3";

export function dumbData() {
  return {
    blah: [1, 4, 65, 87, 3, 25, 768, 123, 5, 7, 876, 3, 13],
    yah: [1, 34, 546, 8, 78, 89, 0, 234, 654, 7658, 3, 2],
  };
}

export function scatterplot(svg, _data, vars) {
  const g = svg.append("g");
  const data = dumbData();
  const combinedData = data.blah.map((value, i) => ({
    blah: value,
    yah: data.yah[i],
  }));
  console.log(combinedData);
  g.selectAll("circle")
    .data(combinedData)
    .join("circle")
    .attr("cx", d => d.blah)
    .attr("cy", d => d.yah)
    .attr("fill", "#2c50a0")
    .attr("r", 5);
}

import { CALCULATIONS, CELL_TYPES } from "./constants.js";

// calculate mean
export function mean(input) {
  const output = {};

  for (const columnID in input) {
    const column = input[columnID];

    let sum = 0;
    for (let i in column) {
      sum += column[i];
    }

    const mean = sum / column.length;
    output[columnID] = [mean];
  }

  return output;
}

// calculate median
export function median(input) {
  const output = {};

  for (const columnID in input) {
    const column = input[columnID];
    const median = columnMedian(column);

    output[columnID] = [median];
  }
  return output;
}

// calculate maximum
export function max(input) {
  const output = {};

  for (const columnID in input) {
    const column = input[columnID];

    let max = 0;
    for (let i in column) {
      if (column[i] > max) {
        max = column[i];
      }
    }
    output[columnID] = [max];
  }
  return output;
}

// calculate minimum
export function min(input) {
  const output = {};

  for (const columnID in input) {
    const column = input[columnID];

    let min = column[0];
    for (let i in column.slice(1)) {
      if (column[i] < min) {
        min = column[i];
      }
    }
    output[columnID] = [min];
  }
  return output;
}

// calculate quartiles
export function quartiles(input) {
  const output = {};

  let qOne = 1;
  let qThree = 3;
  for (const columnID in input) {
    const column = input[columnID];
    
    const sorted = [...column].sort((a, b) => a - b);
    const median = columnMedian(sorted);
    const splitOne = sorted.slice(0, median);
    const splitTwo = sorted.slice(median);

    qOne = columnMedian(splitOne);
    qThree = columnMedian(splitTwo);

    output[columnID] = [qOne, median, qThree];
  }
  return output;
}

function columnMedian(column) {
  let midpoint = 0;
  let median = 0;
  if (column.length % 2 === 0) {
    //even
    midpoint = column.length / 2;

    // need to order by value first
    const sorted = [...column].sort((a, b) => a - b);
    median = (sorted[midpoint] + sorted[midpoint - 1]) / 2;
  }

  if (column.length % 2 === 1) {
    //odd
    midpoint = Math.floor(column.length / 2);

    // need to order by value first
    const sorted = [...column].sort();
    median = sorted[midpoint];
  }
  return median;
}

// create template data
export function dumbdata() {
  const data = {
    columnOne: [10, 4, 6, 5, 3, 2, 35, 6, 7, 4],
    columnTwo: [32, 4, 7, 11, 27, 1, 4, 15, 5, 2],
    columnThree: [8, 4, 3, 6, 77, 33, 56, 2, 1, 3],
  };

  return data;
}

// perform calculation
// need to add a way to get the referenced dataset
export function doCalculations(cells, cellIDs, sourceInput) {
  const results = {};

  for (const i in cellIDs) {
    const input = i === 0 ? sourceInput : results[cellIDs[i - 1]];

    let output;
    const cellID = cellIDs[i];
    switch (cells[cellID].type) {
      case CELL_TYPES.calculation:
        switch (cells[cellID].calculation) {
          case CALCULATIONS.mean:
            output = mean(input);
            break;
          case CALCULATIONS.median:
            output = median(input);
            break;
          case CALCULATIONS.min:
            output = min(input);
            break;
          case CALCULATIONS.max:
            output = max(input);
            break;
          case CALCULATIONS.quartiles:
            output = quartiles(input);
            break;
        }
        break;
      case CELL_TYPES.chart:
        output = {};
        break;
    }
    results[cellID] = output;
  }
  return results;
}

export function loadData(datasets, notebook) {
  if (datasets == null || datasets[notebook.dataset] == null) {
    return {};
  }
  return datasets[notebook.dataset].data;
}

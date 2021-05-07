import { useEffect, useState, useContext } from "react";
import { doCalculations } from "../../calculations";
import DatasetsContext from "../../datasetscontext";
import { SOURCE_DATA_ID } from "./../../constants.js";
import { allCellgroupsLoaded } from "./../../utilities.js";

export function useCellCalculations(notebook, cellgroups, cells) {
  const [results, setResults] = useState({});
  const datasets = useContext(DatasetsContext);
  const cellgroupsLoaded = allCellgroupsLoaded(notebook, cellgroups);

  useEffect(() => {
    if (datasets !== null && cells !== null && !cellgroupsLoaded) {
      const currentResults = {};
      const sourceDataset = datasets[notebook.dataset].data;

      for (let i in notebook.cellgroups) {
        const cellgroup = cellgroups[i];
        currentResults = doCellGroupCalcs(
          cellgroup,
          cells,
          currentResults,
          sourceDataset
        );
      }
      setResults(currentResults);
    }
  }, [cellgroups, cells]);

  return results;
}

export function doCellGroupCalcs(cellgroup, cells, results, sourceDataset) {
  const cellIDs = cellgroup.cells;
  const selectedCellID = cellgroup.input;
  const sourceInput = results[selectedCellID];

  if (cellgroup.input == SOURCE_DATA_ID) {
    sourceInput = sourceDataset;
  }

  return { ...doCalculations(cells, cellIDs, sourceInput), ...results };
}

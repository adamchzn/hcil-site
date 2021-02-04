import React, { useState } from "react";
import CellName from "./cellname";
import CellDescription from "./celldescription";
import CellType from "./celltype";

import CellMenuPopup from "./cellmenu";
import Options from "./../../images/options.svg";

function CellLayout({ cellID, cell, children, cellOperation, popupContents }) {
  const [popupShown, setPopupShown] = useState(false);

  return (
    <>
      <div className="cell-container">
        <div className="cell-options">
          <CellName cell={cell} cellID={cellID} />
          <div className="cell-operation"> {cellOperation}</div>
          <CellType cell={cell} cellID={cellID} />
          <div className="cell-menu-container">
            <img
              className="cell-menu"
              src={Options}
              onClick={() => setPopupShown(true)}
            ></img>
            {popupShown ? (
              <CellMenuPopup
                cell={cell}
                cellID={cellID}
                setPopupHidden={() => setPopupShown(false)}
              >
                {popupContents}
              </CellMenuPopup>
            ) : null}
          </div>
        </div>
        <div className="cell-output">{children}</div>
        <CellDescription cell={cell} cellID={cellID} />
      </div>
    </>
  );
}

export default CellLayout;

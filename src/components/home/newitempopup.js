import React, { useRef } from "react";
import { useCreateNewNotebook } from "./../../utilities.js";
import useOutsideAlerter from "./../../useoutsidealerter.js";

function NewItemPopup({ setPopupHidden }) {
  const createNewNotebook = useCreateNewNotebook();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopupHidden);

  return (
    <div className="new-item-popup" ref={wrapperRef}>
      <div className="popup-row" onClick={createNewNotebook}>
        <p>Notebook</p>
      </div>
      <div className="popup-row">
        <p>Dataset</p>
      </div>
      <div className="popup-row">
        <p>Chart</p>
      </div>
    </div>
  );
}

export default NewItemPopup;

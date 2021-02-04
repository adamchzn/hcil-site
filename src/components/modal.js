import React, { useRef } from "react";
import useOutsideAlerter from "./../useoutsidealerter.js";

function Modal({ children, isShown, hideModal }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, hideModal);

  if (!isShown) {
    return null;
  }

  return (
    <div className="modal-bg">
      <div className="modal-wrapper" ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}

export default Modal;

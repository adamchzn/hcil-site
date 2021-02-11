import React, { useRef } from "react";

function DatasetImporter({ children, onFileSelected }) {
  const ref = useRef();

  return (
    <>
      <div onClick={() => ref.current.click()}>{children}</div>
      <input
        type="file"
        ref={ref}
        style={{ display: "none" }}
        accept=".csv"
        onChange={() => onFileSelected(ref.current.files[0])}
      ></input>
    </>
  );
}

export default DatasetImporter;

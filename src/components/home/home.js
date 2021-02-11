import React, { useState } from "react";

import Menu from "./menu.js";
import NotebookList from "./notebooklist.js";
import NewItemPopup from "./newitempopup.js";

function Home({children}) {
  const [popupShown, setPopupShown] = useState(false); 

  return (
    <div className="home-container">
      <Menu setPopupShown={setPopupShown} />
      {children}
      {popupShown ? (
        <NewItemPopup setPopupHidden={() => setPopupShown(false)}/>
      ) : null}
    </div>
  );
}

export default Home;

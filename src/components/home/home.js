import React, { useState } from "react";

import Menu from "./menu.js";
import List from "./list.js";
import NewItemPopup from "./newitempopup.js";

function Home() {
  const [popupShown, setPopupShown] = useState(false); 

  return (
    <div className="home-container">
      <Menu setPopupShown={setPopupShown} />
      <List />
      {popupShown ? (
        <NewItemPopup setPopupHidden={() => setPopupShown(false)}/>
      ) : null}
    </div>
  );
}

export default Home;

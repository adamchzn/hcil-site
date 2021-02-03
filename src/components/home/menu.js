import React from "react";
import { Link } from "react-router-dom";
import NewButton from "./../../images/new.svg";
import { ROUTES } from "./../../routes.js";

function Menu({ setPopupShown }) {
  return (
    <div className="menu-container">
      <img
        className="new-button"
        src={NewButton}
        alt="New Button"
        onClick={() => setPopupShown(true)}
      ></img>
      <h1 className="menu-head"> My work </h1>
      <Link to={ROUTES.homepage}>
        <h3 className="menu-subhead">Notebooks</h3>
      </Link>
      <h3 className="menu-subhead"> Datasets</h3>
      <h3 className="menu-subhead"> Charts</h3>
    </div>
  );
}

export default Menu;

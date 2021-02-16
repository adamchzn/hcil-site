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
        <p className="menu-subhead">Notebooks</p>
      </Link>
      <Link to={ROUTES.datasets}>
        <p className="menu-subhead">Datasets</p>
      </Link>
      <p className="menu-subhead"> Charts</p>
    </div>
  );
}

export default Menu;

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
        <div className="menu-subhead">Notebooks</div>
      </Link>
      <Link to={ROUTES.datasets}>
        <div className="menu-subhead">Datasets</div>
      </Link>
      <div className="menu-subhead"> Charts</div>
    </div>
  );
}

export default Menu;

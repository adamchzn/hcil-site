import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./../../routes.js";

function Menu() {
  return (
    <div className="menu-container">
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

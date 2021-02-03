import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./../../routes.js";

function NotebookHeader() {
  return (
    <nav className="notebook-header">
      <ul>
        <li>
          <Link className="nav-home" to={ROUTES.homepage}>Site name</Link>
        </li>
        <li>
          <a>Preview</a>
        </li>
      </ul>
    </nav>
  );
}

export default NotebookHeader;

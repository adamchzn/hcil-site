import React from "react";

function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <a>Site name</a>
        </li>
        <li>
          <svg className="icon-placeholder">
            <circle cx="30" cy="30" r="20" />
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import React from "react";
import Menu from "./menu.js";

function Home({ children }) {
  return (
    <div className="home-container">
      <Menu />
      {children}
    </div>
  );
}

export default Home;

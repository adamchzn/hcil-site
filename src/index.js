import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.scss";
import firebase from "firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header.js";
import Home from "./components/home/home.js";
import Notebook from "./components/notebook/notebook.js";

import { ROUTES } from "./routes.js";

function Container() {
  return (
    <Router>
      <Switch>
        <Route
          path={ROUTES.notebook}
          children={({ match }) => (
            <Notebook notebookID={match.params.notebookID} />
          )}
        ></Route>
        <Route path={ROUTES.homepage}>
          <div className="container">
            <Header />
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyDBTVpLIWCa_eD4Y1fNmagEbJ3yJ59oE_g",
  authDomain: "hcil-website.firebaseapp.com",
  databaseURL: "https://hcil-website.firebaseio.com",
  projectId: "hcil-website",
  storageBucket: "hcil-website.appspot.com",
  messagingSenderId: "1089716918653",
  appId: "1:1089716918653:web:8d47f9a294973c7cd01414",
  measurementId: "G-E92GSV896D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<Container />, document.getElementById("root"));

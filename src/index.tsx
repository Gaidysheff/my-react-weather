import "./styles/styles-sass.scss";
import "./babel";

import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="container">
    <h1>My Webpack Test</h1>
    <hr />
    <div className="logo"></div>
    <div>
      <img src="./images/webpack.png" alt="" />
    </div>
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>This is the LESS style</h2>
    </div>
    <div className="card">
      <h2>This is the SASS style</h2>
    </div>
  </div>
);
render(<App />, document.getElementById("app"));

console.log("Hello World");

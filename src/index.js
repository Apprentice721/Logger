import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Tree from "./Tree";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Tree />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

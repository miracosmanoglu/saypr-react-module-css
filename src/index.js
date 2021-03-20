import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import reportWebVitals from "./reportWebVitals";
import "./css/Index.css";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
    <App />
    {/* </HelmetProvider> */}
  </React.StrictMode>,
  rootElement
);

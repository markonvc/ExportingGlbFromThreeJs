import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArContextProvider } from "./context/ArContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ArContextProvider>
    <App />
  </ArContextProvider>
);

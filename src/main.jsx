import React from "react";
import ReactDOM from "react-dom/client";

import Snowfall from 'react-snowfall'

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Snowfall style={{ position: 'fixed' }}/>
  </React.StrictMode>
);

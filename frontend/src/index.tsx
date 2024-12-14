import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { App } from "./Pages/App";

import { InfoProvider } from "./Contexts/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./css/normalize.css";
import "./css/reset.css";

import "./css/footer/footer.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

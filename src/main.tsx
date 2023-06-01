import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./css/normalize.css";
import "./css/reset.css";

import "./css/servicii.css";
import "./css/servicii-container/servicii-container.css";
import "./css/servicii-container/servicii-description.css";
import "./css/servicii-container/servicii-img.css";
import "./css/servicii-container/servicii-item.css";

import "./css/footer/footer.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

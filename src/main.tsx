import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Despre from "./pages/despre";

import "./css/normalize.css";
import "./css/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Despre />
  </React.StrictMode>
);

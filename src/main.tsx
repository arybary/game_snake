import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import setLevelEvent from "../engine/events/setLevelEvent.ts";
import keyboardEvents from "../engine/events/keyboardEvents.ts";

setLevelEvent(1);
document.addEventListener("keydown", keyboardEvents);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

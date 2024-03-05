import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import setLevelEvent from "./engine/events/setLevelEvent.ts";
import keyboardEvents from "./engine/events/keyboardEvents.ts";

import handleSwipeEvent from "./engine/events/handleSwipeEvent.ts";
// import changeDirectionEvent from "./engine/events/changeDirectionEvent.ts";
// import swipeEvent from "./engine/events/swipeEvent.ts";

setLevelEvent(1);
// document.addEventListener("keydown", changeDirectionEvent);
document.addEventListener("keydown", keyboardEvents);
document.addEventListener("touchstart", handleSwipeEvent);
document.addEventListener("touchmove", handleSwipeEvent);
// document.addEventListener("touchstart", swipeEvent);
// const gameElement = document.getElementById("root");

// console.log(gameElement);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

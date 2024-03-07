import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import setLevelEvent from "./engine/events/setLevelEvent.ts";
import keyboardEvents from "./engine/events/keyboardEvents.ts";

// import handleSwipeEvent from "./engine/events/handleSwipeEvent.ts";
// import changeDirectionEvent from "./engine/events/changeDirectionEvent.ts";
// import swipeEvent from "./engine/events/swipeEvent.ts";

setLevelEvent(1);
// document.addEventListener("keydown", changeDirectionEvent);
document.addEventListener("keydown", keyboardEvents);
// document.addEventListener("touchstart", swipe);
// const gameElement = document.getElementById("root");
// const playGround = document.querySelector("#root");
let lastY = 1;
document.addEventListener(
  "touchmove",
  function (event) {
    const lastS = document.documentElement.scrollTop;
    if (
      lastS == 0 &&
      lastY - event.touches[0].clientY < 0 &&
      event.cancelable
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
    lastY = event.touches[0].clientY;
  },
  { passive: false }
);
// if (playGround) {
// document.addEventListener("touchstart", handleSwipeEvent);
// document.addEventListener("touchmove", handleSwipeEvent);
// }
// console.log(playGround);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

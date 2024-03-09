import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import checkTimerStep from "../time/checkTimerStep";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { checkPause } from "./pauseEvent";
import { getInterruptGame } from "./interruptGameEvent";
import protocolExecutor from "../protocol/protocolExecutor";
import { TouchEventHandler } from "react";

let x1: number | null = null;
let y1: number | null = null;

const handleSwipeEvent: TouchEventHandler<HTMLDivElement> = (e): Event => {
  const moveDirection = findLastMoveDirection();
  let newName = "";
  let newValue = 0;
  if (checkTimerStep() || getInterruptGame())
    return { name: newName, value: newValue };
  if (e.type === "touchstart") {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  } else if (e.type === "touchmove") {
    const x2 = e.touches[0].clientX;
    const y2 = e.touches[0].clientY;

    if (x1 && y1) {
      const xDiff = x2 - x1;
      const yDiff = y2 - y1;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0 && moveDirection !== "Y") {
          newName = "Y";
          newValue = 1;
        } else if (xDiff < 0 && moveDirection !== "Y") {
          newName = "Y";
          newValue = -1;
        }
      } else {
        if (yDiff > 0 && moveDirection !== "X") {
          newName = "X";
          newValue = -1;
        } else if (yDiff < 0 && moveDirection !== "X") {
          newName = "X";
          newValue = 1;
        }
      }
    }
    x1 = null;
    y1 = null;
  }

  if (newName !== "" && !checkPause() && moveDirection !== "") {
    TIMER.startTimer();
  }

  const newEvent = Object.assign({}, { name: newName, value: newValue });
  protocolExecutor(newEvent);

  return newEvent;
};

export default handleSwipeEvent;

import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import checkTimerStep from "../time/checkTimerStep";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { checkPause } from "./pauseEvent";
import { getInterruptGame } from "./interruptGameEvent";
import { TouchEventHandler } from "react";
import { Touch } from "../../types/controls";

let lastY = 1;

export const screenStart: TouchEventHandler<HTMLDivElement> = (e): Event => {
  const touches = e.changedTouches;
  const newEvent: Event = {
    name: "",
    value: 0,
  };
  console.log(touches);
  return newEvent;
};

export const screenEnd: TouchEventHandler<HTMLDivElement> = (e): Event => {
  const touches = e.changedTouches;
  const newEvent: Event = {
    name: "",
    value: 0,
  };
  console.log(touches);
  return newEvent;
};

export const screenMove: TouchEventHandler<HTMLDivElement> = (e) => {
  const lastS = document.documentElement.scrollTop;
  if (lastS == 0 && lastY - e.touches[0].clientY < 0 && e.cancelable) {
    e.preventDefault();
    e.stopPropagation();
  }
  lastY = e.touches[0].clientY;
};

const handleSwipeEvent: TouchEventHandler<HTMLDivElement> = (e): Event => {
  const moveDirection = findLastMoveDirection();
  let newName = "";
  let newValue = 0;
  const start: Touch = {
    x: 0,
    y: 0,
  };
  const end: Touch = {
    x: 0,
    y: 0,
  };

  const touches = e.changedTouches;
  if (checkTimerStep() || getInterruptGame())
    return { name: newName, value: newValue };
  if (e.type === "touchstart") {
    start.x = touches[0].clientX;
    start.y = touches[0].clientY;
  }
  if (e.type === "touchend") {
    end.x = touches[0].clientX;
    end.y = touches[0].clientY;

    const xDiff = end.x - start.x;
    const yDiff = end.y - start.y;

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
    if (newName !== "" && !checkPause() && moveDirection !== "") {
      TIMER.startTimer();
    }
  }
  const newEvent = Object.assign({}, { name: newName, value: newValue });
  console.log({ newName, newValue, moveDirection });
  return newEvent;
};

export default handleSwipeEvent;

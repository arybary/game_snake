import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import checkTimerStep from "../time/checkTimerStep";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { getInterruptGame } from "./interruptGameEvent";
import { getTouch } from "./touchEvent";

const swipeDirectionEvent = (): Event => {
  const moveDirection = findLastMoveDirection();
  const newEvent: Event = {
    name: "",
    value: 0,
  };
  if (checkTimerStep() || getInterruptGame()) return newEvent;
  const xDiff = getTouch()[1].x - getTouch()[0].x;
  const yDiff = getTouch()[1].y - getTouch()[0].y;
  if (Math.abs(xDiff) < Math.abs(yDiff)) {
    if (yDiff > 0 && moveDirection !== "X") {
      newEvent.name = "X";
      newEvent.value = -1;
    } else if (yDiff < 0 && moveDirection !== "X") {
      newEvent.name = "X";
      newEvent.value = 1;
    }
  } else {
    if (xDiff > 0 && moveDirection !== "Y") {
      newEvent.name = "Y";
      newEvent.value = 1;
    } else if (xDiff < 0 && moveDirection !== "Y") {
      newEvent.name = "Y";
      newEvent.value = -1;
    }
  }
  if (newEvent.name !== "") TIMER.startTimer();

  return newEvent;
};

export default swipeDirectionEvent;

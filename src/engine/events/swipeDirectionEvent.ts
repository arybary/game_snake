import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { getInterruptGame } from "./interruptGameEvent";
import { getTouch } from "./touchEvent";
import { checkPause, touchPauseEvent } from "./pauseEvent";
import { getSnakeHeadParams } from "../snake/snake";

const swipeDirectionEvent = (): Event => {
  const moveDirection = findLastMoveDirection();
  const newEvent: Event = {
    name: "",
    value: 0,
  };
  if (getInterruptGame()) return newEvent;
  const xDiff = getTouch()[1].x - getTouch()[0].x;
  const yDiff = getTouch()[1].y - getTouch()[0].y;
  if (Math.abs(Math.abs(xDiff) - Math.abs(yDiff)) > 10) {
    if (Math.abs(xDiff) < Math.abs(yDiff)) {
      if (yDiff > 0 && moveDirection.name !== "X") {
        newEvent.name = "X";
        newEvent.value = -1;
      } else if (yDiff < 0 && moveDirection.name !== "X") {
        newEvent.name = "X";
        newEvent.value = 1;
      }
    } else {
      if (xDiff > 0 && moveDirection.name !== "Y") {
        newEvent.name = "Y";
        newEvent.value = 1;
      } else if (xDiff < 0 && moveDirection.name !== "Y") {
        newEvent.name = "Y";
        newEvent.value = -1;
      }
    }
    if (!TIMER.checkTimerWorking() && !checkPause()) {
      TIMER.startTimer();
      return newEvent;
    }
    if (Math.abs(xDiff) < Math.abs(yDiff)) {
      const snakeStep = getSnakeHeadParams().snakeHeadStepX;
      if (yDiff > 0 && moveDirection.name === "X") {
        newEvent.name = "X";
        newEvent.value = snakeStep !== 1 ? "+" : "-";
      } else if (yDiff < 0 && moveDirection.name === "X") {
        newEvent.name = "X";
        newEvent.value = snakeStep !== -1 ? "+" : "-";
      }
    } else {
      const snakeStep = getSnakeHeadParams().snakeHeadStepY;
      if (xDiff > 0 && moveDirection.name === "Y") {
        newEvent.name = "Y";
        newEvent.value = snakeStep !== -1 ? "+" : "-";
      } else if (xDiff < 0 && moveDirection.name === "Y") {
        newEvent.name = "Y";
        newEvent.value = snakeStep !== 1 ? "+" : "-";
      }
    }
  } else touchPauseEvent();

  if (newEvent.name !== "" && !checkPause()) TIMER.startTimer();

  return newEvent;
};

export default swipeDirectionEvent;

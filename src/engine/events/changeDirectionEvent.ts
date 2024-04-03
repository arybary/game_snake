/**
 * @module changeDirectionEvent.ts Управление змейкой с клавиатуры
 *    @function changeDirectionEvent Отрабатывает нажатие клавиш
 */
import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import checkTimerStep from "../time/checkTimerStep";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { getInterruptGame } from "./interruptGameEvent";
import { checkPause } from "./pauseEvent";
/**
 * Изменяет направление движения змейки при нажатии клавиш со стрелками
 * @param e событие нажатия клавиши на клавиатуре
 * @description
 * 1. Каждое нажатие должно фиксироваться рендером
 * 2. Повтороное нажатие не отрабатывается
 * 3. Если скорость движения змейки нулевая, нажатие также не отрабатывается
 * 4. Отработка нажатия клавиши происходит внесением записи об этом в протокол
 * 5. Нажатие клавиши запускает игру
 * @returns событие изменения направления движения змейки, или "пустое" событие
 */
const changeDirectionEvent = (e: KeyboardEvent): Event => {
  const moveDirection = findLastMoveDirection();
  let newName = "";
  let newValue = 0;
  if (checkTimerStep() || getInterruptGame())
    return { name: newName, value: newValue };
  if (e.code === "ArrowUp" && moveDirection.name !== "X") {
    newName = "X";
    newValue = 1;
  } else if (e.code === "ArrowDown" && moveDirection.name !== "X") {
    newName = "X";
    newValue = -1;
  } else if (e.code === "ArrowLeft" && moveDirection.name !== "Y") {
    newName = "Y";
    newValue = -1;
  } else if (e.code === "ArrowRight" && moveDirection.name !== "Y") {
    newName = "Y";
    newValue = 1;
  }
  if (newName !== "" && !checkPause()) TIMER.startTimer();
  const newEvent = Object.assign({}, { name: newName, value: newValue });
  return newEvent;
};

export default changeDirectionEvent;

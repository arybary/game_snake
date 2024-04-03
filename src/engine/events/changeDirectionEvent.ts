/**
 * @module changeDirectionEvent.ts Управление змейкой с клавиатуры
 *    @var previousHeadCoord Хранит положение головы змейки перед текщим ходом
 *    @function changeDirectionEvent Отрабатывает нажатие клавиш
 */
import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import checkTimerStep from "../time/checkTimerStep";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { getInterruptGame } from "./interruptGameEvent";
import { checkPause } from "./pauseEvent";
import { getSnakeHeadParams } from "../snake/snake";
import { checkTimerWorking } from "../time/isTimer";
/**
 * @var Положение головы змейки перед совершением хода
 */
const previousHeadCoord = {
  x: 0,
  y: 0,
};
/**
 * Запоминает положение головы змейки на текущем ходе
 */
function setPreviousHeadCoord(coord: number[]) {
  previousHeadCoord.x = coord[0];
  previousHeadCoord.y = coord[1];
}
/**
 * Изменяет направление движения змейки при нажатии клавиш со стрелками
 * @param e событие нажатия клавиши на клавиатуре
 * @description
 * 1. Каждое нажатие должно фиксироваться рендером
 * 2. Повтороное нажатие не отрабатывается
 * 3. Если скорость движения змейки нулевая, нажатие также не отрабатывается
 * 4. Если последнее нажатие не отработано, следующее также не отрабатывается
 * 5. Отработка нажатия клавиши происходит внесением записи об этом в протокол
 * 6. Нажатие клавиши запускает игру
 * @returns событие изменения направления движения змейки, или "пустое" событие
 */
const changeDirectionEvent = (e: KeyboardEvent): Event => {
  const moveDirection = findLastMoveDirection();
  if (!checkTimerWorking()) {
    setPreviousHeadCoord([0, 0]);
    moveDirection.name = "Z";
  }
  let newName = "";
  let newValue = 0;
  if (
    checkTimerStep() ||
    getInterruptGame() ||
    (previousHeadCoord.x === getSnakeHeadParams().snakeHeadCoordX &&
      previousHeadCoord.y === getSnakeHeadParams().snakeHeadCoordY)
  )
    return { name: newName, value: newValue };
  setPreviousHeadCoord([
    getSnakeHeadParams().snakeHeadCoordX,
    getSnakeHeadParams().snakeHeadCoordY,
  ]);
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

// /**
//  *  @module keyboardEvents.ts Управляет нажатием клавиш на клавиатуре
//  *     @function keyboardEvents Переводит нажатие клавиш в события игры
//  */
// import * as RENDER from "../render/isRender";
// import handleSwipeEvent from "./handleSwipeEvent";
// import { checkPause, pauseEvent } from "./pauseEvent";
// import * as TIMER from "../time/isTimer";
// import speedEvent from "./speedEvent";
// import { checkMistake } from "../lives/isMistake";
// import { getTimer } from "../time/timer";
// import protocolExecutor from "../protocol/protocolExecutor";
// import { howMuchIsLeftToEat } from "../food/currentFoodNumber";
// import findLastMoveDirection from "../protocol/findLastMoveDirection";

// /**
//  * Следит за нажатием клавиш со стрелками, Ctrl, Shift и Space
//  * @param e событие нажатия клавиши на клавиатуре
//  * @returns прерывает выполнение функции, если нажата неиспользуемая клавиша
//  */
// function swipeEvent(e: TouchEvent) {
//   const newDirection = handleSwipeEvent(e);

//   //   if ("touches" in e) {
//   // Обработка события свайпа (touch event)

//   console.log(newDirection);

//   // const newSpeed = speedEvent(e);
//   // const pause = findLastMoveDirection() !== "" ? pauseEvent(e) : false;

//   // if (!pause && newDirection.name !== "") TIMER.startTimer();
//   // if (
//   //   (newDirection.name === "" && newSpeed.name === "") ||
//   //   howMuchIsLeftToEat() === 0
//   // )
//   //   return;
//   // if (
//   //   (TIMER.checkTimerWorking() || !checkMistake() || getTimer() === 0) &&
//   //   !checkPause()
//   // )
//   // newDirection.name !== ""
//   // ?
//   protocolExecutor(newDirection);
//   // : protocolExecutor(newSpeed);

//   RENDER.renderNotComplete();
// }

// export default swipeEvent;

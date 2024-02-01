/**
 *  @module pauseEvent.ts Управляет остановкой игры на паузу
 *     @var isPause Фиксирует остановку игры на паузу и прерывание паузы
 *     @function pauseEvent Отрабатывает нажатие клавиши "Space"
 *     @function checkPause Возвращает состояние игры
 */
import { stopTimer } from "../time/isTimer";
/**
 * При значении true - игра на паузе, false - нет
 */
let isPause = false;
/**
 * Возвращает true, если игра на паузе, и false, если нет
 * @returns isPause
 */
export function checkPause(): boolean {
  return isPause;
}
/**
 * При нажатии клавиши "Space" возвращает true для остановки игры на паузу
 * @param e событие нажатия клавиши
 * @returns true если игра останавливается на паузу  и false если нет
 */
export function pauseEvent(e: KeyboardEvent): boolean {
  if (e.code === "Space") {
    isPause = !isPause;
    stopTimer();
  }

  return isPause;
}

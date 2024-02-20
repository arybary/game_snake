/**
 *  @module gameOver.ts Обрабатывает событие окончания игры
 *     @function gameOver Выполняет закрытие текущей игры и запуск новой
 */
import { stopTimer } from "../time/isTimer";
import { getProtocol } from "./protocol";
/**
 * Выводит сообщение, помещает протокол в хранилище и перезапускает игру
 * @param value параметр окончания игры: истекло время или кончились жизни
 */
function gameOver(value: string): void {
  stopTimer();
  value === "lives limit"
    ? alert("Game over! Lives limit! Press OK to replay...")
    : alert("Game over! Time limit! Press OK to replay...");
  localStorage.setItem("protocol", JSON.stringify(getProtocol()));
  location.reload();
}

export default gameOver;

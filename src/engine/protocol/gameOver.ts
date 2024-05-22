/**
 *  @module gameOver.ts Обрабатывает событие окончания игры
 *     @function gameOver Выполняет закрытие текущей игры и запуск новой
 */
import { useMenuStore } from "../../store/menuStore";
import { stopTimer } from "../time/isTimer";
import { getProtocol } from "./protocol";
/**
 * Выводит сообщение, помещает протокол в хранилище и перезапускает игру
 * @param value параметр окончания игры: истекло время или кончились жизни
 */
function gameOver(value: string): void {
  const { toggleModal, selectTitleMenu } = useMenuStore.getState();
  stopTimer();

  value === "lives limit"
    ? selectTitleMenu("Game over! Lives limit! Press OK to replay...")
    : value === "no moves"
    ? selectTitleMenu("Game over! No moves! Press OK to replay...")
    : () => {
        toggleModal();
        selectTitleMenu("Game over! Time limit! Press OK to replay...");
      };
  // toggleModal();

  localStorage.setItem("protocol", JSON.stringify(getProtocol()));
}

export default gameOver;

/**
 * @module renderPlayground.ts Вывод на экран игрового поля и всех его объектов
 *    @function renderPlayground Рендер змейки, препятствий еды и бонусов
 */
import getSelectors from "./getSelectors";
import { getField } from "../field/fieldPerLevel";
import sceneObstacles from "./sceneObstacles";
import sceneSnake from "./sceneSnake";
import sceneFood from "./sceneFood";
import sceneBonuses from "./sceneBonuses";
import { getTimePerLevel } from "../time/timePerLevel";
import { getTimer } from "../time/timer";
/**
 * Рендер всех объектов игрового поля по ссылке на DOM-элемент
 */
function renderPlayground(): void {
  let scene = "";
  const { playBoard } = getSelectors();
  if (playBoard && getTimePerLevel() - getTimer() > 0) {
    playBoard.style.gridTemplate = `repeat(${getField()}, 1fr) / repeat(${getField()}, 1fr)`;
    scene += sceneSnake();
    scene += sceneObstacles();
    scene += sceneFood();
    scene += sceneBonuses();
    playBoard.innerHTML = scene;
  }
}

export default renderPlayground;

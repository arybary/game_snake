/**
 * @module sceneObstacles.ts Создание сцены с расположением препятствий на поле
 *    @function sceneObstacles Формирует html-разметку в виде строки
 */
import { getObstaclesFixCoord } from "../obstacles/obstaclesFix";
import { getObstaclesXCoord } from "../obstacles/obstaclesX";
import { getObstaclesYCoord } from "../obstacles/obstaclesY";
/**
 * Создает html-разметку по координатам всех типов препятствий для рендера
 * @returns сцену с препятствиями
 */
function sceneObstacles(): string {
  let scene = "";
  for (let i = 0; i < getObstaclesFixCoord().length; i++)
    scene += `<div class="obstacleFix" style="grid-area: ${
      getObstaclesFixCoord()[i][1]
    } / ${getObstaclesFixCoord()[i][0]}"></div>`;
  for (let i = 0; i < getObstaclesXCoord().length; i++)
    scene += `<div class="obstacleX" style="grid-area: ${
      getObstaclesXCoord()[i][1]
    } / ${getObstaclesXCoord()[i][0]}"></div>`;
  for (let i = 0; i < getObstaclesYCoord().length; i++)
    scene += `<div class="obstacleY" style="grid-area: ${
      getObstaclesYCoord()[i][1]
    } / ${getObstaclesYCoord()[i][0]}"></div>`;

  return scene;
}

export default sceneObstacles;

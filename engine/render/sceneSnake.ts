/**
 * @module sceneSnake.ts Создание сцены с расположением змейки на поле
 *    @function sceneSnake Формирует html-разметку в виде строки
 */
import * as SNAKE from "../snake/snake";
/**
 * Создает html-разметку по координатам тела змейки для рендера
 * @returns сцену со змейкой
 */
function sceneSnake(): string {
  let scene = "";
  if (SNAKE.getSnakeBodyCoord()) {
    for (let i = 0; i < SNAKE.getSnakeBodyCoord().length; i++) {
      scene += `<div class="head" style="grid-area: ${
        SNAKE.getSnakeBodyCoord()[i][1]
      } / ${SNAKE.getSnakeBodyCoord()[i][0]}"></div>`;
    }
  }
  return scene;
}

export default sceneSnake;

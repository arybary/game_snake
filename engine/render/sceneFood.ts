/**
 * @module sceneFood.ts Создание сцены с расположением еды на поле
 *    @function sceneSnake Формирует html-разметку в виде строки
 */
import { howMuchIsLeftToEat } from "../food/currentFoodNumber";
import { getFoodCoord } from "../food/food";
/**
 * Создает html-разметку по координатам еды для рендера
 * @description Выводит еду после генерации, если уровень не пройден
 * @returns сцену с едой
 */
function sceneFood(): string {
  let scene = "";
  if (getFoodCoord() && howMuchIsLeftToEat() !== 0) {
    scene = `<div class="food" style="grid-area: ${getFoodCoord()[1]} / ${
      getFoodCoord()[0]
    }"></div>`;
  }
  return scene;
}

export default sceneFood;

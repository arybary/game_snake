/**
 * @module sceneBonus.ts Создание сцены с расположением бонусов на поле
 *    @function sceneBonuses Формирует html-разметку в виде строки
 */
import { getBonusCoord, getCurrentBonus } from "../bonuses/bonus";
import { getBonusAvailability } from "../bonuses/bonusAvailableState";
import { getBonuses } from "../bonuses/bonusesPerLevel";
/**
 * Создает html-разметку по координатам всех типов бонусов для рендера
 * @returns сцену с бонусами
 */
function sceneBonuses(): string {
  let scene = "";
  if (getBonusAvailability())
    scene += `<div class="bonus-${
      getBonuses()[getCurrentBonus()].type
    }" style="grid-area: ${getBonusCoord()[1]} / ${getBonusCoord()[0]}"></div>`;
  return scene;
}

export default sceneBonuses;

/**
 *  @module snakeCatchesFoodEvent.ts Управляет контактом змейки с едой
 *     @function snakeCatchesFoodEvent Проверяет касание головы змейки с едой
 */
import { getDoubleScoresFood } from "../bonuses/bonusDoubleScoresFood";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
import { getFoodCoord, getFoodScores } from "../food/food";
import { checkMistake } from "../lives/isMistake";
import { addEvent } from "../protocol/protocol";
import protocolExecutor from "../protocol/protocolExecutor";
import { getSnakeHeadParams } from "../snake/snake";
/**
 *  При контакте змейки с едой создает событие и запускает его обработку
 */
function snakeCatchesFoodEvent(): void {
  const snakeHead = getSnakeHeadParams();
  const foodCoord = getFoodCoord();
  if (
    snakeHead.snakeHeadCoordX === foodCoord[0] &&
    snakeHead.snakeHeadCoordY === foodCoord[1]
  ) {
    if (getDoubleScoresFood())
      addEvent({ name: "bonus doubleScoresFood", value: getFoodScores() * 2 });
    if (!checkMistake())
      protocolExecutor({
        name: "food eaten",
        value: getCurrentFoodNumber() + 1,
      });
  }
}

export default snakeCatchesFoodEvent;

/**
 *  @module foodEaten.ts Управляет игрой после поедания еды змейкой
 *     @function foodEaten Изменяет параметры игры при поедании еды
 */
import { getDoubleScoresFood } from "../bonuses/bonusDoubleScoresFood";
import { getStopsGrowing } from "../bonuses/bonusSnakeStopsGrowing";
import { getFoodScores } from "../food/food";
import setFood from "../food/setFood";
import { setScores } from "../scores/scores";
import { addSnakeBodyCoord } from "../snake/snake";
/**
 * Выводит новую еду, задает вознаграждение, добавляет длину змейке, если можно
 */
function foodEaten() {
  setFood(1);
  setScores(getDoubleScoresFood() ? getFoodScores() * 2 : getFoodScores());
  if (!getStopsGrowing()) addSnakeBodyCoord([]);
}

export default foodEaten;

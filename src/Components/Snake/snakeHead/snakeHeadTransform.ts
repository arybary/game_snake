import { getAmountOfFood } from "../../../engine/food/amountOfFoodPerLevel";
import { getCurrentFoodNumber } from "../../../engine/food/currentFoodNumber";
import snakeHeadDiff from "./snakeHeadDiff";
import snakeHeadSetPosition from "./snakeHeadSetPosition";
import snakeHeadSetRotation from "./snakeHeadSetRotation";
import snakeHeadSetScale from "./snakeHeadSetScale";

let diffX = 0;
let diffY = 0;

function snakeHeadTransform() {
  [diffX, diffY] = snakeHeadDiff(diffX, diffY);
  const amountOfFood = getAmountOfFood();
  const currentFoodNumber = getCurrentFoodNumber();
  const pos = snakeHeadSetPosition(diffX, diffY, 0.05);
  const rot = snakeHeadSetRotation(diffX, diffY, 22);
  const scl = snakeHeadSetScale(0.6 + (0.4 * currentFoodNumber) / amountOfFood);

  return [pos, rot, scl];
}

export default snakeHeadTransform;

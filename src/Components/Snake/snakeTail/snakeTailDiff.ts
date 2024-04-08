import { getSnakeBodyCoord } from "../../../engine/snake/snake";
import { getDiff, setDiff } from "../snakeDiff";

function snakeTailDiff(index: number) {
  let [diffX, diffY] = getDiff();
  if (index === getSnakeBodyCoord().length - 1) {
    diffX = getSnakeBodyCoord()[index][1] - getSnakeBodyCoord()[index - 1][1];
    diffY = getSnakeBodyCoord()[index][0] - getSnakeBodyCoord()[index - 1][0];
  }
  setDiff(diffX, diffY);
}

export default snakeTailDiff;

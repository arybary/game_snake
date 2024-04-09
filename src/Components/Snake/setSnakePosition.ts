import { Vector3 } from "three";
import { SnakeBodyCoord } from "../../types/snake";
import { getField } from "../../engine/field/fieldPerLevel";

function setSnakePosition(
  index: number,
  snake: SnakeBodyCoord
): Vector3 | undefined {
  const gridSize = getField();
  const newPosition = new Vector3(
    Math.round(snake[index][1] - gridSize / 2 - 1),
    Math.round(snake[index][0] - gridSize / 2 - 1),
    0
  );

  return newPosition;
}

export default setSnakePosition;

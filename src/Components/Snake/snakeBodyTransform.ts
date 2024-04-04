import * as SNAKE from "../../engine/snake/snake";
import findLastMoveDirection from "../../engine/protocol/findLastMoveDirection";

let diffX = 0;
let diffY = 0;

function snakeBodyTransform(index: number) {
  if (index === 0 && !isNaN(+findLastMoveDirection().value)) {
    diffX =
      findLastMoveDirection().name === "X"
        ? 0
        : +findLastMoveDirection().value * -1;
    diffY =
      findLastMoveDirection().name === "Y"
        ? 0
        : +findLastMoveDirection().value * -1;
  }
  if (index !== 0) {
    diffX =
      SNAKE.getSnakeBodyCoord()[index][1] -
      SNAKE.getSnakeBodyCoord()[index - 1][1];
    diffY =
      SNAKE.getSnakeBodyCoord()[index][0] -
      SNAKE.getSnakeBodyCoord()[index - 1][0];
  }
  const pos =
    diffX === 0 && diffY === -1
      ? {
          right: index % 2 === 0 ? [0.05, 0, 0] : [-0.05, 0, 0],
          left: index % 2 === 0 ? [-0.05, 0, 0] : [0.05, 0, 0],
        }
      : diffX === 0 && diffY === 1
      ? {
          right: index % 2 === 0 ? [-0.05, 0, 0] : [0.05, 0, 0],
          left: index % 2 === 0 ? [0.05, 0, 0] : [-0.05, 0, 0],
        }
      : diffX === -1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [0.05, 0, 0] : [0.05, 0, 0],
          left: index % 2 === 0 ? [-0.05, 0, 0] : [-0.05, 0, 0],
        }
      : diffX === 1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [-0.05, 0, 0] : [-0.05, 0, 0],
          left: index % 2 === 0 ? [0.05, 0, 0] : [0.05, 0, 0],
        }
      : {
          right: [0.05, 0, 0],
          left: [-0.05, 0, 0],
        };
  const rot =
    diffX === 0 && diffY === -1
      ? {
          right: index % 2 === 0 ? [22, 0, 22] : [0, 0, 0],
          left: index % 2 === 0 ? [22, 0, 0] : [0, 0, 22],
        }
      : diffX === 0 && diffY === 1
      ? {
          right: index % 2 === 0 ? [22, 0, 0] : [0, 0, 22],
          left: index % 2 === 0 ? [22, 0, 22] : [0, 0, 0],
        }
      : diffX === -1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [22, 22, 0] : [22, 0, 22],
          left: index % 2 === 0 ? [22, 22, 22] : [22, 0, 0],
        }
      : diffX === 1 && diffY === 0
      ? {
          right: index % 2 === 0 ? [22, 22, 22] : [22, 0, 0],
          left: index % 2 === 0 ? [22, 22, 0] : [0, 22, 0],
        }
      : {
          right: [22, 0, 22],
          left: [22, 0, 0],
        };
  const scl = {
    right: [1],
    left: [1],
  };
  return [pos, rot, scl];
}

export default snakeBodyTransform;

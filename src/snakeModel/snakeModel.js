import * as THREE from "three";
import snakeBodyGenerator from "./snakeBody/snakeBodyGenerator";
import snakeHead from "./snakeHead/snakeHead";

function snakeModel(length) {
  const snake = new THREE.Group();
  snake.add(snakeHead());
  snake.add(snakeBodyGenerator(length));

  return snake;
}

export default snakeModel;

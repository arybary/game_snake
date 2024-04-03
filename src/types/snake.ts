import { Vector3 } from "@react-three/fiber";

export type SnakeHeadCoord = {
  snakeHeadCoordX: number;
  snakeHeadCoordY: number;
  snakeHeadStepX: number;
  snakeHeadStepY: number;
};
export type SnakeBodyCoord = number[][];
/**
 * @type тип возвращаемого функцией snakeCoordCompare результата сравнения
 */
export type HeadCompare = [snakeHead: SnakeHeadCoord, obstacleContact: boolean];
export type SnakeBodyGeometryProps = {
  position: Vector3;
  "rotation-x": number;
  "rotation-y": number;
  "rotation-z": number;
  scale: number;
};

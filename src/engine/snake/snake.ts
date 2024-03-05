/**
 * @module snake.ts Управляет змейкой
 *    @var snakeHead Параметры головы змейки
 *    @var snakeBody Координаты тела змейки
 *    @function setSnakeHeadParams Устанавливает параметры головы змейки
 *    @function setSnakeBodyCoord Устанавливает координаты тела змейки
 *    @function addSnakeBodyCoord Добавляет звено в тело змейки
 *    @function getSnakeHeadParams Возвращает параметры головы змейки
 *    @function getSnakeBodyCoord Возвращает координаты тела змейки
 */
import * as SNAKE from "../../types/snake";
/**
 * @var объект с координатами головы змейки и шагами её перемещения по вертикали и горизонтали
 */
let snakeHead: SNAKE.SnakeHeadCoord;
/**
 * @var массив с координатами головы и тела змейки
 */
let snakeBody: SNAKE.SnakeBodyCoord = [];
/**
 * Задает параметры головы змейки
 */
export function setSnakeHeadParams(snake: SNAKE.SnakeHeadCoord): void {
  snakeHead = Object.assign({}, snake);
}
/**
 * Увеличивает тело змейки
 * @param link Звено, увеличивающее длину тела змейки
 */
export function addSnakeBodyCoord(link: number[]): void {
  snakeBody.push(link);
}
/**
 * Задает координаты тела змейки
 * @param body Координаты всех звеньев тела змейки
 */
export function setSnakeBodyCoord(body: SNAKE.SnakeBodyCoord): void {
  snakeBody = [...body];
}
/**
 * Возвращает параметры головы змейки
 */
export function getSnakeHeadParams(): SNAKE.SnakeHeadCoord {
  return snakeHead;
}
/**
 * Возвращает координаты тела змейки
 * @returns snakeBody
 */
export function getSnakeBodyCoord(): SNAKE.SnakeBodyCoord {
  return snakeBody;
}

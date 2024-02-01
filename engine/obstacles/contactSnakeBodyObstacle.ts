/**
 * @module contactSnakeBodyObstacle.ts Управляет контактом препятствий со змейкой
 *    @function contactSnakeBodyObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import isContact from "../events/isContact";
import * as SNAKE from "../snake/snake";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description При контакте с телом и головой змейки фиксируется ошибка
 * @returns измененный шаг препятствия, коснувшегося тела змейки
 */
function contactSnakeBodyObstacle(props: obstacleContactProps): number {
  let { i, step } = props;
  const currentStep = step[i];
  SNAKE.getSnakeBodyCoord().forEach((pos) => {
    step[i] = obstacleBounce({ ...props, cell: pos });
  });
  // if (step[i] + currentStep === 0)
  //   SNAKE.setSnakeHeadParams(isContact(SNAKE.getSnakeHeadParams(), "obstacle"));

  return step[i];
}

export default contactSnakeBodyObstacle;

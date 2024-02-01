/**
 * @module contactBonusObstacle.ts Управляет контактом препятствий с бонусом
 *    @function contactBonusObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import { getBonusCoord } from "../bonuses/bonus";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий с бонусом меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description
 * @returns измененный шаг препятствия, коснувшегося бонуса
 */
function contactBonusObstacle(props: obstacleContactProps): number {
  let { i, step } = props;
  step[i] = obstacleBounce({ ...props, cell: getBonusCoord() });

  return step[i];
}

export default contactBonusObstacle;

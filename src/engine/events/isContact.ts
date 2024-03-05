/**
 *  @module isContact.ts Обрабатывает запрещенный контакт головы змейки
 *     @function isContact Запускается при контакте змейки с объектом игры
 */
import { SnakeHeadCoord } from "../../types/snake";
import { mistakeWasMade } from "../lives/isMistake";
import protocolExecutor from "../protocol/protocolExecutor";
/**
 *  Выполняет действия, связанные с запрещенным контактом головы змейки
 * @param snakeHead Параметры головы змейки
 * @param mistake запрещенный объект игры
 * @description
 *  1. обнуляет текущий шаг головы змейки
 *  2. фиксирует совершение ошибки
 *  3. фиксирует событие контакта головы змейки с препятствием
 * @returns Измененные параметры головы змейки
 */
function isContact(snakeHead: SnakeHeadCoord, mistake: string): SnakeHeadCoord {
  snakeHead.snakeHeadStepX = 0;
  snakeHead.snakeHeadStepY = 0;
  const coordX = snakeHead.snakeHeadCoordX;
  const coordY = snakeHead.snakeHeadCoordY;
  const value = `${mistake} ${coordX}:${coordY} contact`;
  mistakeWasMade();
  protocolExecutor({
    name: "life lost",
    value: value,
  });

  return snakeHead;
}

export default isContact;

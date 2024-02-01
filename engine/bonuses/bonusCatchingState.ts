/**
 * @module bonusCatchingState.ts Управление контактом бонусов со змейкой
 *    @var bonusCatchingState Фиксирует факт контакта и номер еды при нем
 *    @function catchBonus Вызывается при контакте головы змейки с бонусом
 *    @function getBonusCatchingStatus Статус контакта змейки с бонусом
 */
import { BonusCatchingState } from "../../types/bonus";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
/**
 * @var Касание змейки с бонусом, факт касания (true/false) и номер еды
 */
let bonusCatchingState: BonusCatchingState = {
  isBonusCaught: false,
  caughtFoodNumber: -1,
};
/**
 * Устанавливает факт касания бонуса со змейкой
 * @param isCatch Фиксация касания бонуса головой змейки
 */
export function catchBonus(isCatch: boolean): void {
  bonusCatchingState.isBonusCaught = isCatch;
  if (isCatch) bonusCatchingState.caughtFoodNumber = getCurrentFoodNumber();
}
/**
 * Возвращает факт касания бонуса головой змейки
 * @returns статус касания бонуса со змейкой
 */
export function getBonusCatchingStatus(): BonusCatchingState {
  return bonusCatchingState;
}

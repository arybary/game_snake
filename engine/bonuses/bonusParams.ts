/**
 * @module bonusParams.ts Управляет параметрами текущего бонуса
 *    @var bonusParams Хранит тип, значение и момент появление бонуса на поле
 *    @function setBonusParams Устанавливает параметры текущего бонуса
 *    @function getBonusParams Возвращает параметры текущего бонуса
 *    @function bonusSelect Выбирает текущий бонус из всех доступных
 */
import { BonusProps } from "../../types/bonus";
import { setCurrentBonus } from "./bonus";
import * as BONUS from "./bonusAvailableState";
import { getBonuses } from "./bonusesPerLevel";
import setBonusEvent from "../events/setBonusEvent";
import { catchBonus, getBonusCatchingStatus } from "./bonusCatchingState";
import { getCurrentFoodNumber } from "../food/currentFoodNumber";
import { addEvent } from "../protocol/protocol";
import protocolExecutor from "../protocol/protocolExecutor";
import { bonusAddTimeDeactivate, checkAddTime } from "./bonusAddTime";
import { bonusAddLivesDeactivate, checkAddLives } from "./bonusAddLives";
import { bonusAddScoresDeactivate, checkAddScores } from "./bonusAddScores";
/**
 * @var bonusParams Параметры текущего бонуса: тип, значение и момент появления
 */
let bonusParams: BonusProps;
/**
 * Задает данные текущего бонуса
 */
export function setBonusParams(): void {
  if (getBonuses().length !== 0) {
    getBonuses().forEach((bonus, index) => bonusSelect(bonus, index));
  }
}
/**
 * Возвращает параметры текущего бонуса: тип, значение и момент появления
 * @returns bonusParams
 */
export function getBonusParams(): BonusProps {
  return bonusParams;
}
/**
 * Выбирает текущий бонус и устанавливает его статус
 * @param bonus параметры бонуса
 * @param index порядковый номер бонуса в массиве всех бонусов
 */
function bonusSelect(bonus: BonusProps, index: number): void {
  if (
    getCurrentFoodNumber() === bonus.startFood &&
    !getBonusCatchingStatus().isBonusCaught &&
    !checkAddTime() &&
    !checkAddLives() &&
    !checkAddScores()
  ) {
    bonusParams = { ...bonus };
    setBonusEvent();
    BONUS.giveBonus();
    setCurrentBonus(index);
  }
  if (
    getBonusParams() &&
    getBonusCatchingStatus().isBonusCaught &&
    getBonusCatchingStatus().caughtFoodNumber + +getBonusParams().value ===
      getCurrentFoodNumber()
  )
    protocolExecutor({ name: "bonus", value: ` ${bonus.type} disabled` });
  if (getCurrentFoodNumber() === bonus.endFood) {
    bonusAddTimeDeactivate();
    bonusAddLivesDeactivate();
    bonusAddScoresDeactivate();
    if (BONUS.getBonusAvailability())
      addEvent({ name: "bonus", value: ` ${bonus.type} was not used` });
    BONUS.removeBonus();
    if (!getBonusCatchingStatus().isBonusCaught) catchBonus(false);
  }
}

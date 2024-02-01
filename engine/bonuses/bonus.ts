/**
 * @module bonus.ts Управляет бонусами на текущем уровне
 *    @var currentBonus Индекс текущего бонуса в массиве всех бонусов
 *    @var bonusCoord Координаты текущего бонуса
 *    @function setCurrentBonus Задает индекс текущего бонуса
 *    @function setBonusCoord Задает координаты текущего бонуса
 *    @function getCurrentBonus Возвращает индекс текущего бонуса
 *    @function getBonusCoord Возвращает координаты бонуса
 */
/**
 * @var Индекс текущего бонуса в массиве всех бонусов
 */
let currentBonus: number;
/**
 * @var Массив координат X и Y текущего бонуса
 */
let bonusCoord: number[];
/**
 * Задает индекс текущего бонуса в массиве всех бонусов
 *
 */
export function setCurrentBonus(index: number) {
  currentBonus = index;
}
/**
 * Задает координаты X и Y текущего бонуса
 * @param coord
 */
export function setBonusCoord(coord: number[]) {
  bonusCoord = [...coord];
}

/**
 * Возвращает индекс текущего бонуса в массиве всех бонусов
 * @returns currentBonus
 */
export function getCurrentBonus(): number {
  return currentBonus;
}
/**
 * Возвращает координаты X и Y текущего бонуса
 * @returns bonusCoord
 */
export function getBonusCoord(): number[] {
  return bonusCoord;
}

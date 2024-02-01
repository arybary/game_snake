/**
 * @module cellsBookingAroundSnake.ts Выделяет место змейке для начала движения
 *    @function cellsBookingAroundSnake Резервирует пустые ячейки вокруг змейки
 */
/**
 * Вычисляет координаты ячеек в квадратной области по стороне и левому краю
 * @param side Сторона квадратной области с пустыми ячейками вокруг змейки
 * @param pos Положение змейки на старте уровня
 * @returns массив с координатами зарезервированных ячеек вокруг змейки
 */
function cellsBookingAroundSnake(side: number, pos: number): number[][] {
  let booking: number[][] = [];
  for (let row = 0; row <= side; row++) {
    for (let col = 0; col <= side; col++) {
      booking.push([pos + row, pos + col]);
    }
  }

  return booking;
}

export default cellsBookingAroundSnake;

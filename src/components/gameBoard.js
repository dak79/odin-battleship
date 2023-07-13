import { pipe } from '../util/pipe';
export const GameBoard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  // TODO: refactor isEmpty, placeShip.
  // TODO: functional composition
  // TODO: refactor tests
  /**
   * Check if ship coordinates are inside the board.
   * @param {Object} ship - From Ship factory.
   * @param {Number} x
   * @param {Number} y
   * @param {Boolean} direction true Ver | false Hor
   * @returns {Boolean}
   */
  const isValidCoordinate = (coord) => coord >= 0 && coord <= 9;
  const shipLength = (ship) => ship.getLength();
  const xCoord = (length, x, y, direction) => (direction ? x : y + length);
  const yCoord = (length, x, y, direction) => (direction ? x + length : y);

  const isValidX = (ship, x, y, direction) =>
    pipe(
      () => shipLength(ship),
      (length) => xCoord(length, x, y, direction),
      (coord) => isValidCoordinate(coord)
    );

  console.log(isValidX);
  const isInBoard = (ship, x, y, direction) => {
    const length = ship.getLength();
    const isValid = (coord) => coord >= 0 && coord <= 9;

    const xCoord = direction ? x : x + length;
    const yCoord = direction ? y + length : y;

    return isValid(xCoord) && isValid(yCoord);
  };

  const isEmpty = (ship, x, y, direction) => {
    for (let i = 0; i < ship.getLength(); i++) {
      if (direction) {
        if (board[x][y + i]) return false;
      } else {
        if (board[x + i][y]) return false;
      }
    }
    return true;
  };

  const placeShip = (ship, x, y, direction) => {
    for (let i = 0; i < ship.getLength(); i++) {
      if (direction) {
        board[x][y + i] = ship;
      } else {
        board[x + i][y] = ship;
      }
    }
  };

  return {
    board,
    placeShip,
    isEmpty,
    isInBoard
  };
};

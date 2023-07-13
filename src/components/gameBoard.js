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
  const isInBoard = (ship, x, y, direction) => {
    const length = ship.getLength();
    const isValid = (coord) => coord >= 0 && coord <= 9;

    return direction
      ? isValid(x) && isValid(y + length)
      : isValid(x + length) && isValid(y);
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

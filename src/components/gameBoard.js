export const GameBoard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  // TODO: refactor isInBoard, isEmpty, placeShip.
  // TODO: functional composition
  // TODO: refactor tests

  const isInBoard = (ship, x, y, direction) => {
    for (let i = 0; i < ship.getLength(); i++) {
      if (direction) {
        if (x > 9 || x < 0 || y + i > 9 || y + i < 0) return false;
      } else {
        if (x + i > 9 || x + i < 0 || y > 9 || y < 0) return false;
      }
    }
    return true;
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

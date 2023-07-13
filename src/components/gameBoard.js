export const GameBoard = () => {
  const board = Array.from({ length: 10 }, () => Array(10).fill(null));

  /**
   * Check if ship coordinates are inside the board.
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor.
   * @returns {Boolean}
   */
  const isInBoard = (ship, x, y, direction) => {
    const length = ship.getLength();
    const isValid = (coord) => coord >= 0 && coord <= 9;

    const xCoord = direction ? x : x + length;
    const yCoord = direction ? y + length : y;

    return isValid(xCoord) && isValid(yCoord);
  };

  /**
   * Check if there is enough space on board for a ship.
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns {Boolean}
   */
  const isSpaceAvailable = (ship, x, y, direction) => {
    const length = ship.getLength();
    const isCellEmpty = (x, y) => !board[x][y];

    for (let i = 0; i < length; i++) {
      const xCoord = direction ? x : x + i;
      const yCoord = direction ? y + i : y;

      if (!isCellEmpty(xCoord, yCoord)) return false;
    }
    return true;
  };

  /**
   * Check if a ship placement is valid on board.
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns {Boolean}
   */
  const isValidPlacement = (ship, x, y, direction) =>
    isInBoard(ship, x, y, direction) && isSpaceAvailable(ship, x, y, direction);

  /**
   * Add ship on the board.
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   */
  const addShipToBoard = (ship, x, y, direction) => {
    const length = ship.getLength();

    const updateBoardCell = (i) => {
      const xCoord = direction ? x : x + i;
      const yCoord = direction ? y + i : y;
      board[xCoord][yCoord] = ship;
    };

    for (let i = 0; i < length; i++) {
      updateBoardCell(i);
    }
  };

  /**
   * Try to place a ship on bord
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns A ship on board or false
   */
  const placeShip = (ship, x, y, direction) =>
    isValidPlacement(ship, x, y, direction)
      ? addShipToBoard(ship, x, y, direction)
      : false;

  return {
    board,
    placeShip
  };
};

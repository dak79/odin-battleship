import { parseInput, validateInputInt } from "../util/input";
import { pipe } from "../util/pipe";

export const GameBoard = () => {
  const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));

  const isValidCoord = (coord) => coord >= 0 && coord <= 9;
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

    const xCoord = direction ? x : x + length;
    const yCoord = direction ? y + length : y;

    return isValidCoord(x) && isValidCoord(y) && isValidCoord(xCoord) && isValidCoord(yCoord)
  };

  /**
   * Check if there is enough space on board for a ship.
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns {Boolean}
   */
  const isSpaceAvailable = (board, ship, x, y, direction) => {
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
   * @param {Boolean} direction true Ver | false Hor.
   * @returns {Boolean}
   */
  const isValidPlacement = (board, ship, x, y, direction) =>
    isInBoard(ship, x, y, direction)
      ? isSpaceAvailable(board, ship, x, y, direction)
      : false;

   /**
    * Add a new ship on the board.
    * @param {Object} ship - The ship object
    * @param {Number} x - x coord of ship starting position.
    * @param {Number} y - y coord of ship starting positionk.
    * @param {Boolean} direction - true Ver | false Hor.
    * @returns {Array[]} - New board with new Ship.
    */
  const addShipToBoard = (board, ship, x, y, direction) => {
    const length = ship.getLength();


    const updateBoardCell = (i, newBoard) => {
      const xCoord = direction ? x : x + i;
      const yCoord = direction ? y + i : y;
      const updatedRow = [...newBoard[xCoord]]
      updatedRow[yCoord] = ship
      newBoard[xCoord] = updatedRow;
    };

    const newBoard = [...board];

    for (let i = 0; i < length; i++) {
      updateBoardCell(i, board);
    }

    return newBoard
  };

  /**
   * Try to place a ship on bord
   * @param {Object} ship - The ship object.
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns A ship on board or false
   */
  const placeShip = (board, ship, x, y, direction) =>
    isValidPlacement(board, ship, x, y, direction)
      ? addShipToBoard(board, ship, x, y, direction)
      : [...board];

 /**
  * Check if is possible to parse the input.
  * @param {*} x - x coordinate for attack
  * @param {*} y - y coordinate for attack
  * @returns {Array}
  */
  const parseAttackCoord = (x, y) => [parseInput(x), parseInput(y)];

   /**
    * Check if attack input is a valid integer
    * @param {Array} - Parsed input | input
    * @returns {Array} Valid integers or up to two false value.
    */
  const validAttackCoord = ([x, y]) => [validateInputInt(x),  validateInputInt(y)];

   /**
    * Check if the attack is inside the board.
    * @param {Array} - Valid integers or up to two false value.
    * @returns {Array|false} - Attack coordinate | false.
    */
  const attackInBoard = ([x, y]) => [x, y].some(value => value === false) || !(isValidCoord(x) && isValidCoord(y)) ? false : true


  const validAttack = (x, y) => pipe(
    () => parseAttackCoord(x, y),
    (parsedCoord) =>  validAttackCoord(parsedCoord),
    (validInput) => attackInBoard(validInput)
    )(x, y);

  const receiveAttack = (board, x, y) => {

  if (validAttack(x, y)) {

    return board[x][y]
  }
  }

  return {
    board: initialBoard,
    placeShip,
    receiveAttack,
  };
};

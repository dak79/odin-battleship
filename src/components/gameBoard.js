import validateInput from '../util/input';
import pipe from '../util/pipe';

const BOARD_SIZE = 10;
const createEmptyBoard = () =>
  Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));

const isValidCoordinate = (coord) =>
  coord >= 0 && coord < BOARD_SIZE ? coord : false;

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
  return [
    isValidCoordinate(x),
    isValidCoordinate(y),
    isValidCoordinate(xCoord),
    isValidCoordinate(yCoord)
  ].every((value) => value !== false);
};

const isCellEmpty = (board, x, y) => !board[x][y];

const getCoord = (x, y, length, direction) => {
  const xCoord = direction ? x : x + length;
  const yCoord = direction ? y + length : y;

  return [xCoord, yCoord];
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

  for (let i = 0; i < length; i++) {
    const [xCoord, yCoord] = getCoord(x, y, i, direction);

    if (!isCellEmpty(board, xCoord, yCoord)) return false;
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
  isInBoard(ship, x, y, direction) &&
  isSpaceAvailable(board, ship, x, y, direction);

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
    const [xCoord, yCoord] = getCoord(x, y, i, direction);
    const updatedRow = [...newBoard[xCoord]];
    updatedRow[yCoord] = ship;
    newBoard[xCoord] = updatedRow;
  };

  const newBoard = [...board];

  for (let i = 0; i < length; i++) {
    updateBoardCell(i, board);
  }

  return newBoard;
};

/**
 * Check if attack input is a valid integer
 * @param {Array} - Parsed input | input
 * @returns {Array} Valid integers or up to two false value.
 */
const validAttackCoord = (x, y) => [validateInput(x), validateInput(y)];

/**
 * Check if the attack is inside the board.
 * @param {Array} - Valid integers or up to two false value.
 * @returns {Array|false} - Attack coordinate | false.
 */

const attackInBoard = ([x, y]) => [isValidCoordinate(x), isValidCoordinate(y)];

/**
 * Check if the attack is already done.
 * @param {Array} arr - x and y coordinates
 * @returns {Boolean}
 */
const isAlreadyAttacked = (shots, arr) =>
  shots.some((shot) => shot === arr) ? [false] : arr;

const validAttack = (x, y, shots) => {
  const validation = pipe(
    () => validAttackCoord(x, y),
    (validInt) => attackInBoard(validInt),
    (inBoard) => isAlreadyAttacked(shots, inBoard)
  )(x, y);
  return validation.some((value) => value === false) ? false : validation;
};

/**
 * Attack find a ship
 * @param {Array[]} board - Board state
 * @param {*} x - x coordinate of attack
 * @param {*} y - y coordinate of attack
 * @returns {Object} - Ship object with updated hits
 */
const hitShip = (board, x, y) => {
  const ship = board[x][y];
  const hit = ship.hit();
  const init = Object.assign(ship.init, hit);
  return Object.assign({}, ship, { init });
};

const Gameboard = () => {
  const initialBoard = createEmptyBoard();

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

  const shots = [];

  const missedShots = [];

  /**
   * Update miss shot
   * @param {Number} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   */
  const missShip = (x, y) => {
    missedShots.push([x, y]);
  };

  const getMissed = () => missedShots;

  /**
   * Square attacked
   * @param {Array[]} board - Board state.
   * @param {*} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   * @returns {Boolean}
   */
  const receiveAttack = (board, x, y, storeShots = shots) => {
    const attack = validAttack(x, y, storeShots);
    if (attack) {
      const [xShot, yShot] = attack;
      storeShots.push([xShot, yShot]);
      board[xShot][yShot] !== null
        ? hitShip(board, xShot, yShot)
        : missShip(xShot, yShot);

      return true;
    }
    return false;
  };

  return {
    board: initialBoard,
    placeShip,
    receiveAttack,
    getMissed
  };
};

export default Gameboard;

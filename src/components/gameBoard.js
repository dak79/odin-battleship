import validateInput from '../util/input';
import pipe from '../util/pipe';

const MAX_BOARD_SIZE = 10;
const createEmptyBoard = () =>
  Array.from({ length: MAX_BOARD_SIZE }, () =>
    Array(MAX_BOARD_SIZE).fill(null)
  );

const isValidCoordinate = (coord) =>
  coord >= 0 && coord < MAX_BOARD_SIZE ? coord : false;

const getCoord = (row, col, length, direction) => {
  const rowCoord = direction ? row : row + length;
  const colCoord = direction ? col + length : col;

  return [rowCoord, colCoord];
};
/**
 * Check if ship coordinates are inside the board.
 * @param {Object} ship - The ship object.
 * @param {Number} row - row coord of ship starting position.
 * @param {Number} col - col coord of ship starting position.
 * @param {Boolean} direction true hor | false ver.
 * @returns {Boolean}
 */
const isInBoard = (ship, row, col, direction) => {
  const length = ship.getLength();
  const [rowCoord, colCoord] = getCoord(row, col, length - 1, direction);

  return [
    isValidCoordinate(row),
    isValidCoordinate(col),
    isValidCoordinate(rowCoord),
    isValidCoordinate(colCoord)
  ].every((value) => value !== false);
};

const isCellEmpty = (board, row, col) => !board[row][col];

/**
 * Check if there is enough space on board for a ship.
 * @param {Object} ship - The ship object.
 * @param {Number} row - row coord of ship starting position.
 * @param {Number} col - col coord of ship starting position.
 * @param {Boolean} direction true hor | false ver
 * @returns {Boolean}
 */
const isSpaceAvailable = (board, ship, row, col, direction) => {
  const length = ship.getLength();

  for (let index = 0; index < length; index++) {
    const [rowCoord, colCoord] = getCoord(row, col, index, direction);

    if (!isCellEmpty(board, rowCoord, colCoord)) return false;
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
const isValidPlacement = (board, ship, row, col, direction) =>
  isInBoard(ship, row, col, direction) &&
  isSpaceAvailable(board, ship, row, col, direction);

/**
 * Check if attack input is a valid integer
 * @param {Array} - Parsed input | input
 * @returns {Array} Valid integers or up to two false value.
 */
const validAttackCoord = (row, col) => [validateInput(row), validateInput(col)];

/**
 * Check if the attack is inside the board.
 * @param {Array} - Valid integers or up to two false value.
 * @returns {Array|false} - Attack coordinate | false.
 */

const attackInBoard = ([row, col]) => [
  isValidCoordinate(row),
  isValidCoordinate(col)
];

/**
 * Check if the attack is already done.
 * @param {Array} arr - row and col coordinates
 * @returns {Boolean}
 */
const isAlreadyAttacked = (shots, [row, col]) =>
  shots.some(([rowCoord, colCoord]) => rowCoord === row && colCoord === col);

const validAttack = (row, col, shots) => {
  const validation = pipe(
    () => validAttackCoord(row, col),
    (validInt) => attackInBoard(validInt),
    ([row, col]) =>
      isAlreadyAttacked(shots, [row, col]) ? [false] : [row, col]
  )(row, col);
  return validation.some((value) => value === false) ? false : validation;
};

/**
 * Attack find a ship
 * @param {Array[]} board - Board state
 * @param {*} row - row coordinate of attack
 * @param {*} col - col coordinate of attack
 * @returns {Object} - Ship object with updated hits
 */
const hitShip = (board, row, col) => {
  const ship = board[row][col];
  const hit = ship.hit();
  const init = Object.assign(ship.init, hit);
  return Object.assign({}, ship, { init });
};

const Gameboard = () => {
  const initialBoard = createEmptyBoard();

  /**
   * Try to place a ship on bord
   * @param {Object} ship - The ship object.
   * @param {Number} row - row coord of ship starting position.
   * @param {Number} col - col coord of ship starting position.
   * @param {Boolean} direction true Ver | false Hor
   * @returns A ship on board or false
   */
  const placeShip = (board, ship, row, col, direction) =>
    isValidPlacement(board, ship, row, col, direction)
      ? addShipToBoard(board, ship, row, col, direction)
      : false;

  const shots = [];

  const ships = [];

  const addShipToShips = (ship) => {
    ships.push(ship);
  };

  /**
   * Add a new ship on the board.
   * @param {Object} ship - The ship object
   * @param {Number} x - x coord of ship starting position.
   * @param {Number} y - y coord of ship starting positionk.
   * @param {Boolean} direction - true Ver | false Hor.
   * @returns {Array[]} - New board with new Ship.
   */
  const addShipToBoard = (board, ship, row, col, direction) => {
    const length = ship.getLength();
    const updateBoardCell = (index, newBoard) => {
      const [rowCoord, colCoord] = getCoord(row, col, index, direction);
      const updatedRow = [...newBoard[rowCoord]];
      updatedRow[colCoord] = ship;
      newBoard[rowCoord] = updatedRow;
    };

    const newBoard = [...board];

    for (let index = 0; index < length; index++) {
      updateBoardCell(index, board);
    }

    addShipToShips(ship);
    return newBoard;
  };

  /**
   * Square attacked
   * @param {Array[]} board - Board state.
   * @param {*} row - row coordinate of attack
   * @param {*} col - col coordinate of attack
   * @returns {Boolean}
   */
  const receiveAttack = (board, row, col) => {
    const attack = validAttack(row, col, shots);
    if (attack) {
      const [rowShot, colShot] = attack;
      shots.push([rowShot, colShot]);
      if (board[rowShot][colShot] !== null) {
        hitShip(board, rowShot, colShot);
      }

      return true;
    }
    return false;
  };

  const allShipSunked = () => ships.every((ship) => ship.init.sunked === true);

  return {
    board: initialBoard,
    placeShip,
    receiveAttack,
    shots,
    allShipSunked
  };
};

export default Gameboard;

import validateInput from '../util/input';
import pipe from '../util/pipe';

const MAX_BOARD_SIZE = 10;
const createEmptyBoard = () =>
  Array.from({ length: MAX_BOARD_SIZE }, () =>
    Array(MAX_BOARD_SIZE).fill(null)
  );

const isValidCoordinate = (coord) =>
  coord >= 0 && coord < MAX_BOARD_SIZE ? coord : false;

const getCoord = (x, y, length, direction) => {
  const xCoord = direction ? y + length : y;
  const yCoord = direction ? x : x + length;

  return [xCoord, yCoord];
};
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
  const [xCoord, yCoord] = getCoord(x, y, length, direction);

  return [
    isValidCoordinate(x),
    isValidCoordinate(y),
    isValidCoordinate(xCoord),
    isValidCoordinate(yCoord)
  ].every((value) => value !== false);
};

const isCellEmpty = (board, x, y) => !board[x][y];

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
const isAlreadyAttacked = (shots, [x, y]) =>
  shots.some(([xCoord, yCoord]) => xCoord === x && yCoord === y);

const validAttack = (x, y, shots) => {
  const validation = pipe(
    () => validAttackCoord(x, y),
    (validInt) => attackInBoard(validInt),
    ([x, y]) => (isAlreadyAttacked(shots, [x, y]) ? [false] : [x, y])
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
      : false;

  const shots = [];

  const missedShots = [];

  const ships = [];

  /**
   * Update miss shot
   * @param {Number} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   */
  const missShip = (x, y) => {
    missedShots.push([x, y]);
  };

  const getMissed = () => missedShots;

  const addShipToShips = (ship) => {
    ships.push(ship);
  };

  const getShips = () => ships;
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

    addShipToShips(ship);
    return newBoard;
  };

  /**
   * Square attacked
   * @param {Array[]} board - Board state.
   * @param {*} x - x coordinate of attack
   * @param {*} y - y coordinate of attack
   * @returns {Boolean}
   */
  const receiveAttack = (board, x, y) => {
    const attack = validAttack(x, y, shots);
    if (attack) {
      const [xShot, yShot] = attack;
      shots.push([xShot, yShot]);
      board[xShot][yShot] !== null
        ? hitShip(board, xShot, yShot)
        : missShip(xShot, yShot);

      return true;
    }
    return false;
  };

  const allShipSunked = () => ships.every((ship) => ship.init.sunked === true);

  return {
    board: initialBoard,
    placeShip,
    receiveAttack,
    getMissed,
    ships,
    allShipSunked,
    getShips
  };
};

export default Gameboard;

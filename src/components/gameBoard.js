import { parseInput, validateInputInt } from '../util/input';
import { pipe } from '../util/pipe';

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

    return (
      isValidCoord(x) &&
      isValidCoord(y) &&
      isValidCoord(xCoord) &&
      isValidCoord(yCoord)
    );
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
    // ship.position = [x, y];
    // ship.isVertical = direction;

    const updateBoardCell = (i, newBoard) => {
      const xCoord = direction ? x : x + i;
      const yCoord = direction ? y + i : y;
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
  const validAttackCoord = ([x, y]) => [
    validateInputInt(x),
    validateInputInt(y)
  ];

  /**
   * Check if the attack is inside the board.
   * @param {Array} - Valid integers or up to two false value.
   * @returns {Array|false} - Attack coordinate | false.
   */
  const attackInBoard = ([x, y]) =>
    [x, y].some((value) => value === false) ||
    !(isValidCoord(x) && isValidCoord(y))
      ? false
      : [x, y];

  const shots = [];

  /**
   * Check if the attack is already done.
   * @param {Array} arr - x and y coordinates
   * @returns {Boolean}
   */
  const alreadyAttacked = (arr) => {
    if (arr) {
      return shots.some((shot) => JSON.stringify(shot) === JSON.stringify(arr))
        ? false
        : true;
    } else {
      return false;
    }
  };

  const validAttack = (x, y) => {
    const pipedValidations = pipe(
      () => parseAttackCoord(x, y),
      (parsedCoord) => validAttackCoord(parsedCoord),
      (validInput) => attackInBoard(validInput),
      (attack) => alreadyAttacked(attack)
    )(x, y);
    return pipedValidations;
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
    // shots.push([x, y]);
    // const [xShip, yShip] = ship.position;
    // const direction = ship.isVertical;
    const hit = ship.hit();
    const init = Object.assign(ship.init, hit);
    return Object.assign({}, ship, { init });

    // const newShip = Object.assign({}, ship, { init });
    // return placeShip(board, newShip, xShip, yShip, direction);
  };

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
  const receiveAttack = (board, x, y) => {
    if (validAttack(x, y)) {
      const xShot = parseInput(x);
      const yShot = parseInput(y);
      shots.push([xShot, yShot]);
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

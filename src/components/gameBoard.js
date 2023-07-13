import { pipe } from '../util/pipe';
import { Ship } from './ships';

export const GameBoard = () => {
  /**
   * Create a 10 x 10 board,
   * @returns {Map} Coordinate: Array
   */
  const init = () => {
    const board = new Map();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        board.set(`${[x, y]}`, []);
      }
    }

    return board;
  };

  /**
   * Use Ship factory to create a ship
   * @param {Number} length
   * @returns A ship
   */
  const createShip = (length) => Ship(length);

  /**
   * Change ship orientation: vertical / horizontal.
   * @param {Boolean} isVertical
   * @param {Number} x
   * @param {Number} y
   * @returns {Function} For generating vertical or horizontal ship model
   */
  const shipOrientation = (isVertical, x = 0, y = 0) =>
    isVertical ? (_, i) => [x, y + i] : (_, i) => [x + i, y];

  /**
   * Create a model for ship
   * @param {Number} shipLength
   * @param {Boolean} orientation - true vertical, false horizontal
   * @returns {Number[][]} A vertical/horizontal ship model.
   */
  const shipModel = (shipLength, orientation) =>
    Array.from({ length: shipLength }, orientation);

  /**
   * Get the model according to ship length and orientation
   * @param {Number} shipLength
   * @param {Boolean} isVertical
   * @returns {Number[][]} - Get the ship model.
   */
  const getShipModel = (shipLength, isVertical) =>
    pipe(
      () => shipOrientation(isVertical),
      (orientation) => shipModel(shipLength, orientation)
    )(shipLength);

  /**
   * Use the model for generating ship coordinate.
   * @param {Number[]} param - destructure coordinate of ship head.
   * @param {Number[][]} model - Ship model
   * @returns {Number[][]} - Update the coordinate by passing the starting point
   */
  const shipCoord = ([x, y], model) =>
    model.map(([dx, dy]) => [dx + x, dy + y]);

  /**
   * Get the coordinate of ship
   * @param {Number[]} shipHead
   * @param {Number} shipLength
   * @param {Boolean} orientation
   * @returns {Number[][]} - Coordinate of ship
   */
  const getShipCoord = (shipHead, shipLength, orientation) =>
    pipe(
      (length) => getShipModel(length, orientation),
      (model) => shipCoord(shipHead, model)
    )(shipLength);

  /**
   * Check if the coordinates of ship are on board
   * @param {Number[][]} coord
   * @returns {Boolean}
   */
  const isShipInBoard = (coords) =>
    !coords.some(([x, y]) => x < 0 || x > 9 || y < 0 || y > 9);

  /**
   * If ship is on board, check if the space is available for a ship
   * @param {Number[][]} coords - New ship coordinate
   * @param {Map} board
   * @returns {Boolean}
   */
  const isSpaceEmpty = (onBoard, coords, board) =>
    onBoard
      ? ![...coords].some((coord) => board.get(coord.toString()).length !== 0)
      : onBoard;

  /**
   * Check if it is a valid placing
   * @param {Number[][]} shipMod - Ship coordinate
   * @param {Map} board
   * @returns {Boolean}
   */
  const isValidShipPlacement = (shipMod, board) =>
    pipe(
      () => isShipInBoard(shipMod),
      (onBoard) => isSpaceEmpty(onBoard, shipMod, board)
    )();

  /**
   * Add ship on board graph
   * @param {Map} board - Map representing the board
   * @param {Number[][]} coords - Array of coordinates
   * @returns
   */
  const addToBoard = (board, coords) =>
    coords.forEach((coord) =>
      board
        .get(coord.toString())
        .push(...coords.filter((value) => value !== coord))
    );

  /**
   * Try the placement of ship
   * @param {Number[]} shipHead - Coordinate of ship head.
   * @param {Number} shipLength
   * @param {Map} board
   * @returns {Number[][]|false}
   */
  const placeShip = (shipHead, shipLength, board, orientation) => {
    const isACorrectDeploy = pipe(
      (length) => getShipCoord(shipHead, length, orientation),
      (coords) => isValidShipPlacement(coords, board)
    )(shipLength);

    return isACorrectDeploy
      ? pipe(
          (length) => getShipCoord(shipHead, length, orientation),
          (coords) => addToBoard(board, coords)
        )(shipLength)
      : false;
  };

  const receiveAttack = () => {};
  return {
    init,
    createShip,
    placeShip,
    receiveAttack
  };
};

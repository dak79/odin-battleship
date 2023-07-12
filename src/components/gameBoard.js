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
   * Define if a ship is placed horizontally or vertically
   * @param {Boolean} isVertical
   * @param {Number} x
   * @param {Number} y
   * @returns Model for vertical/horizontal ship.
   */
  const shipOrientation = (isVertical, x = 0, y = 0) =>
    isVertical ? (_, i) => [x, y + i] : (_, i) => [x + i, y];

  /**
   * Create coordinates for ship according to its length
   * @param {Number} shipLength
   * @param {Boolean} orientation - true vertical, false horizontal
   * @returns An array of coordinate of a ship of given length
   */
  const shipModel = (shipLength, orientation) =>
    Array.from({ length: shipLength }, orientation);

  /**
   * Get the coordinate model for the ship
   * @param {Number} shipLength
   * @param {Boolean} isVertical
   * @returns An array.
   */
  const getShipModel = (shipLength, isVertical) =>
    pipe(
      () => shipOrientation(isVertical),
      (orientation) => shipModel(shipLength, orientation)
    )(shipLength);

  /**
   * Attualize the coordinate of ship starting from ship head
   * @param {Array} param - destructure coordinate of ship head.
   * @param {Array[Array]} model - Ship model
   * @returns
   */
  const shipCoord = ([x, y], model) =>
    model.map(([dx, dy]) => [dx + x, dy + y]);

  /**
   * Add ship on board graph
   * @param {Map} board - Map representing the board
   * @param {Array[Array]} coords - Array of coordinates
   * @returns
   */
  const addToBoard = (board, coords) =>
    coords.forEach((coord) =>
      board
        .get(coord.toString())
        .push(...coords.filter((value) => value !== coord))
    );

  /**
   * Place ship on board
   * @param {Array} shipHead - Coordinate of ship head.
   * @param {Number} shipLength
   * @param {Map} board
   * @returns
   */
  const placeShip = (shipHead, shipLength, board, orientation) =>
    pipe(
      (length) => getShipModel(length, orientation),
      (model) => shipCoord(shipHead, model),
      (coords) => addToBoard(board, coords)
    )(shipLength);

  return {
    init,
    createShip,
    placeShip
  };
};

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
   * Create coordinates for ship according to its length
   * @param {Number} shipLength
   * @param {0} x
   * @param {0} y
   * @returns An array of coordinate of a ship of given length
   */
  const getShipModel = (shipLength, orientation, x = 0, y = 0) =>
    Array.from(
      { length: shipLength },
      orientation ? (_, i) => [x, y + i] : (_, i) => [x + i, y]
    );

  /**
   * Attualize the coordinate of ship starting from ship head
   * @param {Array} param - destructure coordinate of ship head.
   * @param {Array[Array]} model - Ship model
   * @returns
   */
  const shipCoord = ([x, y], model) =>
    model.map(([dx, dy]) => [dx + x, dy + y]);

  /**
   * Deploy ship on board
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

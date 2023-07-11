import { Ship } from './ships';

export const GameBoard = () => {
  const init = () => {
    const board = new Map();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        board.set(`${[x, y]}`, []);
      }
    }

    return board;
  };

  const createShip = (length) => Ship(length);

  const placeShip = (shipCenter, ship, board) => {
    let x = 0;
    let y = 0;
    const shipModel = [
      [x, y],
      [x, y + 1],
      [x, y + 2],
      [x, y + 3]
    ];

    let square = shipCenter.toString();
    let [a, b] = shipCenter;
    console.log(a);
    console.log(b);

    const shipCoord = [];
    shipModel.forEach((s) => {
      shipCoord.push([s[0] + a, s[1] + b]);
    });

    console.log(shipCoord);
    shipCoord.forEach((coord) => {
      board.get(coord.toString()).push(...shipCoord.filter((f) => f !== coord));
    });

    console.log(board);
    // ORA CHE ABBIAMO SHIP COORD ITERIAMO: prediamo le prime coordinate
    // accediamo a board quelle coordinate, facciamo un push di tutte le altre
    // coordinate che non siano quelle usate per accedere all'array coordinate
    // board. Questo per tutte le coordiante nell'array.
  };
  return {
    init,
    createShip,
    placeShip
  };
};

import Gameboard from '../components/gameBoard';
import Ship from '../components/ships';

const gameboard = Gameboard();

describe('GameBoard', () => {
  it('has board propriety', () => {
    expect(gameboard).toHaveProperty('board');
  });

  it('has placeShip() method', () => {
    expect(gameboard).toHaveProperty('placeShip');
  });

  it('has a receiveAttack() method', () => {
    expect(gameboard).toHaveProperty('receiveAttack');
  });

  it('has a getMissed() method', () => {
    expect(gameboard).toHaveProperty('getMissed');
  });

  it('has allShipSunked method', () => {
    expect(gameboard).toHaveProperty('allShipSunked');
  });
});

describe('The board', () => {
  it('is initially empty', () => {
    const board = gameboard.board;
    board.forEach((row) => row.forEach((cell) => expect(cell).toBeNull()));
  });

  it('has 10 row and 10 column', () => {
    const board = gameboard.board;
    expect(board.length).toBe(10);
    board.forEach((row) => expect(row.length).toBe(10));
  });
});

describe('The method gameBoard.placeShip()', () => {
  it('place a ship of length 4 vertically in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = Ship(4);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 0, 0, true);
    gameboard.board[0]
      .slice(0, length)
      .forEach((square) => expect(square).toBe(ship));
  });

  it('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    const ship = Ship(3);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 1, 0, true);
    gameboard.board[1]
      .slice(0, length)
      .forEach((square) => expect(square).toBe(ship));
  });

  it('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 2, 0, true);
    gameboard.board[2]
      .slice(0, length)
      .forEach((square) => expect(square).toBe(ship));
  });

  it('place a ship of length 4 horizontally in [3, 0][4, 0][5, 0][6, 0]', () => {
    const ship = Ship(4);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 3, 0, false);
    gameboard.board
      .slice(3, 3 + length)
      .forEach((row) => expect(row[0]).toBe(ship));
  });

  it('place a ship of length 3 horizontally in [2, 2][3, 2][4, 2]', () => {
    const ship = Ship(3);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 2, 2, false);
    gameboard.board
      .slice(2, 2 + length)
      .forEach((row) => expect(row[2]).toBe(ship));
  });

  it('place a ship of length 2 horizontally in [3, 4][4, 4]', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 3, 4, false);
    gameboard.board
      .slice(3, 3 + length)
      .forEach((row) => expect(row[4]).toBe(ship));
  });

  it('does not place a ship: collision between ships (at the head at [3, 0])', () => {
    const oldShip = gameboard.board[3][0];
    expect(gameboard.board[3][0]).toBe(oldShip);
    expect(gameboard.board[3][1]).toBe(null);
  });

  it('does not place a ship: collision between ships (at the middle at [4, 2])', () => {
    const oldShip = gameboard.board[4][2];
    expect(gameboard.board[4][1]).toBe(null);
    expect(gameboard.board[4][2]).toBe(oldShip);
    expect(gameboard.board[4][3]).toBe(null);
  });

  it('does not place a ship: collision between ship (at the end [4, 4])', () => {
    const oldShip = gameboard.board[4][4];
    expect(gameboard.board[4][3]).toBe(null);
    expect(gameboard.board[4][4]).toBe(oldShip);
  });

  it('does not place a ship: multiple collisions between shipi [3,4][4,4]', () => {
    const oldShip = gameboard.board[3][4];
    expect(gameboard.board[2][4]).toBe(null);
    expect(gameboard.board[3][4]).toBe(oldShip);
    expect(gameboard.board[4][4]).toBe(oldShip);
    expect(gameboard.board[5][4]).toBe(null);
  });

  it('does not place a ship: starting point out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, -3, 5, false);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending part out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, 8, 6, false);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: x out of board (y placement)', () => {
    const ship = Ship(4);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, -1, 8, true);
    gameboard.placeShip(gameboard.board, ship, 11, 6, true);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: starting point out of board (y)', () => {
    const ship = Ship(2);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, 1, 10, true);
    gameboard.placeShip(gameboard.board, ship, 1, -3, true);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending point out of board (y)', () => {
    const ship = Ship(4);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, 8, 7, true);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: y out of board (x placement)', () => {
    const ship = Ship(4);
    const boardPre = gameboard.board;
    gameboard.placeShip(gameboard.board, ship, 8, -1, false);
    gameboard.placeShip(gameboard.board, ship, 8, -11, false);
    const boardPost = gameboard.board;
    expect(boardPre).toStrictEqual(boardPost);
  });
});

describe('The receiveAttack() method', () => {
  it('must have 3 arguments', () => {
    expect(gameboard.receiveAttack()).toBe(false);
    expect(gameboard.receiveAttack(1)).toBe(false);
    expect(gameboard.receiveAttack(1, 2)).toBe(false);
    expect(gameboard.receiveAttack(gameboard.board, 1)).toBe(false);
  });

  it('takes valid integer', () => {
    const values = [
      [{}, 4],
      [4, [1]],
      [NaN, 5],
      [9, 'n'],
      [undefined, 7],
      [false, 8],
      [7, true]
    ];

    values.forEach(([xValue, yValue]) =>
      expect(gameboard.receiveAttack(gameboard.board, xValue, yValue)).toBe(
        false
      )
    );
  });

  it('takes only coordinate inside the board', () => {
    const coord = [
      [3, 12],
      [12, 3],
      [-3, 1],
      [1, -3]
    ];

    coord.forEach(([x, y]) =>
      expect(gameboard.receiveAttack(gameboard.board, x, y)).toBe(false)
    );
  });

  it('if hit, send an hit() method to the right ship', () => {
    const ship = gameboard.board[0][0];
    gameboard.receiveAttack(gameboard.board, '0', 0);
    expect(ship.init.hits).toBe(1);
    gameboard.receiveAttack(gameboard.board, 0, '1');
    expect(ship.init.hits).toBe(2);
    gameboard.receiveAttack(gameboard.board, 0, 2);
    expect(ship.init.hits).toBe(3);
    gameboard.receiveAttack(gameboard.board, 0, 3);
    expect(ship.init.hits).toBe(4);
  });

  it('if hit, does not effect other ships', () => {
    const ship = gameboard.board[3][4];
    expect(ship.init.hits).toBe(0);
  });

  it('if hit enough times, ship is sunked', () => {
    const ship = gameboard.board[0][0];
    expect(ship.init.sunked).toBe(true);
  });

  it('if miss, record the coordinate of missed shot.', () => {
    gameboard.receiveAttack(gameboard.board, 8, 7);
    expect(gameboard.getMissed()).toStrictEqual([[8, 7]]);
    gameboard.receiveAttack(gameboard.board, 9, 0);
    expect(gameboard.getMissed()).toStrictEqual([
      [8, 7],
      [9, 0]
    ]);
  });

  it('you cant attack two times the same square', () => {
    expect(gameboard.receiveAttack(gameboard.board, 0, 0)).toBe(false);
    expect(gameboard.receiveAttack(gameboard.board, 8, 7)).toBe(false);
  });
});

describe('The method GameBoard.allShipSunked()', () => {
  it('return false if not all ships are sunked', () => {
    expect(gameboard.allShipSunked()).toBe(false);
  });

  it('return true when all ship are sunked', () => {
    const coord = [
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [2, 2],
      [3, 2],
      [4, 2],
      [3, 4],
      [4, 4]
    ];

    coord.forEach(([x, y]) => gameboard.receiveAttack(gameboard.board, x, y));
    expect(gameboard.allShipSunked()).toBe(true);
  });
});

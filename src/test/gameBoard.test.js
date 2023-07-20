import Gameboard from '../components/gameBoard';
import Ship from '../components/ships';

const b = Gameboard();

describe('GameBoard', () => {
  it('has board propriety', () => {
    expect(b).toHaveProperty('board');
  });

  it('has placeShip() method', () => {
    expect(b).toHaveProperty('placeShip');
  });

  it('has a receiveAttack() method', () => {
    expect(b).toHaveProperty('receiveAttack');
  });

  it('has a getMissed() method', () => {
    expect(b).toHaveProperty('getMissed');
  });
});

describe('The board', () => {
  it('is initially empty', () => {
    const board = b.board;
    board.forEach((row) => row.forEach((cell) => expect(cell).toBeNull()));
  });

  it('has 10 row and 10 column', () => {
    const board = b.board;
    expect(board.length).toBe(10);
    board.forEach((row) => expect(row.length).toBe(10));
  });
});

describe('The method gameBoard.placeShip()', () => {
  it('place a ship of length 4 vertically in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = Ship(4);
    b.placeShip(b.board, ship, 0, 0, true);
    expect(b.board[0][0]).toBe(ship);
    expect(b.board[0][1]).toBe(ship);
    expect(b.board[0][2]).toBe(ship);
    expect(b.board[0][3]).toBe(ship);
  });

  it('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    const ship = Ship(3);
    b.placeShip(b.board, ship, 1, 0, true);
    expect(b.board[1][0]).toBe(ship);
    expect(b.board[1][1]).toBe(ship);
    expect(b.board[1][2]).toBe(ship);
  });

  it('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    const ship = Ship(2);
    b.placeShip(b.board, ship, 2, 0, true);
    expect(b.board[2][0]).toBe(ship);
    expect(b.board[2][1]).toBe(ship);
  });

  it('place a ship of length 4 horizontally in [3, 0][4, 0][5, 0][6, 0]', () => {
    const ship = Ship(4);
    b.placeShip(b.board, ship, 3, 0, false);
    expect(b.board[3][0]).toBe(ship);
    expect(b.board[4][0]).toBe(ship);
    expect(b.board[5][0]).toBe(ship);
    expect(b.board[6][0]).toBe(ship);
  });

  it('place a ship of length 3 horizontally in [2, 2][3, 2][4, 2]', () => {
    const ship = Ship(4);
    b.placeShip(b.board, ship, 2, 2, false);
    expect(b.board[2][2]).toBe(ship);
    expect(b.board[3][2]).toBe(ship);
    expect(b.board[4][2]).toBe(ship);
    expect(b.board[5][2]).toBe(ship);
  });

  it('place a ship of length 2 horizontally in [3, 4][4, 4]', () => {
    const ship = Ship(2);
    b.placeShip(b.board, ship, 3, 4, false);
    expect(b.board[3][4]).toBe(ship);
    expect(b.board[4][4]).toBe(ship);
  });

  it('does not place a ship: collision between ships (at the head at [3, 0])', () => {
    const ship = Ship(2);
    const oldShip = b.board[3][0];
    b.placeShip(b.board, ship, 3, 0, true);
    expect(b.board[3][0]).toBe(oldShip);
    expect(b.board[3][1]).toBe(null);
  });

  it('does not place a ship: collision between ships (at the middle at [4, 2])', () => {
    const ship = Ship(3);
    b.placeShip(b.board, ship, 4, 1, true);
    const oldShip = b.board[4][2];
    expect(b.board[4][1]).toBe(null);
    expect(b.board[4][2]).toBe(oldShip);
    expect(b.board[4][3]).toBe(null);
  });

  it('does not place a ship: collision between ship (at the end [4, 4])', () => {
    const ship = Ship(2);
    b.placeShip(b.board, ship, 4, 3, true);
    const oldShip = b.board[4][4];
    expect(b.board[4][3]).toBe(null);
    expect(b.board[4][4]).toBe(oldShip);
  });

  it('does not place a ship: multiple collisions between shipi [3,4][4,4]', () => {
    const ship = Ship(4);
    const oldShip = b.board[3][4];
    b.placeShip(b.board, ship, 2, 4, false);
    expect(b.board[2][4]).toBe(null);
    expect(b.board[3][4]).toBe(oldShip);
    expect(b.board[4][4]).toBe(oldShip);
    expect(b.board[5][4]).toBe(null);
  });

  it('does not place a ship: starting point out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(b.board, ship, -3, 5, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending part out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(b.board, ship, 8, 6, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: x out of board (y placement)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(b.board, ship, -1, 8, true);
    b.placeShip(b.board, ship, 11, 6, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: starting point out of board (y)', () => {
    const ship = Ship(2);
    const boardPre = b.board;
    b.placeShip(b.board, ship, 1, 10, true);
    b.placeShip(b.board, ship, 1, -3, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending point out of board (y)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(b.board, ship, 8, 7, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: y out of board (x placement)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(b.board, ship, 8, -1, false);
    b.placeShip(b.board, ship, 8, -11, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });
});

describe('The receiveAttack() method', () => {
  it('must have 3 arguments', () => {
    expect(b.receiveAttack()).toBe(false);
    expect(b.receiveAttack(1)).toBe(false);
    expect(b.receiveAttack(1, 2)).toBe(false);
    expect(b.receiveAttack(b.board, 1)).toBe(false);
  });

  it('takes valid integer', () => {
    expect(b.receiveAttack(b.board, 4, 6)).toBe(true);
    expect(b.receiveAttack(b.board, {}, 4)).toBe(false);
    expect(b.receiveAttack(b.board, 4, [1])).toBe(false);
    expect(b.receiveAttack(b.board, NaN, 5)).toBe(false);
    expect(b.receiveAttack(b.board, 9, 'n')).toBe(false);
    expect(b.receiveAttack(b.board, undefined, 7)).toBe(false);
    expect(b.receiveAttack(b.board, false, 8)).toBe(false);
    expect(b.receiveAttack(b.board, 7, true)).toBe(false);
  });

  it('takes strings that can be parsed in integer', () => {
    expect(b.receiveAttack(b.board, '0', 8)).toStrictEqual(true);
    expect(b.receiveAttack(b.board, 2, '4')).toStrictEqual(true);
    expect(b.receiveAttack(b.board, '5', '7')).toStrictEqual(true);
  });

  it('takes only coordinate inside the board', () => {
    expect(b.receiveAttack(b.board, 3, 12)).toBe(false);
    expect(b.receiveAttack(b.board, 12, 3)).toBe(false);
    expect(b.receiveAttack(b.board, -3, 1)).toBe(false);
    expect(b.receiveAttack(b.board, 1, -3)).toBe(false);
  });

  it('if hit, send an hit() method to the right ship', () => {
    const ship = b.board[0][0];
    b.receiveAttack(b.board, 0, 0);
    expect(ship.init.hits).toBe(1);
    b.receiveAttack(b.board, 0, 1);
    expect(ship.init.hits).toBe(2);
    b.receiveAttack(b.board, 0, 2);
    expect(ship.init.hits).toBe(3);
    b.receiveAttack(b.board, 0, 3);
    expect(ship.init.hits).toBe(4);
  });

  it('if hit, does not effect other ships', () => {
    const ship = b.board[3][4];
    expect(ship.init.hits).toBe(0);
  });

  it('if hit enough times, ship is sunked', () => {
    const ship = b.board[0][0];
    expect(ship.init.sunked).toBe(true);
  });

  it('if miss, record the coordinate of missed shot.', () => {
    b.receiveAttack(b.board, 8, 7);
    expect(b.getMissed()).toStrictEqual([
      [4, 6],
      [0, 8],
      [2, 4],
      [5, 7],
      [8, 7]
    ]);
    b.receiveAttack(b.board, 9, 0);
    expect(b.getMissed()).toStrictEqual([
      [4, 6],
      [0, 8],
      [2, 4],
      [5, 7],
      [8, 7],
      [9, 0]
    ]);
  });

  it('you cant attack two times the same square', () => {
    b.receiveAttack(b.board, 0, 0);
    expect(b.receiveAttack(0, 0)).toBe(false);
    b.receiveAttack(8, 7);
    expect(b.receiveAttack(8, 7)).toBe(false);
  });
});

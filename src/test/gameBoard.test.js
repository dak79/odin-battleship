import { GameBoard } from '../components/gameBoard';
import { Ship } from '../components/ships';

const b = GameBoard();

describe('GameBoard', () => {
  it('has board propriety', () => {
    expect(b).toHaveProperty('board');
  });

  it('has placeShip() method', () => {
    expect(b).toHaveProperty('placeShip');
  });
});

describe('The board', () => {
  it('has 10 row', () => {
    expect(b.board.length).toBe(10);
  });

  it('has 10 col in row 0', () => {
    expect(b.board[0].length).toBe(10);
  });

  it('has 10 col in row 1', () => {
    expect(b.board[1].length).toBe(10);
  });

  it('has 10 col in row 2', () => {
    expect(b.board[2].length).toBe(10);
  });

  it('has 10 col in row 3', () => {
    expect(b.board[3].length).toBe(10);
  });

  it('has 10 col in row 4', () => {
    expect(b.board[4].length).toBe(10);
  });

  it('has 10 col in row 5', () => {
    expect(b.board[5].length).toBe(10);
  });

  it('has 10 col in row 6', () => {
    expect(b.board[6].length).toBe(10);
  });

  it('has 10 col in row 7', () => {
    expect(b.board[7].length).toBe(10);
  });

  it('has 10 col in row 8', () => {
    expect(b.board[8].length).toBe(10);
  });

  it('has 10 col in row 9', () => {
    expect(b.board[9].length).toBe(10);
  });

  it('has square [0, 9]', () => {
    expect(b.board[0][9]).toBeNull();
  });

  it('has square [4, 7]', () => {
    expect(b.board[4][7]).toBeNull();
  });
});

describe('The method gameBoard.placeShip()', () => {
  it('place a ship of length 4 vertically in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = Ship(4);
    b.placeShip(ship, 0, 0, true);
    expect(b.board[0][0]).toBe(ship);
    expect(b.board[0][1]).toBe(ship);
    expect(b.board[0][2]).toBe(ship);
    expect(b.board[0][3]).toBe(ship);
  });

  it('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    const ship = Ship(3);
    b.placeShip(ship, 1, 0, true);
    expect(b.board[1][0]).toBe(ship);
    expect(b.board[1][1]).toBe(ship);
    expect(b.board[1][2]).toBe(ship);
  });

  it('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    const ship = Ship(2);
    b.placeShip(ship, 2, 0, true);
    expect(b.board[2][0]).toBe(ship);
    expect(b.board[2][1]).toBe(ship);
  });

  it('place a ship of length 4 horizontally in [3, 0][4, 0][5, 0][6, 0]', () => {
    const ship = Ship(4);
    b.placeShip(ship, 3, 0, false);
    expect(b.board[3][0]).toBe(ship);
    expect(b.board[4][0]).toBe(ship);
    expect(b.board[5][0]).toBe(ship);
    expect(b.board[6][0]).toBe(ship);
  });

  it('place a ship of length 3 horizontally in [2, 2][3, 2][4, 2]', () => {
    const ship = Ship(4);
    b.placeShip(ship, 2, 2, false);
    expect(b.board[2][2]).toBe(ship);
    expect(b.board[3][2]).toBe(ship);
    expect(b.board[4][2]).toBe(ship);
    expect(b.board[5][2]).toBe(ship);
  });

  it('place a ship of length 2 horizontally in [3, 4][4, 4]', () => {
    const ship = Ship(2);
    b.placeShip(ship, 3, 4, false);
    expect(b.board[3][4]).toBe(ship);
    expect(b.board[4][4]).toBe(ship);
  });

  it('does not place a ship: collision between ships (at the head at [3, 0])', () => {
    const ship = Ship(2);
    const oldShip = b.board[3][0];
    b.placeShip(ship, 3, 0, true);
    expect(b.board[3][0]).toBe(oldShip);
    expect(b.board[3][1]).toBe(null);
  });

  it('does not place a ship: collision between ships (at the middle at [4, 2])', () => {
    const ship = Ship(3);
    b.placeShip(ship, 4, 1, true);
    const oldShip = b.board[4][2];
    expect(b.board[4][1]).toBe(null);
    expect(b.board[4][2]).toBe(oldShip);
    expect(b.board[4][3]).toBe(null);
  });

  it('does not place a ship: collision between ship (at the end [4, 4])', () => {
    const ship = Ship(2);
    b.placeShip(ship, 4, 3, true);
    const oldShip = b.board[4][4];
    expect(b.board[4][3]).toBe(null);
    expect(b.board[4][4]).toBe(oldShip);
  });

  it('does not place a ship: multiple collisions between shipi [3,4][4,4]', () => {
    const ship = Ship(4);
    const oldShip = b.board[3][4];
    b.placeShip(ship, 2, 4, false);
    expect(b.board[2][4]).toBe(null);
    expect(b.board[3][4]).toBe(oldShip);
    expect(b.board[4][4]).toBe(oldShip);
    expect(b.board[5][4]).toBe(null);
  });

  it('does not place a ship: starting point out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(ship, -3, 5, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending part out of board (x)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(ship, 8, 6, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: x out of board (y placement)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(ship, -1, 8, true);
    b.placeShip(ship, 11, 6, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: starting point out of board (y)', () => {
    const ship = Ship(2);
    const boardPre = b.board;
    b.placeShip(ship, 1, 10, true);
    b.placeShip(ship, 1, -3, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: ending point out of board (y)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(ship, 8, 7, true);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });

  it('does not place a ship: y out of board (x placement)', () => {
    const ship = Ship(4);
    const boardPre = b.board;
    b.placeShip(ship, 8, -1, false);
    b.placeShip(ship, 8, -11, false);
    const boardPost = b.board;
    expect(boardPre).toStrictEqual(boardPost);
  });
});

describe('The receiveAttack() method', () => {
  it('has a receiveAttack() method', () => {
    expect(b).toHaveProperty('receiveAttack');
  });

  it('must have 2 arguments', () => {
    expect(b.validAttack()).toBe(false);
    expect(b.validAttack(1)).toBe(false);
  });

  it('takes valid integer', () => {
    expect(b.validAttack(9, 0)).toStrictEqual([9, 0]);
    expect(b.validAttack({}, 4)).toBe(false);
    expect(b.validAttack(4, [1])).toBe(false);
    expect(b.validAttack(NaN, 5)).toBe(false);
    expect(b.validAttack(9, 'n')).toBe(false);
    expect(b.validAttack(undefined, 7)).toBe(false);
    expect(b.validAttack(false, 8)).toBe(false);
    expect(b.validAttack(7, true)).toBe(false);
  });

  it('takes strings that can be parsed in integer', () => {
    expect(b.validAttack('0', 8)).toStrictEqual([0, 8]);
    expect(b.validAttack(2, '4')).toStrictEqual([2, 4]);
    expect(b.validAttack('5', '7')).toStrictEqual([5, 7]);
  });

  it('takes only coordinate inside the board', () => {
    expect(b.validAttack(3, 12)).toBe(false);
    expect(b.validAttack(12, 3)).toBe(false);
    expect(b.validAttack(-3, 1)).toBe(false);
    expect(b.validAttack(1, -3)).toBe(false);
  });

  it.todo('determine if a ship is hit.');
  it.todo('if hit, find the right ship');
  it.todo('send an hit() method to the right ship and check if it is sunked');
  it.todo('if miss, record the coordinate of missed shot.');
});

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
    expect(b.board[0][0]).not.toBeNull();
    expect(b.board[0][1]).not.toBeNull();
    expect(b.board[0][2]).not.toBeNull();
    expect(b.board[0][3]).not.toBeNull();
  });

  it('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    const ship = Ship(3);
    b.placeShip(ship, 1, 0, true);
    expect(b.board[1][0]).not.toBeNull();
    expect(b.board[1][1]).not.toBeNull();
    expect(b.board[1][2]).not.toBeNull();
  });

  it('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    const ship = Ship(2);
    b.placeShip(ship, 2, 0, true);
    expect(b.board[2][0]).not.toBeNull();
    expect(b.board[2][1]).not.toBeNull();
  });

  it('place a ship of length 4 horizontally in [3, 0][4, 0][5, 0][6, 0]', () => {
    const ship = Ship(4);
    b.placeShip(ship, 3, 0, false);
    expect(b.board[3][0]).not.toBeNull();
    expect(b.board[4][0]).not.toBeNull();
    expect(b.board[5][0]).not.toBeNull();
    expect(b.board[6][0]).not.toBeNull();
  });

  it('place a ship of length 3 horizontally in [2, 2][3, 2][4, 2]', () => {
    const ship = Ship(3);
    b.placeShip(ship, 2, 2, false);
    expect(b.board[2][2]).not.toBeNull();
    expect(b.board[3][2]).not.toBeNull();
    expect(b.board[4][2]).not.toBeNull();
  });

  it('place a ship of length 2 horizontally in [3, 4][4, 4]', () => {
    const ship = Ship(2);
    b.placeShip(ship, 3, 4, false);
    expect(b.board[3][4]).not.toBeNull();
    expect(b.board[4][4]).not.toBeNull();
  });

  it('does not place a ship: collision between ships (at the head)', () => {
    const ship = Ship(3);
    expect(b.placeShip(ship, 3, 1, true)).toBe(false);
  });

  it('does not place a ship: collision between ships (at the middle)', () => {
    const ship = Ship(2);
    expect(b.placeShip(ship, 4, 1, true)).toBe(false);
  });

  it('does not place a ship: collision between ship (at the end)', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, 6, 0, true)).toBe(false);
  });

  it('does not place a ship: multiple collisions between ship', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, 2, 4, false)).toBe(false);
  });

  it('does not place a ship: starting point out of board (x)', () => {
    const ship = Ship(2);
    expect(b.placeShip(ship, -3, 1, false)).toBe(false);
    expect(b.placeShip(ship, 10, 1, false)).toBe(false);
  });

  it('does not place a ship: ending part out of board (x)', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, 8, 6, false)).toBe(false);
  });

  it('does not place a ship: x out of board (y placement)', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, -1, 8, true)).toBe(false);
    expect(b.placeShip(ship, 11, 6, true)).toBe(false);
  });

  it('does not place a ship: starting point out of board (y)', () => {
    const ship = Ship(2);
    expect(b.placeShip(ship, 1, 10, true)).toBe(false);
    expect(b.placeShip(ship, 1, -3, true)).toBe(false);
  });

  it('does not place a ship: ending point out of board (y)', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, 8, 7, true)).toBe(false);
  });

  it('does not place a ship: y out of board (x placement)', () => {
    const ship = Ship(4);
    expect(b.placeShip(ship, 8, -1, false)).toBe(false);
    expect(b.placeShip(ship, 8, -11, false)).toBe(false);
  });
});

describe('The receiveAttack() method', () => {
  it.todo('has a receiveAttack() method');
  it.todo('takes a pair of coordinates.');
  it.todo('determine if a ship is hit.');
  it.todo('if hit, find the right ship');
  it.todo('send an hit() method to the right ship and check if it is sunked');
  it.todo('if miss, record the coordinate of missed shot.');
});

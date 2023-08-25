import Gameboard from '../components/gameBoard';
import Ship from '../components/ships';

const gameboard = Gameboard();

describe('Gameboard', () => {
  it('has board propriety', () => {
    expect(gameboard).toHaveProperty('board');
  });

  it('has placeShip() method', () => {
    expect(gameboard).toHaveProperty('placeShip');
  });

  it('has a receiveAttack() method', () => {
    expect(gameboard).toHaveProperty('receiveAttack');
  });

  it('has allShipSunked method', () => {
    expect(gameboard).toHaveProperty('allShipSunked');
  });
});

describe('The board', () => {
  it('is initially empty', () => {
    const board = gameboard.board;
    board.map((row) => row.forEach((cell) => expect(cell).toBeNull()));
  });

  it('has 10 row and 10 column', () => {
    const board = gameboard.board;
    expect(board.length).toBe(10);
    board.map((row) => expect(row.length).toBe(10));
  });
});

describe('The method gameboard.placeShip()', () => {
  it('place a ship of length 5 horizontally in [7, 2][7, 3][7, 4][7, 5][7, 6]', () => {
    const ship = Ship(5);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 7, 2, true);

    const range = Array.from({ length: length }, (_, index) => 2 + index);
    range.map((cell) => {
      expect(gameboard.board[7][cell]).toBe(ship);
    });
  });

  it('place a ship of length 4 horizontally in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = Ship(4);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 0, 0, true);

    const range = Array.from({ length: length }, (_, index) => 0 + index);
    range.map((cell) => {
      expect(gameboard.board[0][cell]).toBe(ship);
    });
  });

  it('place a ship of length 3 horizontally in [1, 0][1, 1][1, 2]', () => {
    const ship = Ship(3);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 1, 0, true);

    const range = Array.from({ length: length }, (_, index) => 0 + index);
    range.map((cell) => {
      expect(gameboard.board[1][cell]).toBe(ship);
    });
  });

  it('place a ship of length 2 horizontally in [2, 0][2, 1]', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 2, 0, true);

    const range = Array.from({ length: length }, (_, index) => 0 + index);
    range.map((cell) => {
      expect(gameboard.board[2][cell]).toBe(ship);
    });
  });

  it('place a ship of length 5 vertically in [2, 6][3, 6][4, 6][5, 6][6, 6]', () => {
    const ship = Ship(5);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 2, 6, false);

    const range = Array.from({ length: length }, (_, index) => 2 + index);
    range.map((row) => {
      expect(gameboard.board[row][6]).toBe(ship);
    });
  });

  it('place a ship of length 4 vertically in [3, 0][4, 0][5, 0][6, 0]', () => {
    const ship = Ship(4);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 3, 0, false);

    const range = Array.from({ length: length }, (_, index) => 3 + index);
    range.map((row) => {
      expect(gameboard.board[row][0]).toBe(ship);
    });
  });

  it('place a ship of length 3 vertically in [2, 2][3, 2][4, 2]', () => {
    const ship = Ship(3);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 2, 2, false);

    const range = Array.from({ length: length }, (_, index) => 2 + index);
    range.map((row) => {
      expect(gameboard.board[row][2]).toBe(ship);
    });
  });

  it('place a ship of length 2 vertically in [3, 4][4, 4]', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    gameboard.placeShip(gameboard.board, ship, 3, 4, false);

    const range = Array.from({ length: length }, (_, index) => 3 + index);
    range.map((row) => {
      expect(gameboard.board[row][4]).toBe(ship);
    });
  });

  it('does not place a ship: collision between ships (at the head at [3, 0])', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    expect(gameboard.placeShip(gameboard.board, ship, 3, 0, false)).toBe(false);

    const oldShip = gameboard.board[3][0];
    const results = [oldShip, null];
    const range = Array.from({ length: length }, (_, index) => 3 + index);
    range.map((row, col) => {
      expect(gameboard.board[row][col]).toBe(results[col]);
    });
  });

  it('does not place a ship: collision between ships (at the middle at [3, 2])', () => {
    const ship = Ship(3);
    const length = ship.getLength();
    expect(gameboard.placeShip(gameboard.board, ship, 3, 1, true)).toBe(false);

    const oldShip = gameboard.board[3][2];
    const results = [null, oldShip, null];
    const range = Array.from({ length: length }, (_, index) => 1 + index);
    range.map((col, index) => {
      expect(gameboard.board[3][col]).toBe(results[index]);
    });
  });

  it('does not place a ship: collision between ship (at the end [4, 4])', () => {
    const ship = Ship(2);
    const length = ship.getLength();
    expect(gameboard.placeShip(gameboard.board, ship, 4, 3, true)).toBe(false);

    const oldShip = gameboard.board[4][4];
    const results = [null, oldShip];
    const range = Array.from({ length: length }, (_, index) => 3 + index);
    range.map((col, index) => {
      expect(gameboard.board[4][col]).toBe(results[index]);
    });
  });

  it('does not place a ship: multiple collisions between shipi [3, 2][3, 4]', () => {
    const ship = Ship(4);
    const length = ship.getLength();
    expect(gameboard.placeShip(gameboard.board, ship, 3, 1, true)).toBe(false);

    const oldShipOne = gameboard.board[3][2];
    const oldShipTwo = gameboard.board[3][4];
    const results = [null, oldShipOne, null, oldShipTwo];

    const range = Array.from({ length: length }, (_, index) => 1 + index);
    range.map((col, index) => {
      expect(gameboard.board[3][col]).toBe(results[index]);
    });
  });

  it('does not place a ship: starting point out of board (row)', () => {
    const ship = Ship(4);
    expect(gameboard.placeShip(gameboard.board, ship, -3, 5, true)).toBe(false);
  });

  it('does not place a ship: ending part out of board (row)', () => {
    const ship = Ship(5);
    expect(gameboard.placeShip(gameboard.board, ship, 8, 6, true)).toBe(false);
  });

  it('does not place a ship: row out of board (col valid placement)', () => {
    const ship = Ship(3);
    const results = [
      gameboard.placeShip(gameboard.board, ship, -1, 7, true),
      gameboard.placeShip(gameboard.board, ship, 11, 6, true)
    ];
    results.map((result) => expect(result).toBe(false));
  });

  it('does not place a ship: starting point out of board (col)', () => {
    const ship = Ship(2);
    const results = [
      gameboard.placeShip(gameboard.board, ship, 1, 10, false),
      gameboard.placeShip(gameboard.board, ship, 1, -3, false)
    ];
    results.map((result) => expect(result).toBe(false));
  });

  it('does not place a ship: ending point out of board (col)', () => {
    const ship = Ship(4);
    expect(gameboard.placeShip(gameboard.board, ship, 8, 7, false)).toBe(false);
  });

  it('does not place a ship: col out of board (row valid placement)', () => {
    const ship = Ship(4);
    const results = [
      gameboard.placeShip(gameboard.board, ship, 8, -1, false),
      gameboard.placeShip(gameboard.board, ship, 8, -11, false)
    ];

    results.map((result) => expect(result).toBe(false));
  });
});

describe('The receiveAttack() method', () => {
  it('must have 3 arguments', () => {
    const results = [
      gameboard.receiveAttack(),
      gameboard.receiveAttack(1),
      gameboard.receiveAttack(1, 2),
      gameboard.receiveAttack(gameboard.board, 1)
    ];

    results.map((result) => expect(result).toBe(false));
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

    values.map(([rowValue, colValue]) =>
      expect(gameboard.receiveAttack(gameboard.board, rowValue, colValue)).toBe(
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

    coord.map(([row, col]) =>
      expect(gameboard.receiveAttack(gameboard.board, row, col)).toBe(false)
    );
  });

  it('if hit, send an hit() method to the right ship', () => {
    const ship = gameboard.board[0][0];
    const length = ship.getLength();
    const range = Array.from({ length: length }, (_, index) => 0 + index);
    const hits = Array.from({ length: length }, (_, index) => 1 + index);

    range.map((col, index) => {
      gameboard.receiveAttack(gameboard.board, 0, col);
      expect(ship.init.hits).toBe(hits[index]);
    });
  });

  it('if hit, does not effect other ships', () => {
    const ship = gameboard.board[3][4];
    expect(ship.init.hits).toBe(0);
  });

  it('if hit enough times, ship is sunked', () => {
    const ship = gameboard.board[0][0];
    const length = ship.getLength();
    const range = Array.from({ length: length }, (_, index) => 0 + index);
    range.map((col) => {
      let ship = gameboard.board[0][col];
      expect(ship.init.sunked).toBe(true);
    });
  });

  it('you cant attack two times the same square', () => {
    expect(gameboard.receiveAttack(gameboard.board, 0, 0)).toBe(false);
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
      [4, 4],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 6]
    ];

    coord.forEach(([x, y]) => gameboard.receiveAttack(gameboard.board, x, y));
    expect(gameboard.allShipSunked()).toBe(true);
  });
});

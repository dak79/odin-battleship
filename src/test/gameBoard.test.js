import { GameBoard } from '../components/gameBoard';

const b = GameBoard();
const board = b.init();
const shipFour = b.createShip(4);
const shipThree = b.createShip(3);
const shipTwo = b.createShip(2);

describe('GameBoard', () => {
  it('has init() method', () => {
    expect(b).toHaveProperty('init');
  });

  it('create a board with 10 x 10', () => {
    expect(board.size).toBe(100);
  });

  it('has createShip() method', () => {
    expect(b).toHaveProperty('createShip');
  });

  it('has placeShip() method', () => {
    expect(b).toHaveProperty('placeShip');
  });
});

describe('The board', () => {
  it('has square [0, 9]', () => {
    expect(board.get('0,9')).toBeDefined();
  });

  it('has square [4, 7]', () => {
    expect(board.get('4,7')).toBeDefined();
  });

  it('has not square [-1, -4]', () => {
    expect(board.get('-1,-4')).toBeUndefined();
  });

  it('has not square [10, 0]', () => {
    expect(board.get('10,0')).toBeUndefined();
  });

  it('has not square [4, 11]', () => {
    expect(board.get('4,11')).toBeUndefined();
  });
});

describe('The method gameBoard.createShip()', () => {
  it('create a length 4 ship', () => {
    expect(shipFour.getLength()).toBe(4);
  });

  it('create a length 3 ship', () => {
    expect(shipThree.getLength()).toBe(3);
  });

  it('create a length 2 ship', () => {
    expect(shipTwo.getLength()).toBe(2);
  });
});

describe('The method gameBoard.placeShip()', () => {
  it('does not place a ship out of the board', () => {
    expect(b.placeShip([9, 0], shipThree.getLength(), board, false)).toBe(
      false
    );
    expect(b.placeShip([0, 9], shipThree.getLength(), board, true)).toBe(false);
    expect(b.placeShip([-1, 0], shipThree.getLength(), board, false)).toBe(
      false
    );
    expect(b.placeShip([0, -1], shipThree.getLength(), board, true)).toBe(
      false
    );
    expect(b.placeShip([8, 5], shipThree.getLength(), board, false)).toBe(
      false
    );
    expect(b.placeShip([5, 8], shipThree.getLength(), board, true)).toBe(false);
  });

  b.placeShip([0, 0], shipFour.getLength(), board, true);
  it('place a ship of length 4 vertically in [0, 0][0, 1][0, 2][0, 3]', () => {
    expect(board.get('0,0')).toMatchObject([
      [0, 1],
      [0, 2],
      [0, 3]
    ]);
    expect(board.get('0,1')).toMatchObject([
      [0, 0],
      [0, 2],
      [0, 3]
    ]);
    expect(board.get('0,2')).toMatchObject([
      [0, 0],
      [0, 1],
      [0, 3]
    ]);
    expect(board.get('0,3')).toMatchObject([
      [0, 0],
      [0, 1],
      [0, 2]
    ]);
  });

  b.placeShip([3, 0], shipFour.getLength(), board, false);
  it('place a ship of length 4 horizontally in [3, 0][4, 0][5, 0][6, 0]', () => {
    expect(board.get('3,0')).toMatchObject([
      [4, 0],
      [5, 0],
      [6, 0]
    ]);
    expect(board.get('4,0')).toMatchObject([
      [3, 0],
      [5, 0],
      [6, 0]
    ]);
    expect(board.get('5,0')).toMatchObject([
      [3, 0],
      [4, 0],
      [6, 0]
    ]);
    expect(board.get('6,0')).toMatchObject([
      [3, 0],
      [4, 0],
      [5, 0]
    ]);
  });

  b.placeShip([1, 0], shipThree.getLength(), board, true);
  it('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    expect(board.get('1,0')).toMatchObject([
      [1, 1],
      [1, 2]
    ]);
    expect(board.get('1,1')).toMatchObject([
      [1, 0],
      [1, 2]
    ]);
    expect(board.get('1,2')).toMatchObject([
      [1, 0],
      [1, 1]
    ]);
  });

  b.placeShip([2, 2], shipThree.getLength(), board, false);
  it('place a ship of length 3 horizontally in [2, 2][3, 2][4, 2]', () => {
    expect(board.get('2,2')).toMatchObject([
      [3, 2],
      [4, 2]
    ]);
    expect(board.get('3,2')).toMatchObject([
      [2, 2],
      [4, 2]
    ]);
    expect(board.get('4,2')).toMatchObject([
      [2, 2],
      [3, 2]
    ]);
  });

  b.placeShip([2, 0], shipTwo.getLength(), board, true);
  it('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    expect(board.get('2,0')).toMatchObject([[2, 1]]);
    expect(board.get('2,1')).toMatchObject([[2, 0]]);
  });

  b.placeShip([3, 4], shipTwo.getLength(), board, false);
  it('place a ship of length 2 horizontally in [3, 4][4, 4]', () => {
    expect(board.get('3,4')).toMatchObject([[4, 4]]);
    expect(board.get('4,4')).toMatchObject([[3, 4]]);
  });

  it('does not place a ship where the space is occupy from another ship', () => {
    expect(b.placeShip([0, 2], shipThree.getLength(), board, true)).toBe(false);
    expect(b.placeShip([1, 2], shipTwo.getLength(), board, true)).toBe(false);
    expect(b.placeShip([2, 2], shipTwo.getLength(), board, true)).toBe(false);
    expect(b.placeShip([3, 0], shipTwo.getLength(), board, true)).toBe(false);
    expect(b.placeShip([2, 0], shipTwo.getLength(), board, false)).toBe(false);
    expect(b.placeShip([4, 2], shipFour.getLength(), board, false)).toBe(false);
    expect(b.placeShip([3, 3], shipThree.getLength(), board, true)).toBe(false);
  });
});

describe('The receiveAttack() method', () => {
  it('has a receiveAttack() method', () => {
    expect(b).toHaveProperty('receiveAttack');
  });

  it.todo(
    'takes a pair of coordinates. accept an array of integer or two string-number. the coordinates should be inside the board.'
  );
  it.todo(
    'determine if a ship is hit. I can check the adiacency list. I should allow loop in adiacency list to have the complete shape of ship. How to represent a miss?'
  );
  it.todo(
    'if hit, find the right shipi by coordinates. Should store all ship placement in an array oof object? Should I add position property to ship factor? Should i add a loop connection in the board so i have complete ship rapresentation in adjacenty list? From adjacenty list i can retrive by coordinate the ship'
  );
  it.todo('send an hit() method to the right ship and check if it is sunked');
  it.todo(
    'if miss, record the coordinate of missed shot. How to represent the missed shoot in adijacency list?, How i store this coordinate?'
  );
});

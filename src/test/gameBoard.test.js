import { GameBoard } from '../components/gameBoard';

describe('GameBoard', () => {
  const b = GameBoard();
  const board = b.init();

  it('has a method called init', () => {
    expect(b).toHaveProperty('init');
  });

  it('is creating a board with 10 x 10', () => {
    expect(board.size).toBe(100);
  });

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

  it('has createShip method', () => {
    expect(b).toHaveProperty('createShip');
  });

  it('create a length 4 ship', () => {
    const ship = b.createShip(4);
    expect(ship.getLength()).toBe(4);
  });

  it('create a length 3 ship', () => {
    const ship = b.createShip(3);
    expect(ship.getLength()).toBe(3);
  });

  it('create a length 2 ship', () => {
    const ship = b.createShip(2);
    expect(ship.getLength()).toBe(2);
  });

  it('has the method placeShip', () => {
    expect(b).toHaveProperty('placeShip');
  });

  it.todo('has the method setModel');
  it.todo('has the method getModel');
  it.todo('has this model for ship of length 4');
  it.todo('has this model for ship of length 3');
  it.todo('has this model for ship of length 2');

  it.skip('place a ship of length 4 vertically in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = b.createShip(4);
    b.placeShip([0, 0], ship, board);
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

  it.skip('place a ship of length 3 vertically in [1, 0][1, 1][1, 2]', () => {
    const ship = b.createShip(3);
    b.placeShip([1, 0], ship, board);
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

  it.skip('place a ship of length 2 vertically in [2, 0][2, 1]', () => {
    const ship = b.createShip(2);
    b.placeShip([2, 0], ship, board);
    expect(board.get('2,0')).toMatchObject([[2, 1]]);
    expect(board.get('2,1')).toMatchObject([[2, 0]]);
  });
});

describe('Placing ship', () => {
  it.todo('place a ship of length 4, 3, 2 vertically');
  it.todo('does not place a ship out of boudary');
  it.todo('does not place a ship where there is another ship');
  it.todo('place a ship of length 4, 3, 2 horizontally');
});

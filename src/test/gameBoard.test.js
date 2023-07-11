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

  it('create a length 1 ship', () => {
    const ship = b.createShip(1);
    expect(ship.getLength()).toBe(1);
  });

  it('has the method placeShip', () => {
    expect(b).toHaveProperty('placeShip');
  });

  it('place a ship of length 4 in [0, 0][0, 1][0, 2][0, 3]', () => {
    const ship = b.createShip(4);
    b.placeShip([0, 2], ship, board);
    expect(board.get('0,0')[0]).toBe([0, 1]);
    expect(board.get('0,1')[0]).toBe([0, 2]);
    expect(board.get('0,2')[0]).toBe([0, 3]);
    expect(board.get('0,3')[0]).toBe([0, 2]);
  });
});

describe('Placing ship', () => {
  it.todo('place a ship inside boudary');
  it.todo('does not place a ship where there is another ship');
  it.todo('does not place a ship out of boudary');
  it.todo('there are 4 types of ship 4, 3, 2, 1');
  it.todo('reverse change the ship orientation in vertical/orizontal');
});

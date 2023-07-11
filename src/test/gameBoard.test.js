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
});

describe('Create a ship', () => {
  it.todo('able to create a ship');
});

describe('Placing ship', () => {
  it.todo('place a ship inside boudary');
  it.todo('there are 4 types of ship 4, 3, 2, 1');
  it.todo('reverse change the ship orientation in vertical/orizontal');
  it.todo('does not place a ship out of boudary');
});

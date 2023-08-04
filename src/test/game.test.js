import game from '../components/game';

describe('Game Object', () => {
  it('has playerOne property', () => {
    expect(game).toHaveProperty('playerOne');
  });

  it('has playerTwo property', () => {
    expect(game).toHaveProperty('playerTwo');
  });

  it('has playerOneGameboard property', () => {
    expect(game).toHaveProperty('playerOneGameboard');
  });

  it('has playerTwoGameboard property', () => {
    expect(game).toHaveProperty('playerTwoGameboard');
  });
});

describe('Game Initialization', () => {
  it('initializes the game with correct Player One states', () => {
    expect(game.playerOne.getIsHuman()).toBe(true);
    expect(game.playerOne.getPlayerName()).toBe('Player 1');
    expect(game.playerOne.getPlayerTurn()).toBe(true);
  });

  it('initializes the game with correct Player Two states', () => {
    expect(game.playerTwo.getIsHuman()).toBe(false);
    expect(game.playerTwo.getPlayerName()).toBe('Cpu');
    expect(game.playerTwo.getPlayerTurn()).toBe(false);
  });

  it('initializes playerOneGameboard', () => {
    expect(game.playerOneGameboard.board).toBeDefined();
  });

  it('initializes playerTwoGameboard', () => {
    expect(game.playerTwoGameboard.board).toBeDefined();
  });

  it('initializes shipsPlayer', () => {
    expect(game.shipsPlayer).toBeDefined();
  });
});

import game from '../components/game';

describe('Game Object', () => {
  it('has playerOne property', () => {
    expect(game.initState).toHaveProperty('playerOne');
  });

  it('has playerTwo property', () => {
    expect(game.initState).toHaveProperty('playerTwo');
  });

  it('has playerOneGameboard property', () => {
    expect(game.initState).toHaveProperty('playerOneGameboard');
  });

  it('has playerTwoGameboard property', () => {
    expect(game.initState).toHaveProperty('playerTwoGameboard');
  });

  it('has playGame method', () => {
    expect(game).toHaveProperty('playGame');
  });
});

describe('Game Initialization', () => {
  it('initializes the game with correct Player One states', () => {
    expect(game.initState.playerOne.getIsHuman()).toBe(true);
    expect(game.initState.playerOne.getPlayerName()).toBe('Player 1');
    expect(game.initState.playerOne.getPlayerTurn()).toBe(true);
  });

  it('initializes the game with correct Player Two states', () => {
    expect(game.initState.playerTwo.getIsHuman()).toBe(false);
    expect(game.initState.playerTwo.getPlayerName()).toBe('Cpu');
    expect(game.initState.playerTwo.getPlayerTurn()).toBe(false);
  });

  it('initializes playerOneGameboard', () => {
    expect(game.initState.playerOneGameboard.board).toBeDefined();
  });

  it('initializes playerTwoGameboard', () => {
    expect(game.initState.playerTwoGameboard.board).toBeDefined();
  });

  it('initializes ships for player one', () => {
    expect(game.initState.playerOneShips).toBeDefined();
  });

  it('initializes ships for player two', () => {
    expect(game.initState.playerTwoShips).toBeDefined();
  });
});

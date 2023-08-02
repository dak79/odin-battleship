import game from './game';

describe('Game Initialization', () => {
  it('initializes the game with correct states', () => {
    expect(game.initialState.playerOne.isHuman).toBe(true);
    expect(game.initialState.playerOne.playerName).toBe('Player 1');
    expect(game.initialState.playerTwo.isHuman).toBe(false);
    expect(game.initialState.playerTwo.playerName).toBe('Cpu');
    // Test other properties of players

    expect(game.initialState.playerOneGameboard).toBeDefined();
    expect(game.initialState.playerTwoGameboard).toBeDefined();
    // Test other properties of gameboards

    expect(game.placementState.playerOneShips).toBeDefined();
    // Test other aspects of the game initialization
  });
});

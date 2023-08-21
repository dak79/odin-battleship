import Player from '../players';
import Gameboard from '../gameBoard';

/**
 * Create a player.
 * @param {Boolean} isHuman
 * @param {String} name
 * @param {Boolean} isPlaying
 * @returns player
 */
const createPlayer = (isHuman, name, isPlaying) => {
  const player = Player();
  player.setIsHuman(isHuman);
  player.setPlayerName(name);
  player.setPlayerTurn(isPlaying);
  return player;
};

/**
 * Initialize players
 * @returns Object with players
 */
const createNewPlayers = () => ({
  playerOne: createPlayer(true, 'Player 1', true),
  playerTwo: createPlayer(false, 'Cpu', false)
});

/**
 * Initialize gameboards
 * @returns Object with gameboards
 */
const createNewGameboards = () => ({
  playerOneGameboard: Gameboard(),
  playerTwoGameboard: Gameboard()
});

export { createNewPlayers, createNewGameboards };

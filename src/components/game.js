import Player from './players.js';
import Gameboard from './gameBoard.js';
const createNewPlayers = () => {
  const playerOne = Player();
  playerOne.setIsHuman(true);
  playerOne.setPlayerName('Player 1');

  const playerTwo = Player();
  playerTwo.setIsHuman(false);
  playerTwo.setPlayerName('cpu');

  return Object.assign({}, { playerOne }, { playerTwo });
};

const createNewGameboards = () => {
  const playerOneGameboard = Gameboard();
  const playerTwoGameboard = Gameboard();

  return Object.assign({}, { playerOneGameboard }, { playerTwoGameboard });
};

const init = () => {
  const players = createNewPlayers();
  const gameboards = createNewGameboards();

  return Object.assign({}, players, gameboards);
};
const game = (() => {
  const initialState = init();
  return {
    initialState
  };
})();

export default game;

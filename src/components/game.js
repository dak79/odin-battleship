import Player from './players.js';
import Gameboard from './gameBoard.js';
const createNewPlayers = () => {
  const playerOne = Player();
  playerOne.setIsHuman(true);
  playerOne.setPlayerName('Player 1');

  const playerTwo = Player();
  playerTwo.setIsHuman(false);
  playerTwo.setPlayerName('Cpu');

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

const shipsPlayers = () => {
  /* Carrier = 1 da 5
   * Battleships = 2 da 4
   * Submarines = 3 da 3
   * Destroyers = 4 da 2
   */
};
const shipCreation = () => {};

const shipPlacement = () => {
  const ships = shipCreation();

  return Object.assign({}, ships);
};

const game = (() => {
  const initialState = init();
  const placementStage = shipPlacement();
  return {
    initialState,
    placementStage
  };
})();

export default game;

/* TODO:
 *  - Ship creation
 *      - chose numebers and create it for each player.
 *  - Ship placement:
 *    - Placement for player throught injecting coords.
 *    - Visualization of ships in player board.
 *    - Check if the cell contain effectivly a ship object.
 *    - Placement for cpu random
 *    - Check if effectivly the cells contain ship object.
 *  - Ship summary visualization:
 *    - Render ships in a card under or on the left of boards.
 *  - Code review
 *  - Functional style review
 *
 *  Tips: game as to contain only game loop and using other object, if logic is
 *  needed put the logic in the right file and develop it in TDD.
 */

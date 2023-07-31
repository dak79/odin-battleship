import Player from './players.js';
import Gameboard from './gameBoard.js';
import Ship from './ships.js';

import iconCarrier from '../assets/icons/carrier.svg';
import iconBattleship from '../assets/icons/battleship.svg';
import iconSubmarine from '../assets/icons/submarine.svg';
import iconDestroyer from '../assets/icons/destroyer.svg';

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

const createShips = (type) =>
  Array.from({ length: type.number }, () => ({
    body: Ship(type.size),
    size: type.size,
    icon: type.icon
  }));

const shipsPlayers = () => {
  const carrier = { number: 1, size: 5, icon: iconCarrier };
  const battleship = { number: 2, size: 4, icon: iconBattleship };
  const submarine = { number: 3, size: 3, icon: iconSubmarine };
  const destroyer = { number: 4, size: 2, icon: iconDestroyer };

  return {
    carrier: createShips(carrier),
    battleships: createShips(battleship),
    submarines: createShips(submarine),
    destroyers: createShips(destroyer)
  };
};
const placementShipPlayer = () => {};
const placementShipCpu = () => {};

const game = (() => {
  const initialState = init();
  const ships = shipsPlayers();
  return {
    initialState,
    ships
  };
})();

export default game;

/* TODO:
 *  - Ship placement:
 *    - Placement for player throught injecting coords.
 *    - Visualization of ships in player board.
 *    - Check if the cell contain effectivly a ship object.
 *    - Placement for cpu random
 *    - Check if effectivly the cells contain ship object.
 *  - Code review
 *  - Functional style review
 *
 *  Tips: game as to contain only game loop and using other object, if logic is
 *  needed put the logic in the right file and develop it in TDD.
 */

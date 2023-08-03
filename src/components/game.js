import Player from './players.js';
import Gameboard from './gameBoard.js';
import Ship from './ships.js';

import iconCarrier from '../assets/icons/carrier.svg';
import iconBattleship from '../assets/icons/battleship.svg';
import iconSubmarine from '../assets/icons/submarine.svg';
import iconDestroyer from '../assets/icons/destroyer.svg';

const createPlayer = (isHuman, name) => {
  const player = Player();
  player.setIsHuman(isHuman);
  player.setPlayerName(name);
  return player;
};

const createNewPlayers = () => ({
  playerOne: createPlayer(true, 'Player 1'),
  playerTwo: createPlayer(false, 'Cpu')
});

const createNewGameboards = () => ({
  playerOneGameboard: Gameboard(),
  playerTwoGameboard: Gameboard()
});

const createShips = (type) =>
  Array.from({ length: type.number }, () => ({
    body: Ship(type.size),
    size: type.size,
    icon: type.icon
  }));

const shipTypes = {
  carrier: { number: 1, size: 5, icon: iconCarrier },
  battleships: { number: 2, size: 4, icon: iconBattleship },
  submarines: { number: 3, size: 3, icon: iconSubmarine },
  destroyers: { number: 4, size: 2, icon: iconDestroyer }
};

const createShipPlayers = () =>
  Object.keys(shipTypes).reduce((ships, type) => {
    ships[type] = createShips(shipTypes[type]);
    return ships;
  }, {});

const shipPlacement = {
  carrier: [{ row: 0, col: 0, isHorizontal: true }],
  battleships: [
    { row: 4, col: 2, isHorizontal: false },
    { row: 5, col: 5, isHorizontal: true }
  ],

  submarines: [
    { row: 2, col: 3, isHorizontal: true },
    { row: 2, col: 7, isHorizontal: false },
    { row: 8, col: 4, isHorizontal: true }
  ],

  destroyers: [
    { row: 4, col: 0, isHorizontal: false },
    { row: 4, col: 4, isHorizontal: false },
    { row: 9, col: 3, isHorizontal: true },
    { row: 0, col: 9, isHorizontal: false }
  ]
};

const setCoordShipsPlayer = (ships) => {
  return Object.keys(ships).reduce((updatedShips, type) => {
    updatedShips[type] = ships[type].map((ship, shipIndex) => {
      return Object.assign(ship, shipPlacement[type][shipIndex]);
    });
    return updatedShips;
  }, {});
};

const initialPlacementPlayer = (ships, gameboard) => {
  Object.values(ships).forEach((typeOfShip) => {
    typeOfShip.forEach((ship) => {
      gameboard.placeShip(
        gameboard.board,
        ship.body,
        ship.row,
        ship.col,
        ship.isHorizontal
      );
    });
  });
};

const initialPlacementRival = (ships, gameboard) => {
  const MAX_BOARD_SIZE = 10;
  Object.values(ships).forEach((typeOfShips) => {
    typeOfShips.forEach((ship) => {
      let placed = false;
      while (!placed) {
        placed = gameboard.placeShip(
          gameboard.board,
          ship.body,
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.random() < 0.5
        );
      }
    });
  });
};

const initGame = () => {
  const players = createNewPlayers();
  const gameboards = createNewGameboards();
  const shipsPlayer = createShipPlayers();

  setCoordShipsPlayer(shipsPlayer);
  initialPlacementPlayer(shipsPlayer, gameboards.playerOneGameboard);
  initialPlacementRival(shipsPlayer, gameboards.playerTwoGameboard);

  return {
    ...players,
    ...gameboards,
    shipsPlayer
  };
};

const game = initGame();

export default game;

/* TODO:
 * - Tests: finish game tests?
 * - Comments
 * - Pass to DOM
 */

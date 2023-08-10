import Player from './players.js';
import Gameboard from './gameBoard.js';
import Ship from './ships.js';

import iconCarrier from '../assets/icons/carrier.svg';
import iconBattleship from '../assets/icons/battleship.svg';
import iconSubmarine from '../assets/icons/submarine.svg';
import iconDestroyer from '../assets/icons/destroyer.svg';

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

/**
 * Create ships
 * @param {Object} type - Type of ship
 * @returns An Object with ships
 */
const createShips = (type) =>
  Array.from({ length: type.number }, () => ({
    body: Ship(type.size),
    size: type.size,
    icon: type.icon
  }));

/**
 * Describe ships
 */
const shipTypes = {
  carrier: { number: 1, size: 5, icon: iconCarrier },
  battleships: { number: 2, size: 4, icon: iconBattleship },
  submarines: { number: 3, size: 3, icon: iconSubmarine },
  destroyers: { number: 4, size: 2, icon: iconDestroyer }
};

/**
 * Create ships for each player
 * @returns Object with ships
 */
const createShipPlayers = () =>
  Object.keys(shipTypes).reduce((ships, type) => {
    ships[type] = createShips(shipTypes[type]);
    return ships;
  }, {});

const createPlayersShips = () => ({
  playerOneShips: createShipPlayers(),
  playerTwoShips: createShipPlayers()
});

/**
 * Describe coordinate and direction of ships
 */
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

/**
 * Merge ships description and data for placement.
 * @param {Object} ships
 * @returns Object of ships with all data
 */
const setCoordShipsPlayer = (ships) =>
  Object.keys(ships).reduce(
    (updatedShips, type) =>
      (updatedShips[type] = ships[type].map((ship, shipIndex) =>
        Object.assign(ship, shipPlacement[type][shipIndex])
      )),
    {}
  );

/**
 * Place ship on player board
 * @param {Object} ships
 * @param {Object} gameboard
 */
const initialPlacementPlayer = (ships, gameboard) =>
  Object.values(ships).forEach((typeOfShip) =>
    typeOfShip.forEach((ship) =>
      gameboard.placeShip(
        gameboard.board,
        ship.body,
        ship.row,
        ship.col,
        ship.isHorizontal
      )
    )
  );

/**
 * Place randomly ship on opponent board.
 * @param {Object} ships
 * @param {Object} gameboard
 */
const initialPlacementRival = (ships, gameboard) => {
  const MAX_BOARD_SIZE = 10;
  Object.values(ships).forEach((typeOfShips) =>
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
    })
  );
};

/**
 * Initialize the game;
 * @returns Object
 */
const initGame = () => {
  const players = createNewPlayers();
  const gameboards = createNewGameboards();
  const ships = createPlayersShips();

  setCoordShipsPlayer(ships.playerOneShips);
  initialPlacementPlayer(ships.playerOneShips, gameboards.playerOneGameboard);
  initialPlacementRival(ships.playerTwoShips, gameboards.playerTwoGameboard);

  return {
    ...players,
    ...gameboards,
    ...ships
  };
};

/**
 * Export the game object
 */
const game = initGame();

export default game;

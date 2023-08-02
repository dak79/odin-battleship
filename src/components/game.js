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

  return { playerOne, playerTwo };
};

const createNewGameboards = () => ({
  playerOneGameboard: Gameboard(),
  playerTwoGameboard: Gameboard()
});

const init = () => {
  const players = createNewPlayers();
  const gameboards = createNewGameboards();

  return { ...players, ...gameboards };
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

const setCoordShipsPlayer = (ships) => {
  const placementData = [
    {
      ship: 'carrier',
      data: [{ x: 0, y: 0, isVertical: false }]
    },
    {
      ship: 'battleships',
      data: [
        { x: 5, y: 5, isVertical: false },
        { x: 2, y: 4, isVertical: true }
      ]
    },
    {
      ship: 'submarines',
      data: [
        { x: 7, y: 2, isVertical: true },
        { x: 3, y: 2, isVertical: false },
        { x: 4, y: 8, isVertical: false }
      ]
    },
    {
      ship: 'destroyers',
      data: [
        { x: 9, y: 0, isVertical: true },
        { x: 4, y: 4, isVertical: true },
        { x: 0, y: 4, isVertical: true },
        { x: 3, y: 9, isVertical: false }
      ]
    }
  ];

  Object.entries(ships).forEach(([_, ships], typeIndex) => {
    ships.forEach((ship, shipIndex) => {
      Object.assign(ship, placementData[typeIndex].data[shipIndex]);
    });
  });
};

const placementShipPlayer = (ships, initialState) => {
  Object.entries(ships).forEach(([_, ships]) => {
    ships.forEach((ship) => {
      initialState.playerOneGameboard.placeShip(
        initialState.playerOneGameboard.board,
        ship.body,
        ship.x,
        ship.y,
        ship.isVertical
      );
    });
  });
};

const randomPlacementRival = (ships, initialState) => {
  const MAX_BOARD_SIZE = 10;
  Object.entries(ships).forEach(([_, ships]) => {
    ships.forEach((ship) => {
      let placed;
      while (!placed) {
        placed = initialState.playerTwoGameboard.placeShip(
          initialState.playerTwoGameboard.board,
          ship.body,
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.floor(Math.random() * MAX_BOARD_SIZE) < 5 ? true : false
        );
      }
    });
  });
};

const placement = (initialState) => {
  const shipsPlayer = shipsPlayers();
  setCoordShipsPlayer(shipsPlayer);
  placementShipPlayer(shipsPlayer, initialState);
  const shipsRival = shipsPlayers();
  randomPlacementRival(shipsRival, initialState);
  return { playerOneShips: shipsPlayer };
};

const game = (() => {
  const initialState = init();
  const placementState = placement(initialState);
  return {
    initialState,
    placementState
  };
})();

export default game;

/* TODO:
 * - Method to take input for attack from player 2 board.
 *   - Apply an eventListener to all cells of cpu board
 *   - Create an event handler which take the click and parse an x and an y
 *    - Decide where to put event handler, maybe in a file or in game.
 *    - Carefull about IEEF game, might need a new file or module not IEFF.
 *      Maybe is better to separate handler and game IEEF.
 */

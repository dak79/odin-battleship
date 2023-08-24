import Ship from '../ships';
import iconCarrier from '../../assets/icons/carrier.svg';
import iconBattleship from '../../assets/icons/battleship.svg';
import iconSubmarine from '../../assets/icons/submarine.svg';
import iconDestroyer from '../../assets/icons/destroyer.svg';

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
 * Place randomly ship on opponent board.
 * @param {Object} ships
 * @param {Object} gameboard
 */
const placementRival = (ships, gameboard) => {
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
  return gameboard;
};

export { placementRival, createPlayersShips };

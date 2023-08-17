import Player from '../players';
import Gameboard from '../gameBoard';
import Ship from '../ships';
import iconCarrier from '../../assets/icons/carrier.svg';
import iconBattleship from '../../assets/icons/battleship.svg';
import iconSubmarine from '../../assets/icons/submarine.svg';
import iconDestroyer from '../../assets/icons/destroyer.svg';

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

export { createNewPlayers, createNewGameboards, createPlayersShips };

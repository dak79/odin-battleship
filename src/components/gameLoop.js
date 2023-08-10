import game from './game';
import DOM from '../dom/DOM';
import eventListeners from '../dom/eventListeners';

const attackDelay = 1000;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const getTableSelector = (isPlayerOne) =>
  isPlayerOne
    ? '#body-main #board-rival #board-rival-table'
    : '#body-main #board-player #board-player-table';

const getMessage = (isPlayerOne) =>
  isPlayerOne ? 'Attack enemy board' : 'Enemy attacks your ships';
const getIconSelector = (isPlayerOne, shipType) =>
  isPlayerOne
    ? `#body-main #ships-rival #${shipType}`
    : `#body-main #ships-player #${shipType}`;

const playerAttack = async (attacker, opponent, isPlayerOne) => {
  const updateDom = DOM();
  const events = eventListeners();
  const body = document.querySelector('#hook');
  const tableSelector = getTableSelector(isPlayerOne);
  const table = body.querySelector(tableSelector);

  updateDom.setMessage(getMessage(isPlayerOne));

  let validAttack = false;

  while (!validAttack) {
    const coord = isPlayerOne
      ? await events.addClicks(body)
      : attacker.generateRandomCoordinates();
    const [row, col] = coord;
    validAttack = opponent.receiveAttack(opponent.board, row, col);

    if (validAttack) {
      if (!isPlayerOne) await timer(attackDelay);

      if (opponent.board[row][col]) {
        updateDom.renderShot(table, row, col, true);
        const ship = opponent.board[row][col];
        if (ship.init.sunked) {
          const iconSelector = getIconSelector(isPlayerOne, ship.init.type);
          const shipIcons = body.querySelector(iconSelector);
          updateDom.renderSunkedShip(shipIcons);
        }
      } else {
        updateDom.renderShot(table, row, col, false);
      }
    }
  }
};

const gameLoop = async () => {
  while (
    !game.playerOneGameboard.allShipSunked() &&
    !game.playerTwoGameboard.allShipSunked()
  ) {
    if (!game.playerOneGameboard.allShipSunked())
      await playerAttack(game.playerOne, game.playerTwoGameboard, true);
    if (!game.playerTwoGameboard.allShipSunked())
      await playerAttack(game.playerTwo, game.playerOneGameboard, false);
  }

  game.playerOneGameboard.allShipSunked()
    ? console.log('Cpu wins')
    : console.log('Player 1 wins');
};
/* TODO:
 * - ship test for ship type
 * - read and think new requirement
 *
 */
export default gameLoop;

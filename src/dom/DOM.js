import renderHeaderContent from './renders/header';
import createStructureBody from './renders/body';
import renderControllersContent from './renders/controllers';
import { renderGameContent, removeGameContent } from './renders/gameContent';
import renderFooterContent from './renders/footer';
import eventListeners from './eventListeners';

const setMessage = (message) => {
  const messageField = document.querySelector('#message-field');
  messageField.textContent = message;
};

const renderShot = (table, x, y, isHit) => {
  console.log(table);
  const rows = Array.from(table.rows);
  rows.forEach((row) => {
    const td = Array.from(row.cells).find(
      (td) => td.dataset.x === x && td.dataset.y === y
    );

    if (td) {
      if (!td.classList.contains('.ship-hit') && isHit === true) {
        td.classList.add('ship-hit');
        return;
      }

      if (!td.classList.contains('missed-hit') && isHit === false) {
        td.classList.add('missed-hit');
        return;
      }
    }
  });
};

const renderSunkedShip = (container) => {
  const icons = Array.from(container.children);
  const icon = icons.find((icon) => !icon.classList.contains('ship-sunked'));
  if (icon) {
    icon.classList.add('ship-sunked');
  }
};

/**
 * Render the web page
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
const renderPage = (hook, game, ships) => {
  const body = createStructureBody(hook);

  renderHeaderContent(body.header);

  renderControllersContent(body.main, game);
  renderGameContent(body.main, game, ships);

  renderFooterContent(body.footer);

  return body;
};

// Timer
const ATTACK_DELAY = 1000;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Get the table element
 * @param {Boolean} isPlayerOne
 * @returns
 */
const getTableSelector = (isPlayerOne) =>
  isPlayerOne
    ? '#body-main #board-rival #board-rival-table'
    : '#body-main #board-player #board-player-table';

/**
 * Get the message
 * @param {Boolean} isPlayerOne
 * @returns
 */
const getMessage = (isPlayerOne) =>
  isPlayerOne ? 'Attack enemy board' : 'Enemy attacks your ships';

/**
 * Get the selector for icon.
 * @param {Boolean} isPlayerOne
 * @param {Object} shipType - Ship object
 * @returns
 */
const getIconSelector = (isPlayerOne, shipType) =>
  isPlayerOne
    ? `#body-main #ships-rival #${shipType}`
    : `#body-main #ships-player #${shipType}`;

const toggleBtnStart = (btn) => {
  const text = btn.textContent === 'Start' ? 'Quit' : 'Start';
  btn.textContent = text;
};
/**
 * Render the winning message.
 * @param {Boolean} isPlayerOneWinner
 * @returns
 */
const renderWinningState = (isPlayerOneWinner) =>
  isPlayerOneWinner ? setMessage('Player 1 Wins') : setMessage('Computer Wins');

/**
 * Render attack on boards
 * @param {Object} attacker
 * @param {Object} opponent
 * @param {Boolean} isPlayerOne
 */
const renderPlayerAttack = async (attacker, opponent, isPlayerOne) => {
  const events = eventListeners();
  const body = document.querySelector('#hook');
  const tableSelector = getTableSelector(isPlayerOne);
  const table = body.querySelector(tableSelector);

  setMessage(getMessage(isPlayerOne));

  let validAttack = false;

  while (!validAttack) {
    const coord = isPlayerOne
      ? await events.addClicks(body)
      : attacker.generateRandomCoordinates();
    const [row, col] = coord;
    validAttack = opponent.receiveAttack(opponent.board, row, col);

    console.log(validAttack);
    if (validAttack) {
      if (!isPlayerOne) await timer(ATTACK_DELAY);

      if (opponent.board[row][col]) {
        renderShot(table, row, col, true);
        const ship = opponent.board[row][col];
        if (ship.init.sunked) {
          const iconSelector = getIconSelector(isPlayerOne, ship.init.type);
          const shipIcons = body.querySelector(iconSelector);
          renderSunkedShip(shipIcons);
        }
      } else {
        renderShot(table, row, col, false);
      }
    }
  }
};

/**
 * Export DOM object
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
const DOM = () => ({
  render: (hook, game, ships) => renderPage(hook, game, ships),
  setMessage: (message) => setMessage(message),
  toggleBtnStart: (btn) => toggleBtnStart(btn),
  renderGameContent: (parent, game, ships) =>
    renderGameContent(parent, game, ships),
  removeGameContent: (parent) => removeGameContent(parent),
  renderShot: (table, row, col, isHit) => renderShot(table, row, col, isHit),
  renderSunkedShip: (ship) => renderSunkedShip(ship),
  renderWinningState: (isPlayerOneWinner) =>
    renderWinningState(isPlayerOneWinner),
  renderPlayerAttack: (attacker, opponent, isPlayerOne) =>
    renderPlayerAttack(attacker, opponent, isPlayerOne)
});

export default DOM;

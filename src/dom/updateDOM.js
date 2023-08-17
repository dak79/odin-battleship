import eventListeners from './eventListeners';

const setMessage = (message) => {
  const messageField = document.querySelector('#message-field');
  messageField.textContent = message;
};

/**
 * Get the message
 * @param {Boolean} isPlayerOne
 * @returns
 */
const getMessage = (isPlayerOne) =>
  isPlayerOne ? 'Attack enemy board' : 'Enemy attacks your ships';

const toggleBtnStart = (btn) => {
  const text = btn.textContent === 'Start' ? 'Quit' : 'Start';
  btn.textContent = text;
};

// Timer
const ATTACK_DELAY = 1000;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const renderShot = (table, x, y, isHit) => {
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

const renderSunkedShip = (container) => {
  const icons = Array.from(container.children);
  const icon = icons.find((icon) => !icon.classList.contains('ship-sunked'));
  if (icon) {
    icon.classList.add('ship-sunked');
  }
};

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
 * Render the winning message.
 * @param {Boolean} isPlayerOneWinner
 * @returns
 */
const renderWinningState = (isPlayerOneWinner) =>
  isPlayerOneWinner ? setMessage('Player 1 Wins') : setMessage('Computer Wins');

/*
 * Export updateDOM object
 */
const updateDOM = () => ({
  setMessage: (message) => setMessage(message),
  toggleBtnStart: (btn) => toggleBtnStart(btn),
  renderShot: (table, row, col, isHit) => renderShot(table, row, col, isHit),
  renderSunkedShip: (ship) => renderSunkedShip(ship),
  renderPlayerAttack: (attacker, opponent, isPlayerOne) =>
    renderPlayerAttack(attacker, opponent, isPlayerOne),
  renderWinningState: (isPlayerOneWinner) =>
    renderWinningState(isPlayerOneWinner)
});

export default updateDOM;

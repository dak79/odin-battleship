import eventListeners from './eventListeners';

/**
 * Remove element from DOM
 * @param {Node} element
 */
const removeElement = (element) => {
  if (element) {
    element.remove();
  }
};

/**
 * Set a message in the message field
 * @param {String} message
 */
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

/**
 * Set text content of an element.
 * @param {Node} btn
 */
const setTextContent = (element, text) => {
  element.textContent = text;
};

const addShotClasses = (cell, isHit) => {
  const hitClass = isHit ? 'ship-hit' : 'missed-hit';
  const otherClass = isHit ? 'missed-hit' : 'ship-hit';

  if (!cell.classList.contains(hitClass)) {
    cell.classList.add(hitClass);
  }

  if (cell.classList.contains(otherClass)) {
    cell.classList.remove(otherClass);
  }
};

/**
 * Render attack result on boards
 * @param {Node} table
 * @param {String} x
 * @param {String} y
 * @param {Boolean} isHit
 */
const renderShot = (table, x, y, isHit) => {
  const rows = Array.from(table.rows);
  rows.forEach((row) => {
    const td = Array.from(row.cells).find(
      (td) => td.dataset.x === x && td.dataset.y === y
    );

    if (td) {
      addShotClasses(td, isHit);
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

/**
 * Render icon as sunked ship.
 * @param {Node} container
 */
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

// Delay
const ATTACK_DELAY = 1000;

/**
 * Timer
 * @param {Number} ms
 * @returns
 */
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// Store ship hit by cpu
let shipsHits = [];

// Delete the ship in the array
const clearShipsHits = () => {
  shipsHits.splice(0, 1);
};

// Random coordinate for cpu attack
const generateRandomCoordinates = () => [
  Math.floor(Math.random() * 10).toString(),
  Math.floor(Math.random() * 10).toString()
];

/**
 * Generate coordinate for attack. If cpu hit a ship will stick around that
 * until is sunked.
 * @returns {Array} Coordinate for attack
 */
const cpuAttack = () => {
  if (shipsHits.length) {
    const coord =
      shipsHits[0].adjacentSlot[
        Math.floor(Math.random() * shipsHits[0].adjacentSlot.length)
      ];

    const [adjRow, adjCol] = coord;

    return [adjRow.toString(), adjCol.toString()];
  }

  return generateRandomCoordinates();
};

/**
 * Store the ship in the array with adjacent slot to try to hit
 * @param {String} row
 * @param {String} col
 * @param {Object} shipHit
 */
const setShipsHits = (row, col, shipHit) => {
  const foundShip = shipsHits.find(
    (ship) => ship.stats.init.id === shipHit.init.id
  );
  if (!foundShip) {
    shipsHits.push({
      stats: shipHit,
      hit: [[parseInt(row), parseInt(col)]],
      adjacentSlot: [
        [parseInt(row) + 1, parseInt(col)],
        [parseInt(row) - 1, parseInt(col)],
        [parseInt(row), parseInt(col) + 1],
        [parseInt(row), parseInt(col) - 1]
      ]
    });
  } else {
    const index = shipsHits.indexOf(foundShip);
    if (!shipsHits[index].stats.init.sunked) {
      shipsHits[index].hit.push([parseInt(row), parseInt(col)]);
      const isH = shipsHits[index].stats.init.isHorizontal;
      updateAdjacences(isH, index);
    } else {
      clearShipsHits();
    }
  }
};

/**
 * Update adjacent slots array after the first hit on a ship
 * @param {Boolean} isHorizontal
 * @param {Number} index
 */
const updateAdjacences = (isHorizontal, index) => {
  shipsHits[index].adjacentSlot.length = 0;
  const newAttemps = [];
  shipsHits[index].hit.forEach((coord) => {
    const [row, col] = coord;
    const newCoords1 = isHorizontal
      ? [parseInt(row), parseInt(col) + 1]
      : [parseInt(row) + 1, parseInt(col)];
    const newCoords2 = isHorizontal
      ? [parseInt(row), parseInt(col) - 1]
      : [parseInt(row) - 1, parseInt(col)];

    newAttemps.push(newCoords1, newCoords2);
  });

  shipsHits[index].adjacentSlot = newAttemps.filter(
    (slot) =>
      !shipsHits[index].hit.some(
        (hitSlot) => hitSlot[0] === slot[0] && hitSlot[1] === slot[1]
      )
  );
};

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
    const [row, col] = isPlayerOne
      ? await events.addClicks(body, false)
      : cpuAttack();
    validAttack = opponent.receiveAttack(opponent.board, row, col);

    if (validAttack) {
      if (!isPlayerOne) await timer(ATTACK_DELAY);

      if (opponent.board[row][col]) {
        if (!isPlayerOne) {
          setShipsHits(row, col, opponent.board[row][col]);
        }
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
 * Render winning message.
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
  removeElement: (element) => removeElement(element),
  setTextContent: (btn, text) => setTextContent(btn, text),
  renderShot: (table, row, col, isHit) => renderShot(table, row, col, isHit),
  renderSunkedShip: (ship) => renderSunkedShip(ship),
  renderPlayerAttack: (attacker, opponent, isPlayerOne) =>
    renderPlayerAttack(attacker, opponent, isPlayerOne),
  renderWinningState: (isPlayerOneWinner) =>
    renderWinningState(isPlayerOneWinner)
});

export default updateDOM;

/*
 * TODO:
 * - code review
 * - functional style review
 * */

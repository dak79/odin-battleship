import game from '../components/game/game';
import DOM from './DOM';
import updateDOM from './updateDOM';
import placementDOM from './placementDOM';

/**
 * Add listener to button start for starting placement
 * @param {Node} body
 */
const startGame = (body) => {
  const btnStart = body.querySelector('#body-main #controllers #button-start');
  btnStart.addEventListener('click', startPlacement);
};

/**
 * Remove listener for starting placement.
 * @param {Node} btn
 * @returns
 */
const startPlacementRemove = (btn) =>
  btn.removeEventListener('click', startPlacement);

/**
 * Start placement fase.
 * @param {Event} event
 */
const startPlacement = async (event) => {
  const body = document.querySelector('#hook');
  const name = body.querySelector('#body-main #player-one-name');
  const btn = name.querySelector('#btn-rotate');

  updateDOM().setMessage('Place your ships');
  updateDOM().setTextContent(event.target, 'Quit');

  startPlacementRemove(event.target);
  quitGame(event.target);

  const newGame = game.init();
  await game.placement(newGame);

  updateDOM().removeElement(btn);
  updateDOM().setTextContent(name, 'Player 1');

  game.playGame(newGame);
};

/**
 * Add listener for quit game.
 * @param {Node} btn
 */
const quitGame = (btn) => {
  btn.addEventListener('click', quitGameLoop);
};

/**
 * Quit game and reset.
 * @param {Event} event
 */
const quitGameLoop = (event) => {
  const body = document.querySelector('#hook');
  const name = body.querySelector('#body-main #player-one-name');
  const btn = name.querySelector('#btn-rotate');

  const newGameInit = game.init();

  removeQuitGame(event.target);
  updateDOM().setTextContent(event.target, 'Start');

  const main = body.querySelector('#body-main');

  DOM().removeBoards(main);

  placementDOM().removeShipsSummary(main);

  updateDOM().removeElement(btn);
  updateDOM().setTextContent(name, 'Player 1');

  DOM().renderBoards(main, newGameInit);

  startGame(body);
  updateDOM().setMessage('Welcome! Press start to play');
};

/**
 * Remove listener from quit button.
 * @param {Node} btn
 */
const removeQuitGame = (btn) => {
  btn.removeEventListener('click', quitGameLoop);
};

/**
 * Add listener to Rotate button.
 * @param {Node} btn
 * @param {Object} ship
 * @returns
 */
const btnRotate = (btn, ship) =>
  btn.addEventListener('click', rotateShip.bind(null, ship));

/**
 * Handle rotate
 * @param {Object} ship
 * @returns
 */
const rotateShip = (ship) =>
  ship.body.init.isHorizontal
    ? ship.body.setDirection(false)
    : ship.body.setDirection(true);

/**
 * Add listener for mouse to player board
 * @param {Node} table
 * @param {Boolean} isAdding
 */
const mouseListener = (table, isAdding) => {
  const rows = Array.from(table.rows);
  rows.forEach((row) => {
    const cells = Array.from(row.cells);
    cells.forEach((td) => {
      if (isAdding) {
        td.addEventListener('mouseover', mouseHandler);
        td.addEventListener('mouseleave', mouseHandler);
      } else {
        td.removeEventListener('mouseover', mouseHandler);
        td.removeEventListener('mouseleave', mouseHandler);
      }
    });
  });
};

let activeShip = null;

/**
 * Set ship active
 * @param {Object} ship
 */
const setActiveShip = (ship) => {
  activeShip = ship;
};

/**
 * Get the active ship
 * @returns Ship object
 */
const getActiveShip = () => activeShip;

/**
 * Clear activeShip variable
 */
const clearActiveShip = () => {
  activeShip = null;
};

/**
 * Get ship coordinates
 * @param {Number} row
 * @param {Number} col
 * @param {Boolean} direction
 * @param {Number} value
 * @returns
 */
const getCoord = (row, col, direction, value) => [
  direction ? row : row + value,
  direction ? col + value : col
];

/**
 * Check if all ship is inside board
 * @param {Object} ship
 * @returns {Boolean}
 */
const validateCells = (ship) =>
  ship.map((coords) => {
    const [row, col] = coords;
    if (
      row < 0 ||
      row > 9 ||
      col < 0 ||
      col > 9 ||
      document
        .querySelector(`[data-x='${row}'][data-y='${col}']`)
        .classList.contains('ship-placed')
    ) {
      return false;
    }
    return true;
  });

/**
 * Handle mouse event on player board.
 * @param {Event} event
 */
const mouseHandler = (event) => {
  event.stopPropagation();
  const ship = getActiveShip();
  const shipDir = ship.body.init.isHorizontal;
  const targetX = parseInt(event.target.dataset.x);
  const targetY = parseInt(event.target.dataset.y);

  if (document.querySelector(`[data-x='${targetX}'][data-y='${targetY}']`)) {
    const range = Array.from({ length: ship.body.init.len }, (_, i) => i);
    const shipCoord = range.map((cell) =>
      getCoord(targetX, targetY, shipDir, cell)
    );

    const className = validateCells(shipCoord).some((value) => value === false)
      ? 'ship-shadow-invalid'
      : 'ship-shadow';

    range.forEach((cell) => {
      const [cellX, cellY] = getCoord(targetX, targetY, shipDir, cell);
      const td = document.querySelector(
        `[data-x='${cellX}'][data-y='${cellY}']`
      );
      if (td) {
        if (
          event.type === 'mouseover' &&
          !td.classList.contains('ship-placed')
        ) {
          td.classList.add(className);
        }

        if (event.type === 'mouseleave') {
          td.classList.remove(className);
        }
      }
    });
  }
};

/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
 * @param {Boolean} isPlayerBoard
 * @returns
 */
const addClicks = (body, isPlayerBoard) => {
  return new Promise((resolve) => {
    const table = isPlayerBoard
      ? body.querySelector('#body-main #board-player #board-player-table')
      : body.querySelector('#body-main #board-rival #board-rival-table');
    const cells = table.querySelectorAll('td');
    const clicks = (event) => {
      const [row, col] = parseCoords(event);
      resolve([row, col]);
    };

    cells.forEach((cell) => cell.addEventListener('click', clicks));
  });
};

const parseCoords = (event) => [event.target.dataset.x, event.target.dataset.y];

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = () => ({
  startBtn: (body) => startGame(body),
  quitBtn: (btn) => quitGame(btn),
  btnRotate: (btn, ship) => btnRotate(btn, ship),
  addClicks: (body, isPlayerBoard) => addClicks(body, isPlayerBoard),
  setActiveShip: (ship) => setActiveShip(ship),
  clearActiveShip: () => clearActiveShip(),
  mouseListener: (table, isAdding) => mouseListener(table, isAdding)
});

export default eventListeners;

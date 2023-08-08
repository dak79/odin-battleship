import eventHandlers from './eventHandlers';

const startGame = (body) => {
  const btnStart = body.main.querySelector('#controllers #button-start');
  btnStart.addEventListener('click', eventHandlers.startGameLoop);
};

/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
 * @returns
 */
const addClicksRivalBoard = (body) => {
  return new Promise((resolve) => {
    const table = body.querySelector('#body-main #board-rival #board-rival-table');
    const cells = table.querySelectorAll('td');

  function attackCoords(event) {
    const [row, col] = eventHandlers.parseAttackCoords(event)
    resolve([row, col])
  }

  cells.forEach((cell) => {
    cell.addEventListener('click', attackCoords);
  });
  });
};

/**
 * Remove click listener from cpu board
 * @param {Array[]} cells
 */
const removeClicksRivalBoard = (cells) => {
  cells.forEach((cell) =>
    cell.removeEventListener('click', eventHandlers.parseAttackCoords)
  );
};

const startGameRemove = (btn) => {
  btn.removeEventListener('click', eventHandlers.startGameLoop);
};

/**
 * Remove listener from a cell.
 * @param {Array[]} cell
 * @returns
 */
const removeClickRivalBoard = (cell) =>
  cell.removeEventListener('click', eventHandlers.parseAttackCoords);

/**
 * Initialize event listeners
 * @param {HTMLElement} body
 */
const initializeEventListeners = (body) => {
  const rivalTable = body.main.querySelector('#board-rival #board-rival-table');
  const cellsRivalBoard = clicksRivalBoard(rivalTable);

  // const startBtn = body.main.querySelector('#controllers #button-start');
  // startGame(startBtn);
};

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = () => ({
  startBtn: (body) => startGame(body),
  addClicksRivalBoard: (body) => addClicksRivalBoard(body),
  removeClicksRivalBoard: (cells) => removeClicksRivalBoard(cells)
});

export default eventListeners;

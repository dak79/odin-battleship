import eventHandlers from './eventHandlers';
/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
 * @returns
 */
const clicksRivalBoard = (table) => {
  const cells = table.querySelectorAll('td');

  cells.forEach((cell) => {
    cell.addEventListener('click', eventHandlers.parseAttackCoords);
  });

  return cells;
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
  const rivalTable = body.main.querySelector('#board-rival');
  const cellsRivalBoard = clicksRivalBoard(rivalTable);
};

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = (body) => {
  return {
    events: () => initializeEventListeners(body)
  };
};

export default eventListeners;

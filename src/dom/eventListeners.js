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
const addClicks = (body) => {
  return new Promise((resolve) => {
    const table = body.querySelector(
      '#body-main #board-rival #board-rival-table'
    );
    const cells = table.querySelectorAll('td');
    const removeClicks = () => {
      cells.forEach((cell) => cell.removeEventListener('click', attackHandler));
    };
    const attackHandler = (event) => {
      const [row, col] = eventHandlers.parseAttackCoords(event);
      removeClicks();
      resolve({ coord: [row, col], remove: removeClicks });
    };

    cells.forEach((cell) => cell.addEventListener('click', attackHandler), {
      once: true
    });
  });
};

const startGameRemove = (btn) => {
  btn.removeEventListener('click', eventHandlers.startGameLoop);
};

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = () => ({
  startBtn: (body) => startGame(body),
  addClicks: (body) => addClicks(body)
});

export default eventListeners;

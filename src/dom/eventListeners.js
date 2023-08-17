import game from '../components/game/game';
import DOM from './DOM';
import updateDOM from './updateDOM';

const startGame = (body) => {
  const btnStart = body.querySelector('#body-main #controllers #button-start');
  btnStart.addEventListener('click', startGameLoop);
};

const startGameLoop = (event) => {
  const newGame = game.init();
  game.placement(newGame);
  game.playGame(newGame);
  startGameRemove(event.target);
  updateDOM().toggleBtnStart(event.target);
  quitGame(event.target);
};

const startGameRemove = (btn) => {
  btn.removeEventListener('click', startGameLoop);
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
    const attackHandler = (event) => {
      const [row, col] = parseAttackCoords(event);
      resolve([row, col]);
    };

    cells.forEach((cell) => cell.addEventListener('click', attackHandler));
  });
};

const parseAttackCoords = (event) => [
  event.target.dataset.x,
  event.target.dataset.y
];

const quitGame = (btn) => {
  btn.addEventListener('click', quitGameLoop);
};

const quitGameLoop = (event) => {
  const body = document.querySelector('#hook');
  const newGameInit = game.init();
  const newGamePlacement = game.placement(newGameInit);

  removeQuitGame(event.target);
  updateDOM().toggleBtnStart(event.target);
  const main = body.querySelector('#body-main');

  DOM().removeGameContent(main);

  DOM().renderGameContent(main, newGameInit, newGamePlacement);
  startGame(body);
  updateDOM().setMessage('Place your ships');
};

const removeQuitGame = (btn) => {
  btn.removeEventListener('click', quitGameLoop);
};

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = () => ({
  startBtn: (body) => startGame(body),
  removeStartBtn: (btn) => startGameRemove(btn),
  quitBtn: (btn) => quitGame(btn),
  addClicks: (body) => addClicks(body)
});

export default eventListeners;

/* - Clean files
 * - Fix file tree
 * - Code review
 * - Functional review
 * - Check test.
 * - TOP forward
 * */

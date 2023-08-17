import game from '../components/game';
import DOM from './DOM';
// const btnStart = body.querySelector('#body-main #controllers #button-start');
//   events.removeStartBtn(btnStart);

//   toggleBtnStart(btnStart);
//   events.quitBtn(btnStart);
// attach event listener to button quit
// detach from event target the listener.
// come back to initial state.

const startGame = (body) => {
  console.log(body);
  const btnStart = body.querySelector('#body-main #controllers #button-start');
  console.log(btnStart);
  btnStart.addEventListener('click', startGameLoop);
};

const startGameLoop = (event) => {
  console.log(game);
  const newGame = game.init();
  console.log(event.target);
  game.playGame(newGame);
  startGameRemove(event.target);
  DOM().toggleBtnStart(event.target);
  quitGame(event.target);
  console.log('press');
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
  const newGamePlacement = game.placement();

  console.log(game);
  console.log(event.target);
  removeQuitGame(event.target);
  console.log(newGame);
  DOM().toggleBtnStart(event.target);
  // render non ha senso. troppo, render solo delle board per iniziare poi
  // vediamo e cancellare le board prima
  // bisogna resettare game e passarlo al game loop
  // bisogna resettare gli shot per valid attack
  const main = body.querySelector('#body-main');

  DOM().removeGameContent(main);

  DOM().renderGameContent(main, newGameInit, newGamePlacement);
  startGame(body);
  DOM().setMessage('Place your ships');
  //event.target.addEventListener('click', startGameLoop);

  //game.reset();
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
 *
 *
 * */

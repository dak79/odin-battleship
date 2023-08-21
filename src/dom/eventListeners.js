import game from '../components/game/game';
import DOM from './DOM';
import updateDOM from './updateDOM';
import placementDOM from './placementDOM';
const startGame = (body) => {
  const btnStart = body.querySelector('#body-main #controllers #button-start');
  btnStart.addEventListener('click', startPlacement);
};

const startPlacementRemove = (btn) =>
  btn.removeEventListener('click', startPlacement);

const btnPlayGame = (btn) => btn.addEventListener('click', startGameLoop);

const playGameRemove = (btn) => btn.removeEventListener('click', startGameLoop);

const startPlacement = (event) => {
  updateDOM().setMessage('Place your ships');
  updateDOM().btnTextContent(event.target, 'Play');
  startPlacementRemove(event.target);
  btnPlayGame(event.target);
};

const startGameLoop = (event) => {
  // confirm the placement of player ships.
  // place randomly cpu
  // playGAme new game
  // How to pass the game right object with placed ships? If it is necessary.
  playGameRemove(event.target);
  updateDOM().btnTextContent(event.target, 'Quit');
  quitGame(event.target);
  const newGame = game.init();
  const ships = game.placement(newGame);
  const main = document.querySelector('#body-main');
  placementDOM().renderShipSummary(main, ships);
  placementDOM().renderShipsOnBoard(newGame);
  game.playGame(newGame);
};

const quitGame = (btn) => {
  btn.addEventListener('click', quitGameLoop);
};

const quitGameLoop = (event) => {
  // Separa placement da init
  const body = document.querySelector('#hook');
  const newGameInit = game.init();

  removeQuitGame(event.target);
  updateDOM().btnTextContent(event.target, 'Start');
  const main = body.querySelector('#body-main');

  DOM().removeGameContent(main);
  placementDOM().removeShipsSummary(main);

  DOM().renderGameContent(main, newGameInit);
  startGame(body);
  updateDOM().setMessage('Welcome! Press start to play');
};

const removeQuitGame = (btn) => {
  btn.removeEventListener('click', quitGameLoop);
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

/**
 * Export event listeners
 * @param {HTMLElement} body
 * @returns
 */
const eventListeners = () => ({
  startBtn: (body) => startGame(body),
  playGameRemove: (btn) => startGameRemove(btn),
  quitBtn: (btn) => quitGame(btn),
  addClicks: (body) => addClicks(body)
});

export default eventListeners;

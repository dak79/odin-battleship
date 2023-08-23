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

const startPlacement = async (event) => {
  updateDOM().setMessage('Place your ships');
  updateDOM().setTextContent(event.target, 'Play');
  startPlacementRemove(event.target);
  btnPlayGame(event.target);
  const newGame = game.init();
  const ships = await game.placement(newGame);
  console.log(ships);
  console.log(newGame);
};

const startGameLoop = (event) => {
  // confirm the placement of player ships.
  // place randomly cpu
  // playGAme new game
  // How to pass the game right object with placed ships? If it is necessary.

  const body = document.querySelector('#hook');
  const name = body.querySelector('#body-main #player-one-name');
  const btn = name.querySelector('#btn-rotate');
  updateDOM().removeElement(btn);
  updateDOM().setTextContent(name, 'Player 1');
  playGameRemove(event.target);
  updateDOM().setTextContent(event.target, 'Quit');
  quitGame(event.target);
  // game.playGame(newGame);
};

const quitGame = (btn) => {
  btn.addEventListener('click', quitGameLoop);
};

const quitGameLoop = (event) => {
  // Separa placement da init
  const body = document.querySelector('#hook');
  const newGameInit = game.init();

  removeQuitGame(event.target);
  updateDOM().setTextContent(event.target, 'Start');
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

const btnRotate = (btn, ship) =>
  btn.addEventListener('click', rotateShip.bind(null, ship));

const rotateShip = (ship) =>
  ship.body.init.isHorizontal
    ? ship.body.setDirection(false)
    : ship.body.setDirection(true);

/**
 * Add click listener to cpu board.
 * @param {HTMLElement} table
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
  playGameRemove: (btn) => playGameRemove(btn),
  quitBtn: (btn) => quitGame(btn),
  btnRotate: (btn, ship) => btnRotate(btn, ship),
  addClicks: (body, isPlayerBoard) => addClicks(body, isPlayerBoard)
});

export default eventListeners;

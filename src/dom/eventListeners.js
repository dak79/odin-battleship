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
  //
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

const setActiveShip = (ship) => {
  activeShip = ship;
};

const getActiveShip = () => activeShip;

const clearActiveShip = () => {
  activeShip = null;
};

const mouseHandler = (event) => {
  event.stopPropagation();
  const ship = getActiveShip();
  const shipDir = ship.body.init.isHorizontal;
  const targetX = parseInt(event.target.dataset.x);
  const targetY = parseInt(event.target.dataset.y);

  if (document.querySelector(`[data-x='${targetX}'][data-y='${targetY}']`)) {
    const range = Array.from({ length: ship.body.init.len }, (_, i) => i);
    range.forEach((cell) => {
      const cellX = shipDir ? targetX : targetX + cell;
      const cellY = shipDir ? targetY + cell : targetY;
      const td = document.querySelector(
        `[data-x='${cellX}'][data-y='${cellY}']`
      );
      if (td) {
        if (
          event.type === 'mouseover' &&
          !td.classList.contains('ship-placed')
        ) {
          td.classList.add('ship-shadow');
        }

        if (event.type === 'mouseleave') {
          td.classList.remove('ship-shadow');
        }
      }
    });
  }
};

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
  addClicks: (body, isPlayerBoard) => addClicks(body, isPlayerBoard),
  setActiveShip: (ship) => setActiveShip(ship),
  clearActiveShip: () => clearActiveShip(),
  mouseListener: (table, isAdding) => mouseListener(table, isAdding)
});

export default eventListeners;

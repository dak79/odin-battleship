import { renderShipsRivalContainer } from './renders/renderShips';
import eventListeners from './eventListeners';
import createAndRenderElement from './domUtil';

const renderBtnRotate = (parent) =>
  createAndRenderElement(
    'button',
    { id: 'btn-rotate', class: 'buttons' },
    'Rotate',
    parent
  );

const clearTxtContent = (element) => (element.textContent = '');

/**
 * Render the ship on board
 * @param {Array[]} board
 */
const renderPlayerShips = (board, table) => {
  const rows = Array.from(table.rows);
  rows.forEach((row, rowIndex) => {
    const cells = Array.from(row.cells);
    cells.forEach((td, colIndex) => {
      const cell = board[rowIndex][colIndex];
      if (cell !== null) {
        td.classList.add('ship-placed');
      }
    });
  });
};

/**
 * Render container for player ship icon.
 * @param {Node} section
 * @returns
 */
const renderShipsPlayerContainer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'ships-player', class: 'ships-container player-ships' },
    null,
    section
  );

/**
 * Render icon for ships
 * @param {Node} section
 * @param {Object} ships
 */
const renderShipIcons = (section, ship) => {
  if (!section.querySelector(`#${ship.body.init.type}`)) {
    createAndRenderElement('div', { id: ship.body.init.type }, null, section);
  }

  const div = section.querySelector(`#${ship.body.init.type}`);

  createAndRenderElement(
    'img',
    { src: ship.icon, alt: `${ship.body.init.type} icon`, class: 'icons-size' },
    null,
    div
  );
};

const renderShipSummary = (parent, ships) => {
  // const shipsContainerPlayer = renderShipsPlayerContainer(parent);
  // renderShipIcons(shipsContainerPlayer, ships.playerOneShips);

  const shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, ships.playerTwoShips);
};

const removeShipsSummary = (parent) => {
  const elements = [
    parent.querySelector('#ships-player')
    //parent.querySelector('#ships-rival')
  ];

  elements.forEach((element) => element.remove());
};

/**
 * Render placement on boards
 * @param {Object} attacker
 * @param {Object} opponent
 * @param {Boolean} isPlayerOne
 */
const renderPlacement = async (ships, gameboard) => {
  const events = eventListeners();
  const body = document.querySelector('#hook');
  const iconContainer = body.querySelector('#body-main #ships-player');
  const tablePlayer = body.querySelector(
    '#body-main #board-player #board-player-table'
  );

  const name = body.querySelector('#body-main #player-one-name');

  clearTxtContent(name);
  renderBtnRotate(name);
  const btnRotate = name.querySelector('#btn-rotate');
  const arrShips = Object.values(ships);
  for (const shipType of arrShips) {
    for (const ship of shipType) {
      let validPlacement = false;
      events.btnRotate(btnRotate, ship);
      while (!validPlacement) {
        const coord = await events.addClicks(body, true);
        const [row, col] = coord;
        validPlacement = gameboard.placeShip(
          gameboard.board,
          ship.body,
          parseInt(row),
          parseInt(col),
          ship.body.init.isHorizontal
        );
      }
      renderPlayerShips(gameboard.board, tablePlayer);
      renderShipIcons(iconContainer, ship);
    }
  }
};

/*
 * PL1:
 *   - Add ship shadow on hover
 *   - Shadow veritcal and horizonatal
 *   - Add move with drag and drop
 *   - Fix the message for player 1
 * PL2:
 *   - Random placement
 *   - Render icons container
 *   - Render icons
 * Pass to game.loop:
 *  -  Check button quit
 */

const placementDOM = () => ({
  renderShipSummary: (parent, ships) => renderShipSummary(parent, ships),
  renderShipsPlayerContainer: (main) => renderShipsPlayerContainer(main),
  renderPlacement: async (ships, gameboard) =>
    renderPlacement(ships, gameboard),
  clearTxtContent: (element) => clearTxtContent(element),
  renderBtnRotate: (parent) => renderBtnRotate(parent),
  //renderShipsOnBoard: (board) => renderShipsOnBoard(board),
  removeShipsSummary: (parent) => removeShipsSummary(parent)
});

export default placementDOM;

import eventListeners from './eventListeners';
import createAndRenderElement from './domUtil';

/**
 * Render button rotate on DOM
 * @param {Node} parent
 * @returns
 */
const renderBtnRotate = (parent) =>
  createAndRenderElement(
    'button',
    { id: 'btn-rotate', class: 'buttons' },
    'Rotate',
    parent
  );

/**
 * Change text comment of an element.
 * @param {HTMLElement} element
 * @returns
 */
const clearTxtContent = (element) => (element.textContent = '');

/**
 * Render the ship on board
 * @param {Array[]} board
 * @param {Node} table
 */
const renderPlayerShips = (board, table) => {
  const rows = Array.from(table.rows);
  rows.forEach((row, rowIndex) => {
    const cells = Array.from(row.cells);
    cells.forEach((td, colIndex) => {
      const cell = board[rowIndex][colIndex];
      if (cell !== null) {
        if (td.classList.contains('ship-shadow')) {
          td.classList.remove('ship-shadow');
        }
        td.classList.add('ship-placed');
      }
    });
  });
};

/**
 * Render container for cpu ship icon.
 * @param {Node} section
 * @returns
 */
const renderShipsRivalContainer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'ships-rival', class: 'ships-container rival-ships' },
    null,
    section
  );

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

/**
 * Render icon for cpu ships
 * @param {Node} section
 * @param {Object} ships
 */
const renderShipIconsRival = (section, ships) => {
  for (const ship in ships) {
    ships[ship].forEach((ship) => {
      renderShipIcons(section, ship);
    });
  }
};

/**
 * Render container and icons for cpu
 * @param {Node} main
 * @param {Object} ships
 */
const renderShipsSummaryRival = (main, ships) => {
  const shipsContainerRival = renderShipsRivalContainer(main);
  renderShipIconsRival(shipsContainerRival, ships.playerTwoShips);
};

/**
 * Remove icons and icon containers
 * @param {Node} parent
 */
const removeShipsSummary = (parent) => {
  const elements = [
    parent.querySelector('#ships-player'),
    parent.querySelector('#ships-rival')
  ];

  elements.forEach((element) => {
    if (element) {
      element.remove();
    }
  });
};

/**
 * Render placement.
 * @param {Object} ships
 * @param {Object} gameboard
 * @returns
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

  events.mouseListener(tablePlayer, true);
  for (const shipType of arrShips) {
    for (const ship of shipType) {
      let validPlacement = false;
      events.btnRotate(btnRotate, ship);
      events.setActiveShip(ship);
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

      events.clearActiveShip();
    }
  }

  events.mouseListener(tablePlayer, false);
  return gameboard;
};

/**
 * Export placementDOM methods
 */
const placementDOM = () => ({
  renderShipsSummaryRival: (main, ships) =>
    renderShipsSummaryRival(main, ships),
  renderShipsPlayerContainer: (main) => renderShipsPlayerContainer(main),
  renderPlacement: async (ships, gameboard) =>
    renderPlacement(ships, gameboard),
  clearTxtContent: (element) => clearTxtContent(element),
  renderBtnRotate: (parent) => renderBtnRotate(parent),
  removeShipsSummary: (parent) => removeShipsSummary(parent)
});

export default placementDOM;

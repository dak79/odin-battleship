import createAndRenderElement from '../domUtil';

/**
 * Render board container for player
 * @param {Node} section
 * @returns
 */
const renderBoardPlayer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'board-player', class: 'player-board' },
    null,
    section
  );

/**
 * Render the board container for rival
 * @param {Node} section
 * @returns
 */
const renderBoardRival = (section) =>
  createAndRenderElement(
    'div',
    { id: 'board-rival', class: 'rival-board' },
    null,
    section
  );

/**
 * Render board
 * @param {Node} parent
 * @param {Array[]} board
 */
const renderBoard = (parent, board) => {
  const table = createAndRenderElement(
    'table',
    { id: `${parent.id}-table`, class: 'boards' },
    null,
    parent
  );
  const tbody = createAndRenderElement(
    'tbody',
    { id: `${parent.id}-tbody` },
    null,
    table
  );
  board.forEach((row, rowIndex) => {
    const tr = createAndRenderElement(
      'tr',
      { class: 'board-row' },
      null,
      tbody
    );
    row.forEach((_, colIndex) => {
      createAndRenderElement(
        'td',
        {
          class: 'cell-size cell-border',
          'data-x': rowIndex,
          'data-y': colIndex
        },
        null,
        tr
      );
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
 * Render icon for ships
 * @param {Node} section
 * @param {Object} ships
 */
const renderShipIcons = (section, ships) => {
  Object.entries(ships).forEach(([ship, descriptions]) => {
    const div = createAndRenderElement('div', { id: ship }, null, section);
    descriptions.forEach((description) => {
      createAndRenderElement(
        'img',
        { src: description.icon, alt: `${ship}-icon`, class: 'icons-size' },
        null,
        div
      );
    });
  });
};

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
 * Render game contents
 * @param {Node} parent
 * @param {*} game
 */
const renderGameContent = (parent, game, ships) => {
  const boardPlayer = renderBoardPlayer(parent);
  renderBoard(boardPlayer, game.playerOneGameboard.board);

  const boardRival = renderBoardRival(parent);
  renderBoard(boardRival, game.playerTwoGameboard.board);

  const shipsContainerPlayer = renderShipsPlayerContainer(parent);
  renderShipIcons(shipsContainerPlayer, ships.playerOneShips);

  const tablePlayer = document.querySelector('#board-player-table');
  renderPlayerShips(game.playerOneGameboard.board, tablePlayer);

  const shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, ships.playerTwoShips);
};

const removeGameContent = (parent) => {
  const elements = [
    parent.querySelector('#board-player'),
    parent.querySelector('#board-rival'),
    parent.querySelector('#ships-player'),
    parent.querySelector('#ships-rival')
  ];

  elements.forEach((element) => element.remove());
};

export { renderGameContent, removeGameContent };

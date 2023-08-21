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
 * Render game contents
 * @param {Node} parent
 * @param {*} game
 */
const renderGameContent = (parent, game) => {
  const boardPlayer = renderBoardPlayer(parent);
  renderBoard(boardPlayer, game.playerOneGameboard.board);

  const boardRival = renderBoardRival(parent);
  renderBoard(boardRival, game.playerTwoGameboard.board);
};

const removeGameContent = (parent) => {
  const elements = [
    parent.querySelector('#board-player'),
    parent.querySelector('#board-rival')
  ];

  elements.forEach((element) => element.remove());
};

export { renderGameContent, removeGameContent };

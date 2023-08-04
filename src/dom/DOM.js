import iconLN from '../assets/icons/linkedin.svg';
import iconGH from '../assets/icons/github.svg';

/**
 * Create an HTML element.
 * @param {String} type - Element tag
 * @param {Object} attributes - Element attributes
 * @param {String|null} textContent - Element text content
 * @returns {HTMLElement}
 */
const createElement = (type, attributes = {}, textContent = null) => {
  const element = document.createElement(type);
  Object.entries(attributes).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
  if (textContent) element.textContent = textContent;

  return element;
};

/**
 * Append element to DOM.
 * @param {HTMLElement} parent - parent element
 * @param {HTMLElement} element - element to append
 */
const renderElement = (parent, element) => {
  parent.appendChild(element);
};

const createAndRenderElement = (
  type,
  attributes = {},
  textContent = null,
  parent
) => {
  const element = createElement(type, attributes, textContent);
  renderElement(parent, element);

  return element;
};

const createStructureBody = (hook) => ({
  header: createAndRenderElement(
    'header',
    {
      id: 'body-header',
      class: 'body-header'
    },
    null,
    hook
  ),
  main: createAndRenderElement(
    'main',
    {
      id: 'body-main',
      class: 'body-main'
    },
    null,
    hook
  ),
  footer: createAndRenderElement(
    'footer',
    {
      id: 'body-footer',
      class: 'body-footer'
    },
    null,
    hook
  )
});

const renderTitle = (header) => {
  createAndRenderElement('h1', { class: 'header-title' }, 'Battleship', header);
};

const renderControllers = (section) =>
  createAndRenderElement(
    'div',
    { id: 'controllers', class: 'instructions' },
    null,
    section
  );

const renderMessage = (section) =>
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'messages message-field' },
    'Place your ships',
    section
  );

const renderButton = (section) =>
  createAndRenderElement(
    'button',
    { type: 'button', id: 'button-start', class: 'buttons' },
    'Start',
    section
  );

const renderPlayerName = (section, name) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-one-name',
      class: 'players-name player-one-name'
    },
    name,
    section
  );

const renderCpuName = (section, name) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-two-name',
      class: 'players-name player-two-name'
    },
    name,
    section
  );

const renderBoardPlayer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'board-player', class: 'player-board' },
    null,
    section
  );

const renderBoardRival = (section) =>
  createAndRenderElement(
    'div',
    { id: 'board-rival', class: 'rival-board' },
    null,
    section
  );

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

const renderPlayerShips = (board) => {
  const table = document.querySelector('#board-player-table');
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

const renderShipsPlayerContainer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'ships-player', class: 'ships-container player-ships' },
    null,
    section
  );

const renderShipsRivalContainer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'ships-rival', class: 'ships-container rival-ships' },
    null,
    section
  );

const renderShipIcons = (section, ships) => {
  Object.entries(ships).forEach(([ship, descriptions]) => {
    const div = createAndRenderElement('div', { id: ship }, null, section);
    descriptions.forEach((description, index) => {
      const span = createAndRenderElement(
        'span',
        { id: `${ship}-${index}`, class: 'container' },
        null,
        div
      );

      createAndRenderElement(
        'img',
        { src: description.icon, alt: `${ship}-icon`, class: 'icons-size' },
        null,
        span
      );
    });
  });
};

const createFooterStructure = (footer) => ({
  credits: createAndRenderElement(
    'div',
    { class: 'credits' },
    'Daniele Campari - 2023',
    footer
  ),
  icons: createAndRenderElement('div', { class: 'footer-icons' }, null, footer)
});

const createLinks = (div) => ({
  linkedin: createAndRenderElement(
    'a',
    { href: 'https://www.linkedin.com/in/daniele-campari-33757593/' },
    null,
    div
  ),
  github: createAndRenderElement(
    'a',
    { href: 'https://github.com/dak79/' },
    null,
    div
  )
});

const renderLnIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconLN, alt: 'LinkedIn link', class: 'icons-size' },
    null,
    link
  );

const renderGhIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconGH, alt: 'GitHub link', class: 'icons-size' },
    null,
    link
  );

const renderHeaderContent = (parent) => {
  renderTitle(parent);
};

const renderControllersContent = (parent, game) => {
  const controllers = renderControllers(parent);
  renderMessage(controllers);
  renderButton(controllers);

  renderPlayerName(parent, game.playerOne.getPlayerName());
  renderCpuName(parent, game.playerTwo.getPlayerName());
};

const renderGameContent = (parent, game) => {
  const boardPlayer = renderBoardPlayer(parent);
  renderBoard(boardPlayer, game.playerOneGameboard.board);

  const boardRival = renderBoardRival(parent);
  renderBoard(boardRival, game.playerTwoGameboard.board);

  const shipsContainerPlayer = renderShipsPlayerContainer(parent);
  renderShipIcons(shipsContainerPlayer, game.shipsPlayer);
  renderPlayerShips(game.playerOneGameboard.board);

  const shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, game.shipsPlayer);
};

const renderFooterContent = (parent) => {
  const footer = createFooterStructure(parent);
  const links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

const renderPage = (hook, game) => {
  const body = createStructureBody(hook);

  renderHeaderContent(body.header);

  renderControllersContent(body.main, game);
  renderGameContent(body.main, game);

  renderFooterContent(body.footer);

  return body;
};

const DOM = (hook, game) => ({
  render: () => renderPage(hook, game)
});

export default DOM;

/* TODO:
 * - Code Review
 * - Functional style Review
 * - Tests?
 * - Comments
 * - check gameboard, gameboard test, ship and ship test;
 */

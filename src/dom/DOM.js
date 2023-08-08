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

/**
 * Create and append element.
 * @param {String} type - Element tag
 * @param {Object} attributes - Element attributes
 * @param {String|null} textContent - Element text content
 * @param {Node} parent - Node to attach element.
 * @returns HTML Element.
 */
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

/**
 * Create the structure of body element.
 * @param {Node} hook
 * @returns
 */
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

/**
 * Render the page title
 * @param {Node} header
 */
const renderTitle = (header) => {
  createAndRenderElement('h1', { class: 'header-title' }, 'Battleship', header);
};

/**
 * Render the controllers section
 * @param {Node} section
 * @returns
 */
const renderControllers = (section) =>
  createAndRenderElement(
    'div',
    { id: 'controllers', class: 'instructions' },
    null,
    section
  );

/**
 * Render the message section.
 * @param {Node} section
 * @returns
 */
const renderMessage = (section) =>
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'messages message-field' },
    'Place your ships',
    section
  );

const setMessage = (message) => {
  const messageField = document.querySelector('#message-field');
  messageField.textContent = message;
};

/**
 * Render start button.
 * @param {Node} section
 * @returns
 */
const renderButton = (section) =>
  createAndRenderElement(
    'button',
    { type: 'button', id: 'button-start', class: 'buttons' },
    'Start',
    section
  );

/**
 * Render player name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
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

/**
 * Render Cpu name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
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
 * Render the ship on board
 * @param {Array[]} board
 */
const renderPlayerShips = (board, table) => {
  // const table = document.querySelector('#board-player-table');
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

const renderShot = (table, x, y, isHit) => {
  const rows = Array.from(table.rows);
  rows.forEach((row) => {
    const td = Array.from(row.cells).find(
      (td) => td.dataset.x === x && td.dataset.y === y
    );

    if (td) {
      if (!td.classList.contains('.ship-hit') && isHit === true) {
        td.classList.add('ship-hit');
      }

      if (!td.classList.contains('missed-hit') && isHit === false) {
        td.classList.add('missed-hit');
      }
    }
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

const renderSunkedShip = (container) => {
  const icons = Array.from(container.children);
  const icon = icons.find((icon) => !icon.classList.contains('ship-sunked'));
  if (icon) {
    icon.classList.add('ship-sunked');
  }
};

/**
 * Render container for footer elments
 * @param {Node} footer
 * @returns
 */
const createFooterStructure = (footer) => ({
  credits: createAndRenderElement(
    'div',
    { class: 'credits' },
    'Daniele Campari - 2023',
    footer
  ),
  icons: createAndRenderElement('div', { class: 'footer-icons' }, null, footer)
});

/**
 * Create links for GitHub and LinkedIn
 * @param {Node} div
 * @returns
 */
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

/**
 * Render Linkedin Icon
 * @param {Node} link
 * @returns
 */
const renderLnIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconLN, alt: 'LinkedIn link', class: 'icons-size' },
    null,
    link
  );

/**
 * Render GitHub icon
 * @param {Node} link
 * @returns
 */
const renderGhIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconGH, alt: 'GitHub link', class: 'icons-size' },
    null,
    link
  );

/**
 * Render Header Content
 * @param {Node} parent
 */
const renderHeaderContent = (parent) => {
  renderTitle(parent);
};

/**
 * Render controllers content
 * @param {Node} parent
 * @param {*} game
 */
const renderControllersContent = (parent, game) => {
  const controllers = renderControllers(parent);
  renderMessage(controllers);
  renderButton(controllers);

  renderPlayerName(parent, game.playerOne.getPlayerName());
  renderCpuName(parent, game.playerTwo.getPlayerName());
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

  const shipsContainerPlayer = renderShipsPlayerContainer(parent);
  renderShipIcons(shipsContainerPlayer, game.shipsPlayer);

  const tablePlayer = document.querySelector('#board-player-table');
  renderPlayerShips(game.playerOneGameboard.board, tablePlayer);
  const tableRival = document.querySelector('#board-rival-table');
  renderPlayerShips(game.playerTwoGameboard.board, tableRival);

  const shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, game.shipsPlayer);
};

/**
 * Render footer content
 * @param {Node} parent
 */
const renderFooterContent = (parent) => {
  const footer = createFooterStructure(parent);
  const links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

/**
 * Render the web page
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
const renderPage = (hook, game) => {
  const body = createStructureBody(hook);

  renderHeaderContent(body.header);

  renderControllersContent(body.main, game);
  renderGameContent(body.main, game);

  renderFooterContent(body.footer);

  return body;
};

/**
 * Export DOM object
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
const DOM = () => ({
  render: (hook, game) => renderPage(hook, game),
  setMessage: (message) => setMessage(message),
  renderShot: (table, row, col, isHit) => renderShot(table, row, col, isHit),
  renderSunkedShip: (ship) => renderSunkedShip(ship)
});

export default DOM;

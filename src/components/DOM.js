import game from './game';
import iconLN from '../assets/icons/linkedin.svg';
import iconGH from '../assets/icons/github.svg';

const hook = document.querySelector('#hook');

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
  parent = hook
) => {
  const element = createElement(type, attributes, textContent);
  renderElement(parent, element);

  return element;
};

const createStructureBody = () => ({
  header: createAndRenderElement('header', {
    id: 'body-header',
    class: 'body-header'
  }),
  main: createAndRenderElement('main', {
    id: 'body-main',
    class: 'body-main'
  }),
  footer: createAndRenderElement('footer', {
    id: 'body-footer',
    class: 'body-footer'
  })
});

const renderTitle = (header) => {
  createAndRenderElement('h1', { class: 'header-title' }, 'Battleship', header);
};

const renderMessage = (section) =>
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'messages' },
    'Place your ships',
    section
  );

const renderPlayerName = (section) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-one-name',
      class: 'players-name player-one-name'
    },
    game.initialState.playerOne.getPlayerName(),
    section
  );

const renderCpuName = (section) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-two-name',
      class: 'players-name player-two-name'
    },
    game.initialState.playerTwo.getPlayerName(),
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

const renderShips = (section) => {
  Object.entries(game.ships).forEach(([ship, descriptions]) => {
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

const renderPage = () => {
  const body = createStructureBody();
  renderTitle(body.header);
  renderMessage(body.main);
  renderPlayerName(body.main);
  renderCpuName(body.main);
  const boardPlayer = renderBoardPlayer(body.main);
  renderBoard(boardPlayer, game.initialState.playerOneGameboard.board);
  const boardRival = renderBoardRival(body.main);
  renderBoard(boardRival, game.initialState.playerTwoGameboard.board);
  const shipsPlayer = renderShipsPlayerContainer(body.main);
  renderShips(shipsPlayer);
  const shipsRival = renderShipsRivalContainer(body.main);
  renderShips(shipsRival);
  const footer = createFooterStructure(body.footer);
  const links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

const DOM = () => {
  renderPage();
};

export default DOM;

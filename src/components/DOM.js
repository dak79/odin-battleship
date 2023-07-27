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
    class: 'center header-colors'
  }),
  main: createAndRenderElement('main', {
    id: 'body-main',
    class: 'fonts-normal grid-3rows'
  }),
  footer: createAndRenderElement('footer', {
    id: 'body-footer',
    class: 'fonts-small center padding1vw footer-colors'
  })
});

const renderTitle = (header) => {
  createAndRenderElement(
    'h1',
    { class: 'fonts-bigger padding1vw' },
    'Battleship',
    header
  );
};

const createStructureMain = (main) => ({
  messages: createAndRenderElement('section', { id: 'messages' }, null, main),
  names: createAndRenderElement(
    'section',
    { id: 'players-names', class: 'grid-2col-cent' },
    null,
    main
  ),
  boards: createAndRenderElement(
    'section',
    { id: 'players-boards', class: 'grid-2col-cent' },
    null,
    main
  )
});

const renderMessage = (section) =>
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'center padding1vw message-colors' },
    'Place your ships',
    section
  );

const renderPlayerName = (section) =>
  createAndRenderElement(
    'div',
    { id: 'player-one-name', class: 'padding1vw player-colors' },
    game.initialState.playerOne.getPlayerName(),
    section
  );

const renderCpuName = (section) =>
  createAndRenderElement(
    'div',
    { id: 'player-two-name', class: 'padding1vw player-colors' },
    game.initialState.playerTwo.getPlayerName(),
    section
  );

const renderBoardPlayer = (section) =>
  createAndRenderElement('div', { id: 'board-player' }, null, section);

const renderBoardRival = (section) =>
  createAndRenderElement('div', { id: 'board-rival' }, null, section);

const renderBoard = (parent, board) => {
  const table = createAndRenderElement(
    'table',
    { id: `${parent.id}-table`, class: 'battlefield-border' },
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

const createFooterStructure = (footer) => ({
  credits: createAndRenderElement(
    'div',
    { class: 'padding1vw' },
    'Daniele Campari - 2023',
    footer
  ),
  icons: createAndRenderElement(
    'div',
    { class: 'footer-icons padding1vw' },
    null,
    footer
  )
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
  const main = createStructureMain(body.main);
  renderMessage(main.messages);
  renderPlayerName(main.names);
  renderCpuName(main.names);
  const boardPlayer = renderBoardPlayer(main.boards);
  renderBoard(boardPlayer, game.initialState.playerOneGameboard.board);
  const boardRival = renderBoardRival(main.boards);
  renderBoard(boardRival, game.initialState.playerTwoGameboard.board);
  const footer = createFooterStructure(body.footer);
  const links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

const DOM = () => {
  renderPage();
};

export default DOM;

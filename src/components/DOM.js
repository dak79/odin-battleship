import game from './game';
import pipe from '../util/pipe';
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
) => pipe(
    () => createElement(type, attributes, textContent),
    (element) => renderElement(parent, element)
  )(type, attributes, textContent, parent)

const createStructure = () => {
  const structure = {
    header: createAndRenderElement('header', { id: 'body-header' }),
    main: createAndRenderElement('main', { id: 'body-main' }),
    footer: createAndRenderElement('footer', { id: 'body-footer' })
  };

  return structure;
};

const renderBodyHeader = () => {
  const header = document.querySelector('#body-header');
  createAndRenderElement('h1', { class: 'page-title' }, 'Battleship', header);
};

const renderBodyMain = () => {
  const main = document.querySelector('#body-main');

  const sections = ['messages', 'names', 'boards'];
  sections.forEach((section) =>
    createAndRenderElement('section', { id: `body-${section}` }, null, main)
  );

  const messages = document.querySelector('#body-messages');
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'messages' },
    'Place your ships',
    messages
  );

  const names = document.querySelector('#body-names');
  const playerDefaultNames = [
    {
      id: 'player-one-name',
      name: game.initialState.playerOne.getPlayerName()
    },
    { id: 'player-two-name', name: game.initialState.playerTwo.getPlayerName() }
  ];
  playerDefaultNames.forEach((name) =>
    createAndRenderElement(
      'div',
      { id: name.id, class: 'player-names' },
      name.name,
      names
    )
  );

  const boards = document.querySelector('#body-boards');
  const boardNames = ['board-player', 'board-rival'];
  boardNames.forEach((name) =>
    createAndRenderElement('div', { id: name }, null, boards)
  );

  const boardPlayer = document.querySelector('#board-player');
  const playerOneBoard = game.initialState.playerOneGameboard.board;
  renderBoard(boardPlayer, playerOneBoard);

  const rival = document.querySelector('#board-rival');
  const playerTwoBoard = game.initialState.playerTwoGameboard.board;
  renderBoard(rival, playerTwoBoard);
};

 /**
  * Render the board.
  * @param {HTMLElement} hook 
  * @param {Array[]} board 
  */
const renderBoard = (hook, board) => {
  const table = createAndRenderElement(
    'table',
    { id: `${hook.id}-table` },
    null,
    hook
  );
  const tbody = createAndRenderElement(
    'tbody',
    { id: `${hook.id}-tbody` },
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
    row.forEach((cell, colIndex) => {
      createAndRenderElement(
        'td',
        { class: 'board-cell', 'data-x': rowIndex, 'data-y': colIndex },
        null,
        tr
      );
    });
  });
};

const renderBodyFooter = () => {
  const footer = document.querySelector('#body-footer');
  console.log(footer);
  createAndRenderElement(
    'div',
    { class: 'footer-info' },
    '2023 - Daniele Campari',
    footer
  );

  const icons = createAndRenderElement(
    'div',
    { class: 'footer-icons' },
    null,
    footer
  );

  const linkLinkedIn = createAndRenderElement(
    'a',
    { href: 'https://www.linkedin.com/in/daniele-campari-33757593/' },
    null,
    icons
  );

  createAndRenderElement(
    'img',
    { src: iconLN, alt: 'LinkedIn link' },
    null,
    linkLinkedIn
  );

  const linkGitHub = createAndRenderElement(
    'a',
    { href: 'https://github.com/dak79/' },
    null,
    icons
  );
  createAndRenderElement(
    'img',
    { src: iconGH, alt: 'GitHub link' },
    null,
    linkGitHub
  );
};

const renderInitialState = () => {
  const structure = createStructure();
  renderBodyHeader(structure.header);
  renderBodyMain(structure.main);
  renderBodyFooter(structure.footer);
};

const DOM = () => {
  renderInitialState();
};

export default DOM;

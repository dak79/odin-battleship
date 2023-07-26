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

const createStructure = () => {
  const structure = {
    header: createAndRenderElement('header', { id: 'body-header', class: 'center' }),
    main: createAndRenderElement('main', { id: 'body-main' }),
    footer: createAndRenderElement('footer', { id: 'body-footer', class: 'center' })
  };

  return structure;
};

const renderBodyHeader = () => {
  const header = document.querySelector('#body-header');
  createAndRenderElement('h1', { class: 'fonts-bigger padding1vw' }, 'Battleship', header);
};

const renderBodyMain = () => {
  const main = document.querySelector('#body-main');

  const messages = createAndRenderElement('section', {id: 'messages'}, null, main);
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'fonts-normal center padding1vw' },
    'Place your ships',
    messages
  );

  const names = createAndRenderElement('section', {id: 'players-names', class: 'grid-2col-cent'}, null, main);
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
      { id: name.id, class: 'fonts-normal padding1vw' },
      name.name,
      names
    )
  );

  const boards = createAndRenderElement('section', {id: 'players-boards', class: 'grid-2col-cent'}, null, main);

  const boardPlayer = createAndRenderElement('div', {id: 'board-player'}, null, boards);
  const playerOneBoard = game.initialState.playerOneGameboard.board;
  renderBoard(boardPlayer, playerOneBoard);

  const boardRival = createAndRenderElement('div', {id: 'board-rival'}, null, boards);
  const playerTwoBoard = game.initialState.playerTwoGameboard.board;
  renderBoard(boardRival, playerTwoBoard);
};

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
        { class: 'cell-size cell-border', 'data-x': rowIndex, 'data-y': colIndex },
        null,
        tr
      );
    });
  });
};

const renderBodyFooter = () => {
  const footer = document.querySelector('#body-footer');
  const wrapper = createAndRenderElement('div', {class: 'footer-wrapper fonts-small space-evenly padding1vw'}, null, footer);
  console.log(wrapper)
  createAndRenderElement(
    'div',
    { class: 'footer-info' },
    '2023 - Daniele Campari',
    wrapper
  );

  const icons = createAndRenderElement(
    'div',
    { class: 'footer-icons' },
    null,
    wrapper
  );
  
  const linkLinkedIn = createAndRenderElement(
    'a',
    { href: 'https://www.linkedin.com/in/daniele-campari-33757593/' },
    null,
    icons
  );

  createAndRenderElement(
    'img',
    { src: iconLN, alt: 'LinkedIn link', class: 'icons-size' },
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
    { src: iconGH, alt: 'GitHub link', class: 'icons-size' },
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

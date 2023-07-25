import game from './game';

const hook = document.querySelector('#hook');

const createElement = (type, attributes = {}, textContent = null) => {
  const element = document.createElement(type);
  Object.entries(attributes).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
  if (textContent) element.textContent = textContent;

  return element;
};

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

  const links = [
    {
      name: 'LinkedIn',
      attr: 'href',
      link: 'https://www.linkedin.com/in/daniele-campari-33757593/'
    },
    { name: 'GitHub', attr: 'href', link: 'https://github.com/dak79/' }
  ];

  links.forEach((link) =>
    createAndRenderElement('a', { [link.attr]: link.link }, link.name, icons)
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

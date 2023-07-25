import game from './game';

const hook = document.querySelector('#hook');

const createAndAppendElement = (
  parent,
  elementType,
  elementId = null,
  elementClasses = null,
  elementAttributes = null,
  textContent = null
) => {
  const element = document.createElement(elementType);
  if (elementId) element.setAttribute('id', elementId);
  if (elementClasses) element.classList.add(...elementClasses);
  if (elementAttributes)
    elementAttributes.forEach((attr) =>
      element.setAttribute(attr.name, attr.value)
    );
  if (textContent) element.textContent = textContent;
  parent.appendChild(element);

  return element;
};

const renderBodyStructure = () => {
  const elements = ['header', 'main', 'footer'];
  elements.forEach((element) =>
    createAndAppendElement(hook, element, `body-${element}`)
  );
};

const renderBodyHeader = () => {
  const header = document.querySelector('#body-header');
  createAndAppendElement(
    header,
    'h1',
    null,
    ['page-title'],
    null,
    'Battleship'
  );
};

const renderBodyMain = () => {
  const main = document.querySelector('#body-main');
  const sections = ['messages', 'names', 'boards'];
  sections.forEach((section) =>
    createAndAppendElement(main, 'section', `body-${section}`)
  );

  const messages = document.querySelector('#body-messages');
  createAndAppendElement(
    messages,
    'div',
    'message-field',
    ['messages'],
    null,
    'Place your ships'
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
    createAndAppendElement(
      names,
      'div',
      name.id,
      ['player-names'],
      null,
      name.name
    )
  );

  const boards = document.querySelector('#body-boards');
  const boardNames = ['board-player', 'board-rival'];
  boardNames.forEach((name) => createAndAppendElement(boards, 'div', name));
  const boardPlayer = document.querySelector('#board-player');
  const playerOneBoard = game.initialState.playerOneGameboard.board;
  renderBoard(boardPlayer, playerOneBoard);
  const rival = document.querySelector('#board-rival');
  const playerTwoBoard = game.initialState.playerTwoGameboard.board;
  renderBoard(rival, playerTwoBoard);
};

const renderBoard = (hook, board) => {
  const table = createAndAppendElement(hook, 'table', `${hook.id}-table`);
  const tbody = createAndAppendElement(table, 'tbody', `${hook.id}-tbody`);
  board.forEach((row, rowIndex) => {
    const tr = createAndAppendElement(tbody, 'tr', null, ['board-row']);
    row.forEach((cell, colIndex) => {
      createAndAppendElement(
        tr,
        'td',
        null,
        ['board-cell'],
        [
          { name: 'data-x', value: rowIndex },
          { name: 'data-y', value: colIndex }
        ]
      );
    });
  });
};

const renderBodyFooter = () => {
  const footer = document.querySelector('#body-footer');
  createAndAppendElement(
    footer,
    'div',
    null,
    ['footer-info'],
    null,
    '2023 - Daniele Campari'
  );

  const icons = createAndAppendElement(footer, 'div', null, ['footer-icons']);

  const links = [
    {
      name: 'LinkedIn',
      attr: 'href',
      link: 'https://www.linkedin.com/in/daniele-campari-33757593/'
    },
    { name: 'GitHub', attr: 'href', link: 'https://github.com/dak79/' }
  ];

  links.forEach((link) =>
    createAndAppendElement(
      icons,
      'a',
      null,
      null,
      [{ name: link.attr, value: link.link }],
      link.name
    )
  );
};

const renderInitialState = () => {
  renderBodyStructure();
  renderBodyHeader();
  renderBodyMain();
  renderBodyFooter();
};
const DOM = () => {
  renderInitialState();
};

export default DOM;

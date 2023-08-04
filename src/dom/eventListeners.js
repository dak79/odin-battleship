import eventHandlers from './eventHandlers';

const clicksRivalBoard = (table) => {
  const cells = table.querySelectorAll('td');

  cells.forEach((cell) => {
    cell.addEventListener('click', eventHandlers.parseAttackCoords);
  });

  return cells;
};

const removeClicksRivalBoard = (cells) => {
  cells.forEach((cell) =>
    cell.removeEventListener('click', eventHandlers.parseAttackCoords)
  );
};
const removeClickRivalBoard = (cell) =>
  cell.removeEventListener('click', eventHandlers.parseAttackCoords);

const initializeEventListeners = (body) => {
  const rivalTable = body.main.querySelector('#board-rival');
  const cellsRivalBoard = clicksRivalBoard(rivalTable);
};
const eventListeners = (body) => {
  return {
    events: () => initializeEventListeners(body)
  };
};
export default eventListeners;

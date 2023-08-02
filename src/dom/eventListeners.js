import eventHandlers from './eventHandlers';

const clicksRivalBoard = () => {
  const table = document.querySelector('#board-rival-table');
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

const eventListeners = () => {
  return {
    clicksRivalBoard,
    removeClicksRivalBoard,
    removeClickRivalBoard
  };
};
export default eventListeners;

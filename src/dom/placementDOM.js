import {
  renderShipsPlayerContainer,
  renderShipsRivalContainer,
  renderShipIcons,
  renderPlayerShips
} from './renders/renderShips';

const renderShipSummary = (parent, ships) => {
  const shipsContainerPlayer = renderShipsPlayerContainer(parent);
  renderShipIcons(shipsContainerPlayer, ships.playerOneShips);

  const shipsContainerRival = renderShipsRivalContainer(parent);
  renderShipIcons(shipsContainerRival, ships.playerTwoShips);
};

const renderShipsOnBoard = (board) => {
  const tablePlayer = document.querySelector('#board-player-table');
  renderPlayerShips(board.playerOneGameboard.board, tablePlayer);
};

const removeShipsSummary = (parent) => {
  const elements = [
    parent.querySelector('#ships-player'),
    parent.querySelector('#ships-rival')
  ];

  elements.forEach((element) => element.remove());
};

const placementDOM = () => ({
  renderShipSummary: (parent, ships) => renderShipSummary(parent, ships),
  renderShipsOnBoard: (board) => renderShipsOnBoard(board),
  removeShipsSummary: (parent) => removeShipsSummary(parent)
});

export default placementDOM;

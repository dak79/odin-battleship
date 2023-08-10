import game from './game';
import DOM from '../dom/DOM';
import eventListeners from '../dom/eventListeners';

const gameLoop = async () => {
  const updateDom = DOM();
  const events = eventListeners();
  const body = document.querySelector('#hook');
  let isWinner = false;
  while (!isWinner) {
    if (game.playerOne.getPlayerTurn()) {
      updateDom.setMessage('Attack enemy board');

      let parsedAttack = false;
      while (!parsedAttack) {
        await events.addClicks(body).then((res) => {
          const [row, col] = res.coord;
          parsedAttack = game.playerTwoGameboard.receiveAttack(
            game.playerTwoGameboard.board,
            row,
            col
          );

          if (parsedAttack) {
            res.remove();
            if (game.playerTwoGameboard.board[row][col]) {
              const ship = game.playerTwoGameboard.board[row][col];
              const table = body.querySelector(
                '#body-main #board-rival #board-rival-table'
              );
              updateDom.renderShot(table, row, col, true);

              if (ship.init.sunked) {
                const icons = body.querySelector(
                  `#body-main #ships-rival #${ship.init.type}`
                );
                updateDom.renderSunkedShip(icons);
              }
            } else {
              const table = body.querySelector(
                '#body-main #board-rival #board-rival-table'
              );
              updateDom.renderShot(table, row, col, false);
            }
            const tab = body.querySelector(
              '#body-main #board-rival #board-rival-table'
            );
            tab.replaceWith(tab.cloneNode(true));
          }
        });
      }
      game.playerOne.setPlayerTurn(false);
      game.playerTwo.setPlayerTurn(true);
      isWinner = game.playerTwoGameboard.allShipSunked();
    } else {
      updateDom.setMessage('Enemy attacks your ships');

      const playerOneBoard = document.querySelector('table');
      playerOneBoard.style.pointerEvents = 'none';

      let parsedAttack = false;
      while (!parsedAttack) {
        const [row, col] = game.playerTwo.generateRandomCoordinates();

        parsedAttack = game.playerOneGameboard.receiveAttack(
          game.playerOneGameboard.board,
          row,
          col
        );

        if (parsedAttack) {
          const timer = (ms) => new Promise((res) => setTimeout(res, ms));
          await timer(1000);
          if (game.playerOneGameboard.board[row][col]) {
            const ship = game.playerOneGameboard.board[row][col];
            const table = body.querySelector(
              '#body-main #board-player #board-player-table'
            );
            updateDom.renderShot(table, row, col, true);
            if (ship.init.sunked) {
              const icons = body.querySelector(
                `#body-main #ships-player #${ship.init.type}`
              );
              updateDom.renderSunkedShip(icons);
            }
          } else {
            const table = body.querySelector(
              '#body-main #board-player #board-player-table'
            );
            updateDom.renderShot(table, row, col, false);
          }
        }
      }

      // valid attack or repeat;
      game.playerOne.setPlayerTurn(true);
      game.playerTwo.setPlayerTurn(false);
      isWinner = game.playerOneGameboard.allShipSunked();
    }
  }
  console.log('Player win. Which?');
};

/* TODO:
 * ship test for ship type
 */
export default gameLoop;

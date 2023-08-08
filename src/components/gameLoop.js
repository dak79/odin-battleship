import game from './game';
import DOM from '../dom/DOM';
import eventListeners from '../dom/eventListeners';

/* TODO:
 * - Starting by pressing start:
 *   - (Hide the button start) -> it will be quit and it will reset the game.
 *   - add event listener to enemy board;
 *   - Take the input from cell (P1)
 *   - remove event listener to enemy board
 *
 *   - Random attack (CPU)
 *   - (make temporary visibile the opponent ship)
 *   - procede throught attack, with hit or miss,
 *   - if hit happen hit staff;
 *   - if miss, happen miss stuff;
 *   - switch the turn to the other player;
 *
 * - Method to take input for attack from player 2 board.
 *   - Apply an eventListener to all cells of cpu board
 *   - Create an event handler which take the click and parse an x and an y
 *    - Decide where to put event handler, maybe in a file or in game.
 *    - Carefull about IEEF game, might need a new file or module not IEFF.
 *      Maybe is better to separate handler and game IEEF.
 */
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
        const [row, col] = await events.addClicksRivalBoard(body);
        parsedAttack = game.playerTwoGameboard.receiveAttack(
          game.playerTwoGameboard.board,
          row,
          col
        );
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
      }
      //game.playerOne.setPlayerTurn(false);
      isWinner = game.playerTwoGameboard.allShipSunked();
      // events.removeClicksRivalBoard(cells);
    }
    // else {
    //   // player two is playing
    //   console.log('pass the turn');
    //   // Set the message
    //   updateDom.setMessage('Enemy attacks your ships');
    //   isWinner = true;
    // }
  }
  console.log('Player 1 wins');
};

/* TODO:
 * ship test for ship type
 */
export default gameLoop;

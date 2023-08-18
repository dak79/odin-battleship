import updateDOM from '../../dom/updateDOM';
import {
  createNewPlayers,
  createNewGameboards,
  createPlayersShips
} from './init';
import {
  setCoordShipsPlayer,
  initialPlacementPlayer,
  initialPlacementRival
} from './placement';

// Initialize game.
const init = () => {
  const players = createNewPlayers();
  const gameboards = createNewGameboards();

  return {
    ...players,
    ...gameboards
  };
};

// Place ships.
const placement = (init) => {
  const ships = createPlayersShips();

  setCoordShipsPlayer(ships.playerOneShips);
  initialPlacementPlayer(ships.playerOneShips, init.playerOneGameboard);
  initialPlacementRival(ships.playerTwoShips, init.playerTwoGameboard);

  return {
    ...ships
  };
};

// Game Loop.
const gameLoop = async (data) => {
  while (
    !data.playerOneGameboard.allShipSunked() &&
    !data.playerTwoGameboard.allShipSunked()
  ) {
    if (!data.playerOneGameboard.allShipSunked())
      await updateDOM().renderPlayerAttack(
        data.playerOne,
        data.playerTwoGameboard,
        true
      );
    if (!data.playerTwoGameboard.allShipSunked())
      await updateDOM().renderPlayerAttack(
        data.playerTwo,
        data.playerOneGameboard,
        false
      );
  }

  updateDOM().renderWinningState(data.playerTwoGameboard.allShipSunked());
};

/**
 * Export the game object
 */
const game = {
  init: () => init(),
  placement: (init) => placement(init),
  playGame: async (data) => gameLoop(data)
};

export default game;

/*
 * - 1. Create a placement fase:
 *   - The game open with a message: welcome to Battleship, press start for
 *   play.
 *   - When you press start:
 *   - The message become: place your ships
 *   - to the button is attached a function for opening placement fase on
 *   player-board
 *   - the button become play and as attached the function for starting game
 *   loop. Before starting game loop the function control if all ship are
 *   placed. If yes start game loop, if not message 'place all ship'.
 *   - for now the placement is the fixed one.
 * - 2. Implement drag and drop
 */

import DOM from '../../dom/DOM';
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
      await DOM().renderPlayerAttack(
        data.playerOne,
        data.playerTwoGameboard,
        true
      );
    if (!data.playerTwoGameboard.allShipSunked())
      await DOM().renderPlayerAttack(
        data.playerTwo,
        data.playerOneGameboard,
        false
      );
  }

  DOM().renderWinningState(data.playerTwoGameboard.allShipSunked());
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

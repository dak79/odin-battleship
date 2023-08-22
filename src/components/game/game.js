import placementDOM from '../../dom/placementDOM';
import updateDOM from '../../dom/updateDOM';
import { createNewPlayers, createNewGameboards } from './init';
import {
  createPlayersShips,
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
const placement = async (init) => {
  const main = document.querySelector('#body-main');
  placementDOM().renderShipsPlayerContainer(main);
  const ships = createPlayersShips();
  const placement = await placementDOM().renderPlacement(
    ships.playerOneShips,
    init.playerOneGameboard
  );

  // add click on player table.

  /*
   * - 2. Implement drag and drop:
   *   Go in placement fase:
   *
   *   - Visual effect of player ships:
   *    - on the dragable area shocase the place it is gonna take with a shadow.
   *    - if the ship is invalid the shadow is red.
   *
   */

  // setCoordShipsPlayer(ships.playerOneShips);
  // initialPlacementPlayer(ships.playerOneShips, init.playerOneGameboard);
  // initialPlacementRival(ships.playerTwoShips, init.playerTwoGameboard);

  return {
    ...placement,
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
  placement: async (init) => placement(init),
  playGame: async (data) => gameLoop(data)
};

export default game;

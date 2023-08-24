import placementDOM from '../../dom/placementDOM';
import updateDOM from '../../dom/updateDOM';
import { createNewPlayers, createNewGameboards } from './init';
import { createPlayersShips, placementRival } from './placement';

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
  const ships = createPlayersShips();
  placementDOM().renderShipsPlayerContainer(main);
  await placementDOM().renderPlacement(
    ships.playerOneShips,
    init.playerOneGameboard
  );

  placementRival(ships.playerTwoShips, init.playerTwoGameboard);

  placementDOM().renderShipsSummaryRival(main, ships);
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

/**
 * Describe coordinate and direction of ships
 */
const shipPlacement = {
  carrier: [{ row: 0, col: 0, isHorizontal: true }],
  battleships: [
    { row: 4, col: 2, isHorizontal: false },
    { row: 5, col: 5, isHorizontal: true }
  ],

  submarines: [
    { row: 2, col: 3, isHorizontal: true },
    { row: 1, col: 7, isHorizontal: false },
    { row: 7, col: 4, isHorizontal: true }
  ],

  destroyers: [
    { row: 4, col: 0, isHorizontal: false },
    { row: 8, col: 8, isHorizontal: false },
    { row: 9, col: 3, isHorizontal: true },
    { row: 0, col: 9, isHorizontal: false }
  ]
};

/**
 * Merge ships description and data for placement.
 * @param {Object} ships
 * @returns Object of ships with all data
 */
const setCoordShipsPlayer = (ships) =>
  Object.keys(ships).reduce(
    (updatedShips, type) =>
      (updatedShips[type] = ships[type].map((ship, shipIndex) =>
        Object.assign(ship, shipPlacement[type][shipIndex])
      )),
    {}
  );

/**
 * Place ship on player board
 * @param {Object} ships
 * @param {Object} gameboard
 */
const initialPlacementPlayer = (ships, gameboard) =>
  Object.values(ships).forEach((typeOfShip) =>
    typeOfShip.forEach((ship) =>
      gameboard.placeShip(
        gameboard.board,
        ship.body,
        ship.row,
        ship.col,
        ship.isHorizontal
      )
    )
  );

/**
 * Place randomly ship on opponent board.
 * @param {Object} ships
 * @param {Object} gameboard
 */
const initialPlacementRival = (ships, gameboard) => {
  const MAX_BOARD_SIZE = 10;
  Object.values(ships).forEach((typeOfShips) =>
    typeOfShips.forEach((ship) => {
      let placed = false;
      while (!placed) {
        placed = gameboard.placeShip(
          gameboard.board,
          ship.body,
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.floor(Math.random() * MAX_BOARD_SIZE),
          Math.random() < 0.5
        );
      }
    })
  );
};

export { setCoordShipsPlayer, initialPlacementPlayer, initialPlacementRival };

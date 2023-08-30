const isBoolean = (value) => typeof value === 'boolean';

const Player = () => {
  const init = {};

  const setIsHuman = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isHuman: value })
      : 'Invalid setting';

  const getIsHuman = () => init.isHuman;

  const setPlayerName = (value = '') =>
    getIsHuman()
      ? Object.assign(init, { name: `${value}` })
      : Object.assign(init, { name: 'Cpu' });

  const getPlayerName = () => init.name;

  const setPlayerTurn = (value) =>
    isBoolean(value)
      ? Object.assign(init, { isPlaying: value })
      : 'Invalid setting';

  const generateRandomCoordinates = () => [
    Math.floor(Math.random() * 10).toString(),
    Math.floor(Math.random() * 10).toString()
  ];

  let shipsHits = [];

  const clearShipsHits = () => {
    shipsHits.splice(0, 1);
  };

  const updateAdjacences = (isHorizontal, index) => {
    shipsHits[index].adjacentSlot.length = 0;
    const newAttemps = [];
    shipsHits[index].hit.forEach((coord) => {
      const [row, col] = coord;
      const newCoords1 = isHorizontal
        ? [parseInt(row), parseInt(col) + 1]
        : [parseInt(row) + 1, parseInt(col)];
      const newCoords2 = isHorizontal
        ? [parseInt(row), parseInt(col) - 1]
        : [parseInt(row) - 1, parseInt(col)];

      newAttemps.push(newCoords1, newCoords2);
    });

    shipsHits[index].adjacentSlot = newAttemps.filter(
      (slot) =>
        !shipsHits[index].hit.some(
          (hitSlot) => hitSlot[0] === slot[0] && hitSlot[1] === slot[1]
        )
    );
  };

  const setShipsHits = (row, col, shipHit) => {
    const foundShip = shipsHits.find(
      (ship) => ship.stats.init.id === shipHit.init.id
    );
    if (!foundShip) {
      shipsHits.push({
        stats: shipHit,
        hit: [[parseInt(row), parseInt(col)]],
        adjacentSlot: [
          [parseInt(row) + 1, parseInt(col)],
          [parseInt(row) - 1, parseInt(col)],
          [parseInt(row), parseInt(col) + 1],
          [parseInt(row), parseInt(col) - 1]
        ]
      });
    } else {
      const index = shipsHits.indexOf(foundShip);
      if (!shipsHits[index].stats.init.sunked) {
        shipsHits[index].hit.push([parseInt(row), parseInt(col)]);
        const isH = shipsHits[index].stats.init.isHorizontal;
        updateAdjacences(isH, index);
      } else {
        clearShipsHits();
      }
    }
  };

  const cpuAttack = () => {
    if (shipsHits.length) {
      const coord =
        shipsHits[0].adjacentSlot[
          Math.floor(Math.random() * shipsHits[0].adjacentSlot.length)
        ];

      const [adjRow, adjCol] = coord;

      return [adjRow.toString(), adjCol.toString()];
    }

    return generateRandomCoordinates();
  };

  /*
   * TODO:
   * - code review
   * - functional style review
   * - check if those function are in the right place
   * */
  return {
    setIsHuman,
    setPlayerName,
    getPlayerName,
    setPlayerTurn,
    setShipsHits,
    cpuAttack
  };
};

export default Player;

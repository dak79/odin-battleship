export const GameBoard = () => {
  const init = () => {
    const board = new Map();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        board.set(`${[x, y]}`, []);
      }
    }

    return board;
  };

  return {
    init
  };
};

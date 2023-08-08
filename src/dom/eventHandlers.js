import gameLoop from '../components/gameLoop';

const parseAttackCoords = (event) => {
  const row = event.target.dataset.x;
  const col = event.target.dataset.y;

  return [row, col];
};

const startGameLoop = () => {
  gameLoop();
};

export default {
  parseAttackCoords,
  startGameLoop
};

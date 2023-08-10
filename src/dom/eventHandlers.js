import gameLoop from '../components/gameLoop';

const parseAttackCoords = (event) => [
  event.target.dataset.x,
  event.target.dataset.y
];

const startGameLoop = () => {
  gameLoop();
};

export default {
  parseAttackCoords,
  startGameLoop
};

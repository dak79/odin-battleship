import gameLoop from '../components/gameLoop';
import game from '../components/game';

const parseAttackCoords = (event) => [
  event.target.dataset.x,
  event.target.dataset.y
];

const startGameLoop = () => {
  game.playGame();
};

export default {
  parseAttackCoords,
  startGameLoop
};

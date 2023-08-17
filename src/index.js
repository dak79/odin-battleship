import './style/style.css';
import game from './components/game/game';
import DOM from './dom/DOM';
import eventListeners from './dom/eventListeners';

const hook = document.querySelector('#hook');
const initGame = game.init();
DOM(initGame).render(hook);

eventListeners().startBtn(hook);

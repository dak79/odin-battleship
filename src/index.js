import './style/style.css';
import game from './components/game';
import DOM from './dom/DOM';
import eventListeners from './dom/eventListeners';

const hook = document.querySelector('#hook');
const body = DOM().render(hook, game);

eventListeners().startBtn(body);

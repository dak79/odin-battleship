import './style/style.css';
import DOM from './dom/DOM';
import eventListeners from './dom/eventListeners';
import game from './components/game';

const hook = document.querySelector('#hook');
const body = DOM().render(hook, game);

eventListeners().startBtn(body);

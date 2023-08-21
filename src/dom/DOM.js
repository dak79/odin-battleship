import renderHeaderContent from './renders/header';
import createStructureBody from './renders/body';
import renderControllersContent from './renders/controllers';
import { renderGameContent, removeGameContent } from './renders/gameContent';
import renderFooterContent from './renders/footer';

/**
 * Render the web page
 * @param {Node} hook
 * @param {Object} game
 * @returns
 */
const renderPage = (hook, game) => {
  const body = createStructureBody(hook);

  renderHeaderContent(body.header);

  renderControllersContent(body.main, game);
  renderGameContent(body.main, game);

  renderFooterContent(body.footer);

  return body;
};

/**
 * Export DOM object
 */
const DOM = () => ({
  render: (hook, game) => renderPage(hook, game),
  renderGameContent: (parent, game) => renderGameContent(parent, game),
  removeGameContent: (parent) => removeGameContent(parent)
});

export default DOM;

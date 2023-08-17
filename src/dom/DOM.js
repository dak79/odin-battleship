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
const renderPage = (hook, game, ships) => {
  const body = createStructureBody(hook);

  renderHeaderContent(body.header);

  renderControllersContent(body.main, game);
  renderGameContent(body.main, game, ships);

  renderFooterContent(body.footer);

  return body;
};

/**
 * Export DOM object
 */
const DOM = () => ({
  render: (hook, game, ships) => renderPage(hook, game, ships),
  renderGameContent: (parent, game, ships) =>
    renderGameContent(parent, game, ships),
  removeGameContent: (parent) => removeGameContent(parent)
});

export default DOM;

import createAndRenderElement from '../domUtil';

/**
 * Render the page title
 * @param {Node} header
 */
const renderTitle = (header) => {
  createAndRenderElement('h1', { class: 'header-title' }, 'Battleship', header);
};

/**
 * Render Header Content
 * @param {Node} parent
 */
const renderHeaderContent = (parent) => {
  renderTitle(parent);
};

export default renderHeaderContent;

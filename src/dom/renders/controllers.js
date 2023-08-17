import createAndRenderElement from '../domUtil';

/**
 * Render the controllers section
 * @param {Node} section
 * @returns
 */
const renderControllers = (section) =>
  createAndRenderElement(
    'div',
    { id: 'controllers', class: 'instructions' },
    null,
    section
  );

/**
 * Render the message section.
 * @param {Node} section
 * @returns
 */
const renderMessage = (section) =>
  createAndRenderElement(
    'div',
    { id: 'message-field', class: 'messages message-field' },
    'Place your ships',
    section
  );

/**
 * Render start button.
 * @param {Node} section
 * @returns
 */
const renderButton = (section) =>
  createAndRenderElement(
    'button',
    { type: 'button', id: 'button-start', class: 'buttons' },
    'Start',
    section
  );
/**
 * Render player name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
const renderPlayerName = (section, name) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-one-name',
      class: 'players-name player-one-name'
    },
    name,
    section
  );

/**
 * Render Cpu name
 * @param {Node} section
 * @param {String} name
 * @returns
 */
const renderCpuName = (section, name) =>
  createAndRenderElement(
    'div',
    {
      id: 'player-two-name',
      class: 'players-name player-two-name'
    },
    name,
    section
  );

/**
 * Render controllers content
 * @param {Node} parent
 * @param {*} game
 */
const renderControllersContent = (parent, game) => {
  const controllers = renderControllers(parent);
  renderMessage(controllers);
  renderButton(controllers);
  renderPlayerName(parent, game.playerOne.getPlayerName());
  renderCpuName(parent, game.playerTwo.getPlayerName());
};

export default renderControllersContent;

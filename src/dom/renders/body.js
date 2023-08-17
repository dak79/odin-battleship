import createAndRenderElement from '../domUtil';

/**
 * Create the structure of body element.
 * @param {Node} hook
 * @returns
 */
const createStructureBody = (hook) => ({
  header: createAndRenderElement(
    'header',
    {
      id: 'body-header',
      class: 'body-header'
    },
    null,
    hook
  ),
  main: createAndRenderElement(
    'main',
    {
      id: 'body-main',
      class: 'body-main'
    },
    null,
    hook
  ),
  footer: createAndRenderElement(
    'footer',
    {
      id: 'body-footer',
      class: 'body-footer'
    },
    null,
    hook
  )
});

export default createStructureBody;

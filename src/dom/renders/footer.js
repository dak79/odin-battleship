import createAndRenderElement from '../domUtil';
import iconLN from '../../assets/icons/linkedin.svg';
import iconGH from '../../assets/icons/github.svg';

/**
 * Render container for footer elments
 * @param {Node} footer
 * @returns
 */
const createFooterStructure = (footer) => ({
  credits: createAndRenderElement(
    'div',
    { class: 'credits' },
    'Daniele Campari - 2023',
    footer
  ),
  icons: createAndRenderElement('div', { class: 'footer-icons' }, null, footer)
});

/**
 * Create links for GitHub and LinkedIn
 * @param {Node} div
 * @returns
 */
const createLinks = (div) => ({
  linkedin: createAndRenderElement(
    'a',
    { href: 'https://www.linkedin.com/in/daniele-campari-33757593/' },
    null,
    div
  ),
  github: createAndRenderElement(
    'a',
    { href: 'https://github.com/dak79/' },
    null,
    div
  )
});

/**
 * Render Linkedin Icon
 * @param {Node} link
 * @returns
 */
const renderLnIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconLN, alt: 'LinkedIn link', class: 'icons-size' },
    null,
    link
  );

/**
 * Render GitHub icon
 * @param {Node} link
 * @returns
 */
const renderGhIcon = (link) =>
  createAndRenderElement(
    'img',
    { src: iconGH, alt: 'GitHub link', class: 'icons-size' },
    null,
    link
  );

/**
 * Render footer content
 * @param {Node} parent
 */
const renderFooterContent = (parent) => {
  const footer = createFooterStructure(parent);
  const links = createLinks(footer.icons);
  renderLnIcon(links.linkedin);
  renderGhIcon(links.github);
};

export default renderFooterContent;

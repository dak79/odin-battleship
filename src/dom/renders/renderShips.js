import createAndRenderElement from '../domUtil';

/**
 * Render container for player ship icon.
 * @param {Node} section
 * @returns
 */
// const renderShipsPlayerContainer = (section) =>
//   createAndRenderElement(
//     'div',
//     { id: 'ships-player', class: 'ships-container player-ships' },
//     null,
//     section
//   );

/**
 * Render container for cpu ship icon.
 * @param {Node} section
 * @returns
 */
const renderShipsRivalContainer = (section) =>
  createAndRenderElement(
    'div',
    { id: 'ships-rival', class: 'ships-container rival-ships' },
    null,
    section
  );

/**
 * Render icon for ships
 * @param {Node} section
 * @param {Object} ships
 */
// const renderShipIcons = (section, ships) => {
//   Object.entries(ships).forEach(([ship, descriptions]) => {
//     const div = createAndRenderElement('div', { id: ship }, null, section);
//     descriptions.forEach((description) => {
//       createAndRenderElement(
//         'img',
//         { src: description.icon, alt: `${ship}-icon`, class: 'icons-size' },
//         null,
//         div
//       );
//     });
//   });
// };

// /**
//  * Render the ship on board
//  * @param {Array[]} board
//  */
// const renderPlayerShips = (board, table) => {
//   const rows = Array.from(table.rows);
//   rows.forEach((row, rowIndex) => {
//     const cells = Array.from(row.cells);
//     cells.forEach((td, colIndex) => {
//       const cell = board[rowIndex][colIndex];
//       if (cell !== null) {
//         td.classList.add('ship-placed');
//       }
//     });
//   });
// };

export { renderShipsRivalContainer };

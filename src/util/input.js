/**
 * Check if the input is a string that can be parsed in a valid integer.
 * @param {*} input - length
 * @returns {*} input
 */
export const parseInput = (input) =>
  typeof input === 'string' ? parseInt(input) : input;

/**
 * Check if input is a valid integer.
 * @param {*} input - length
 * @returns {Number|false}
 */
export const validateInputInt = (input) =>
  Number.isFinite(input) ? input : false;

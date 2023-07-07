import { pipe } from '../util/pipe';
export const Ship = (l) => {
  /**
   * Check if the input is a string that can be parsed in a valid integer.
   * @param {*} input - length
   * @returns input|input typeof number.
   */
  const parseLength = (input = l) =>
    typeof input === 'string' ? parseInt(input) : input;

  /**
   * Check if input is a valid integer.
   * @param {*} input - length
   * @returns integer|false
   */
  const validateLength = (input) => (Number.isFinite(input) ? input : false);

  /**
   * Get the length of ship.
   */
  const getLength = pipe(parseLength, validateLength);

  const length = getLength();

  return {
    getLength
  };
};

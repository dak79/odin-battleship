import { pipe } from '../util/pipe';
export const Ship = (len) => {
  /**
   * Check if the input is a string that can be parsed in a valid integer.
   * @param {*} input - length
   * @returns {*} input
   */
  const parseLength = (input) =>
    typeof input === 'string' ? parseInt(input) : input;

  /**
   * Check if input is a valid integer.
   * @param {*} input - length
   * @returns {Number|false}
   */
  const validateIntegerLength = (input) =>
    Number.isFinite(input) ? input : false;

  /**
   * Check if the length is between 1 and 4.
   * @param {Number|false} input - length
   * @returns {Number|false}
   */
  const validateShipLength = (input) =>
    input > 4 || input < 2 ? false : input;

  /**
   * Set the length of ship.
   */
  const setLength = () =>
    pipe(
      () => parseLength(len),
      (parsed) => validateIntegerLength(parsed),
      (int) => validateShipLength(int)
    )(len);

  const init = {
    len: setLength(),
    hits: 0,
    sunked: false
  };

  /**
   * Add an hit.
   * @param {Object} obj
   * @returns {Object} With hits updated.
   */
  const addHit = (obj) => ({ ...obj, hits: ++obj.hits });

  /**
   * Set sunked property
   * @param {Object} obj
   * @returns {Object} with sunked updated.
   */
  const setSunk = (obj) => ({
    ...obj,
    sunked: (obj.sunked = obj.len === obj.hits)
  });

  /**
   * Hit the ship
   * @param {Object} obj
   */
  const hit = (obj = init) => {
    addHit(obj);
    setSunk(obj);
  };

  /**
   * Get the length of ship init.
   * @param {Object} obj
   * @returns
   */
  const getLength = (obj = init) => obj.len;

  /**
   * Get sunked from ship init.
   * @param {Object} obj
   * @returns
   */
  const isSunk = (obj = init) => obj.sunked;
  return {
    getLength,
    hit,
    isSunk
  };
};

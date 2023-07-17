import { pipe } from '../util/pipe';
import { parseInput, validateInputInt } from '../util/input';
export const Ship = (len) => {
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
      () => parseInput(len),
      (parsed) => validateInputInt(parsed),
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
  const addHit = (obj) => ({ ...obj, hits: obj.hits + 1 });

  /**
   * Set sunked property
   * @param {Object} obj
   * @returns {Object} with sunked updated.
   */
  const setSunk = (obj) => ({
    ...obj,
    sunked: obj.len === obj.hits
  });

  /**
   * Hit the ship
   * @param {Object} obj
   */
  const hit = (obj = init) => pipe(addHit, setSunk)(obj);
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

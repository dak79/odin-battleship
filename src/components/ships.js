import pipe from '../util/pipe';
import validateInput from '../util/input';

/**
 * Check if the length is between 1 and 4.
 * @param {Number|false} input - length
 * @returns {Number|false}
 */
const validateShipLength = (input) => (input > 4 || input < 2 ? false : input);

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

const Ship = (len) => {
  /**
   * Set the length of ship.
   */
  const setLength = () =>
    pipe(
      () => validateInput(len),
      (int) => validateShipLength(int)
    )(len);

  const init = {
    len: setLength(),
    hits: 0,
    sunked: false
  };

  /**
   * Hit the ship.
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
    init,
    getLength,
    hit,
    isSunk
  };
};

export default Ship;

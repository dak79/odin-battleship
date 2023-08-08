import pipe from '../util/pipe';
import validateInput from '../util/input';

const MIN_LENGTH = 2;
const MAX_LENGTH = 5;
/**
 * Check if the length is between 1 and 4.
 * @param {Number|false} input - length
 * @returns {Number|false}
 */
const validateShipLength = (input) =>
  input > MAX_LENGTH || input < MIN_LENGTH ? false : input;

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

  const init = {
    len: setLength(),
    type:
      len === 5
        ? 'carrier'
        : len === 4
        ? 'battleships'
        : len === 3
        ? 'submarines'
        : 'destroyers',
    hits: 0,
    sunked: false
  };

  return {
    init,
    getLength,
    hit,
    isSunk
  };
};

export default Ship;

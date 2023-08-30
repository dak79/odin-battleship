import pipe from '../util/pipe';
import validateInput from '../util/input';

const MIN_LENGTH = 2;
const MAX_LENGTH = 5;
/**
 * Check if the length is between 1 and 4.
 * @param {Number|false} input - length
 * @returns {Number|false} Length or false if is invalid.
 */
const validateShipLength = (input) =>
  input > MAX_LENGTH || input < MIN_LENGTH ? false : input;

/**
 * Add an hit.
 * @param {Object} obj
 * @returns {Object} init hits updated.
 */
const addHit = (obj) => ({ ...obj, hits: obj.hits + 1 });

/**
 * Set sunked property
 * @param {Object} obj
 * @returns {Object} init sunked updated.
 */
const setSunk = (obj) => ({
  ...obj,
  sunked: obj.len === obj.hits
});

const Ship = (len, id) => {
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
   * @returns {Object} Update ship object
   */
  const hit = (obj = init) => pipe(addHit, setSunk)(obj);

  /**
   * Get the length of ship init.
   * @param {Object} obj
   * @returns {Number} Ship length
   */
  const getLength = (obj = init) => obj.len;

  /**
   * Get sunked from ship init.
   * @param {Object} obj
   * @returns {Boolean} Ship sunked?
   */
  const isSunk = (obj = init) => obj.sunked;

  const setDirection = (value) => (init.isHorizontal = value);

  const init = {
    id: id,
    len: setLength(),
    isHorizontal: true,
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
    setDirection,
    getLength,
    hit,
    isSunk
  };
};

export default Ship;

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
  const validateLength = (input) => (Number.isFinite(input) ? input : false);

  /**
   * Check if the length is between 1 and 4.
   * @param {Number|false} input - length
   * @returns {Number|false}
   */
  const validShip = (input) => (input > 4 || input < 2 ? false : input);

  /**
   * Get the length of ship.
   */
  const getLength = () =>
    pipe(
      () => parseLength(len),
      (parsed) => validateLength(parsed),
      (int) => validShip(int)
    )(len);

  const length = getLength();

  let hits = 0;

  let sunk = false;

  /**
   * Increment hits on a ship.
   * @returns {Number}
   */
  const addHit = () => hits++;

  /**
   * setSunk state
   * @returns {Boolean} New value for variable sunk
   *
   */
  const setSunk = () => (hits === length ? (sunk = true) : (sunk = false));

  /**
   * Hit a ship and set sunk state.
   */
  const hit = pipe(addHit, setSunk);

  /**
   * Check if the ship is sunked.
   */
  const isSunk = () => sunk;

  return {
    getLength,
    hit,
    isSunk
  };
};

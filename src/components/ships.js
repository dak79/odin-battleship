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
   * Check if the length is between 1 and 4.
   * @param {*} input - length
   * @returns input|false
   */
  const validShip = (input) => (input > 4 || input < 1 ? false : input);

  /**
   * Get the length of ship.
   */
  const getLength = pipe(parseLength, validateLength, validShip);

  const length = getLength();

  let hits = 0;

  /**
   * Hit on ship
   * @returns increase number of hit by 0ne
   */
  const setHits = () => (hits += 1);

  let sunked = false;

  /**
   * Check if the ship is sunked.
   * @param {Number} damage - Quantity of hits
   * @param {Number} health - Length of ship
   * @returns
   */
  const isSunked = (damage, health = length) => damage === health;

  /**
   * Set sunked for the ship
   * @param {boolean} bool
   * @returns true|false
   */
  const setSunked = (value) => (sunked = value);

  /**
   * Get the sunked variable.
   * @returns value of sunked variable.
   */
  const getSunked = () => sunked;

  /**
   * Hit the ship.
   */
  const hit = pipe(setHits, isSunked, setSunked);
  return {
    getLength,
    hit,
    getSunked
  };
};

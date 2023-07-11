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
   * Hit the ship
   * @returns increase number of hit by 0ne
   */
  const hit = () => (hits += 1);

  /**
   * Check if the ship is sunked.
   * @param {Number} damage - Quantity of hits
   * @param {Number} health - Length of ship
   * @returns
   */
  const isSunk = (damage = hits, health = length) => damage === health;

  return {
    getLength,
    hit,
    isSunk
  };
};

import pipe from './pipe';

/**
 * Check if the input is a string that can be parsed in a valid integer.
 * @param {*} input - length
 * @returns {*} input
 */
const parseInput = (input) =>
  typeof input === 'string' ? parseInt(input) : input;

/**
 * Check if input is a valid integer.
 * @param {*} input - length
 * @returns {Number|false}
 */
const validateInt = (input) => (Number.isFinite(input) ? input : false);

const validateInput = (input) =>
  pipe(
    () => parseInput(input),
    (parsedInput) => validateInt(parsedInput)
  )(input);

export default validateInput;

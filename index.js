import handleStringInput from './lib/handle-string-input.js';
import commaSeparate from './lib/comma-separate-number.js';

/**
 * @param {object} opts The options object
 * @param {number|string} opts.amount The number or string to be formatted
 * @param {number} decimalPlaces Optionally specify the number of decimal places
 *   you'd like in the returned string
 * @returns {string}      The number in USD format.
 */
function formatUSD(opts) {
  let num = opts.amount;
  let decPlaces = 0;
  let sign = '';
  let numericValue = num;
  let stringValue = '';
  let formattedString = '';

  // Handle a String as input
  if (typeof num === 'string') {
    numericValue = handleStringInput(num);
  }

  // Determine sign
  if (numericValue < 0) {
    sign = '-';
  }

  opts = opts || {};

  // Determine decimal places
  decPlaces = Math.abs(opts.decimalPlaces);
  if (isNaN(decPlaces)) {
    decPlaces = 2;
  }

  // Get absolute value, apply decimal places limit, return string
  stringValue = Math.abs(numericValue).toFixed(decPlaces);

  // Get a comma-separated string of the absolute value of numericValue
  stringValue = commaSeparate(stringValue);

  // Construct the formattedString
  formattedString = sign + '$' + stringValue;

  return formattedString;
}

export { formatUSD };

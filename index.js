/**
 * @param  {string|number} num  A number or a string in a numbery format
 * @param  {object} opts Optionally specify the number of decimal places
 *   you'd like in the returned string with the `decimalPlaces` key.
 *   e.g. {decimalPlaces: 0}
 * @returns {string}      The number in USD format.
 */

'use strict';

function formatMoney( num, opts ) {
  var decPlaces = 0,
      sign = '',
      numericValue = num,
      stringValue = '',
      formattedString = '',
      handleStringInput = require('./lib/handle-string-input.js'),
      commaSeparate = require('./lib/comma-separate-number.js');

  // Handle a String as input
  if ( typeof num === 'string' ) {
    numericValue = handleStringInput( num );
  }

  // Determine sign
  if ( numericValue < 0 ) {
    sign = '-';
  }

  opts = opts || {};

  // Determine decimal places
  decPlaces = Math.abs( opts.decimalPlaces );
  if ( isNaN( decPlaces ) ) {
    decPlaces = 2;
  }

  // Get absolute value, apply decimal places limit, return string
  stringValue = Math.abs( numericValue ).toFixed( decPlaces );

  // Get a comma-separated string of the absolute value of numericValue
  stringValue = commaSeparate( stringValue );

  // Construct the formattedString
  formattedString = sign + '$' + stringValue;

  return formattedString;
}

module.exports = formatMoney;

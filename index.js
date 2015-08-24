/**
 * @param  {string|number} num  A number or a string in a numbery format
 * @param  {object} opts Optionally specify the number of decimal places
 *   you'd like in the returned string with the `decimalPlaces` key.
 *   e.g. {decimalPlaces: 0}
 * @returns {string}      The number in USD format.
 */

'use strict';

function formatMoney( num, opts ) {
  var decPlaces = 0, // decPlaces, taken from opts
      sign = '', // sign, either '' or '-'
      numericValue = Math.abs( num ), // Absolute numeric value of num
      wholePart = 0, // whole number part of num
      formattedString = ''; // final formatted String to be returned

  opts = opts || {};

  // Handle a String as input
  if ( typeof num === 'string' ) {
    // If a '-' appears before the first digit, we assume num is negative
    var minusPos = num.indexOf( num.match( '-' ) ),
        digitPos = num.indexOf( num.match( /\d/ ) );
    if ( num.indexOf( num.match( '-' ) ) !== -1 && minusPos < digitPos ) {
      sign = '-';
    }

    // Strip numeric values, then convert to a number (while maintaining sign)
    numericValue = Number( num.replace( /[^0-9\.]+/g, '' ) );
  } else if ( num < 0 ) {
  // If num is a negative number, assign sign
    sign = '-';
  }

  // Determine decimal places
  decPlaces = Math.abs( opts.decimalPlaces );
  if ( isNaN( decPlaces ) ) {
    decPlaces = 2;
  }

  // Get the offset of comma separation
  wholePart = Math.floor( Number( numericValue ) );

  // Construct the formattedString
  formattedString = sign + '$';

  // add commas to numericValue
  formattedString += wholePart.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' );

  // add decimal places
  if ( decPlaces !== 0 ) {
    formattedString += '.' + Math.abs( numericValue - wholePart ).toFixed( decPlaces ).slice( 2 );
  }

  return formattedString;

}

module.exports = formatMoney;

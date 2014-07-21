/**
 * @param  {string|number} num  A number or a string in a numbery format
 * @param  {object} opts Optionally specify the number of decimal places 
 *   you'd like in the returned string with the `decimalPlaces` key.
 *   e.g. {decimalPlaces: 0}
 * @return {string}      The number in USD format.
 */
var formatMoney = function( num, opts ) {

  opts = opts || {};

  var decPlaces = isNaN( opts.decimalPlaces = Math.abs(opts.decimalPlaces) ) ? 2 : opts.decimalPlaces,
      sign = num < 0 ? '-' : '',
      i = parseInt( num = Math.abs(+num || 0).toFixed(decPlaces), 10 ) + '',
      j = ( j = i.length ) > 3 ? j % 3 : 0;

  return sign + 
        '$' + 
        ( j ? i.substr(0, j) + ',' : '' ) + 
        i.substr( j ).replace( /(\d{3})(?=\d)/g, '$1,' ) + 
        ( decPlaces ? '.' + Math.abs(num - i).toFixed(decPlaces).slice(2) : '');

};

module.exports = formatMoney;
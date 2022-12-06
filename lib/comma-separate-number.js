/**
 * @param  {string} numberString - A string representing a number.
 * @returns {string} The number in a comma-separated format.
 */
function commaSeparate(numberString) {
  const string = numberString.toString();
  // split string of number by the decimal point
  const parts = string.split('.');
  // format the whole number part of the string with a regex
  let formattedValue = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // Add back decimal part if it exists
  if (typeof parts[1] !== 'undefined') {
    formattedValue += '.' + parts[1];
  }

  return formattedValue;
}

export default commaSeparate;

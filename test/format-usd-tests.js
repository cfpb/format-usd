var formatUSD = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.formatUSD = {
  setUp: function(done) {
    // setup here
    done();
  },
  'Format numbers w/o decimal places': function(test) {
    test.expect(6);
    // tests here
    test.equal( formatUSD(1, {decimalPlaces: 0}), '$1' );
    test.equal( formatUSD(1.25, {decimalPlaces: 0}), '$1' );
    test.equal( formatUSD(1.258, {decimalPlaces: 0}), '$1' );
    test.equal( formatUSD(1.25889349857, {decimalPlaces: 0}), '$1' );
    test.equal( formatUSD(798127394873, {decimalPlaces: 0}), '$798,127,394,873' );
    test.equal( formatUSD(000423, {decimalPlaces: 0}), '$275' );
    test.done();
  },
  'Format numbers w/ one decimal places': function(test) {
    test.expect(6);
    // tests here
    test.equal( formatUSD(1, {decimalPlaces: 1}), '$1.0' );
    test.equal( formatUSD(1.25, {decimalPlaces: 1}), '$1.3' );
    test.equal( formatUSD(1.258, {decimalPlaces: 1}), '$1.3' );
    test.equal( formatUSD(1.25889349857, {decimalPlaces: 1}), '$1.3' );
    test.equal( formatUSD(798127394873, {decimalPlaces: 1}), '$798,127,394,873.0' );
    test.equal( formatUSD(000423, {decimalPlaces: 1}), '$275.0' );
    test.done();
  },
  'Format numbers w/ two decimal places': function(test) {
    test.expect(6);
    // tests here
    test.equal( formatUSD(1), '$1.00' );
    test.equal( formatUSD(1.25), '$1.25' );
    test.equal( formatUSD(1.258), '$1.26' );
    test.equal( formatUSD(1.25889349857), '$1.26' );
    test.equal( formatUSD(798127394873), '$798,127,394,873.00' );
    test.equal( formatUSD(000423), '$275.00' );
    test.done();
  },
  'Format numbers w/ three decimal places': function(test) {
    test.expect(6);
    // tests here
    test.equal( formatUSD(1, {decimalPlaces: 3}), '$1.000' );
    test.equal( formatUSD(1.25, {decimalPlaces: 3}), '$1.250' );
    test.equal( formatUSD(1.258, {decimalPlaces: 3}), '$1.258' );
    test.equal( formatUSD(1.25889349857, {decimalPlaces: 3}), '$1.259' );
    test.equal( formatUSD(798127394873, {decimalPlaces: 3}), '$798,127,394,873.000' );
    test.equal( formatUSD(000423, {decimalPlaces: 3}), '$275.000' );
    test.done();
  },
  'Format strings by removing non-numeric characters': function(test) {
    test.expect(3);
    test.equal( formatUSD("foo99", {decimalPlaces: 0}), '$99' );
    test.equal( formatUSD("--??!!1,2,3,4,5,6,7", {decimalPlaces: 0}), '$1,234,567' );
    test.equal( formatUSD("zero", {decimalPlaces: 0}), '$0' );
    test.done();
  }
};

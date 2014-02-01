itwith4k = require('../lib/itwith4k')

###
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
###

exports.awesome = 
    setUp: (done) ->
        done()
    'no args': (test) -> 
        test.expect(1)
        test.equal(itwith4k.awesome(), 'awesome', 'should be awesome.')
        test.done()

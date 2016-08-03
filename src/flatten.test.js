const test = require('tape');
const flatten = require('./flatten');

test('flattening an empty array results in an empty array', function(testCase) {
  testCase.plan(1);
  const input = [];

  const expectedResult = [];
  testCase.deepEqual(flatten(input), expectedResult);
});

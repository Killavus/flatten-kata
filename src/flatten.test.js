const test = require('tape');
const flatten = require('./flatten');

test('flattening an empty array results in an empty array', function(testCase) {
  testCase.plan(1);
  const input = [];

  const expectedResult = [];
  testCase.deepEqual(flatten(input), expectedResult);
});

test('flattening a flat array results in the same array', function(testCase) {
  testCase.plan(1);
  const input = [1, 2, 3];

  const expectedResult = [1, 2, 3];
  testCase.deepEqual(flatten(input), expectedResult);
});

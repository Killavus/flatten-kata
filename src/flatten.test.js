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

test('shallowly nested arrays are flattened', function(testCase) {
  const inputs = [
    [1, [2, 3, 4], 5, [6], [7, 8], 9],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[], 1, 2, 3, 4, 5, 6, 7],
    [[], [], [], [], []],
  ];
  testCase.plan(inputs.length);

  const expectedResults = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7],
    [],
  ];

  inputs.forEach(function(input, index) {
    testCase.deepEqual(flatten(input), expectedResults[index]);
  });
});

test('deeply nested arrays are flattened', function(testCase) {
  const inputs = [
    [[[[1]]], [2, [3, [4, 5]]], [6, [[7]]], [8], 9, 10],
    [[1, 2, 3, [4, 5, [[[[[6, 7]]]]]]]],
    [[[[[[[[[]]]]]]]], [1], [2, 3], [[4, 5], 6, [7, [8, [9]]], [[[10]]], 11]],
  ];

  testCase.plan(inputs.length);

  const expectedResults = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  ];

  inputs.forEach(function(input, index) {
    testCase.deepEqual(flatten(input), expectedResults[index]);
  });
});

function concatenateFlattened(flattenedArray, nestedArray) {
  const flattenedNestedArray = flatten(nestedArray);
  return [...flattenedArray, ...flattenedNestedArray];
}

function flatten(source) {
  return source.reduce(function flattenReducer(partialResult, element) {
    if (Array.isArray(element)) {
      return concatenateFlattened(partialResult, element);
    }

    return [...partialResult, element];
  }, []);
}

module.exports = flatten;

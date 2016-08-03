function flatten(source) {
  return source.reduce(function flattenReducer(partialResult, element) {
    if (Array.isArray(element)) {
      const nestedArrayResult = flatten(element);
      return [...partialResult, ...nestedArrayResult];
    }

    return [...partialResult, element];
  }, []);
}

module.exports = flatten;

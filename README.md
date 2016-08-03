# `flatten` kata

We all know the `flatten` function. Let's write it using test-driven development techniques!

## Setup:

```
git clone https://github.com/Killavus/flatten-kata.git
npm install
```

## Running tests:

To run tests, you can use the built-in `npm` script:

```
npm run test
```

## Supported Node.js versions

The solution is relying on a ES2015 language feature called _spread operator_. It is available for use starting from Node 5.11.0. (source: [node.green](http://node.green/))

If you'd like to support it in lower versions of Node, an use of [transpiler](http://babeljs.io/) is necessary. The easiest way to use it with this kata is through the [require hook](http://babeljs.io/docs/usage/require/).

## Potential improvements

On paper, `concat` function which is used internally by array spread operator runs in `O(n)` time, where `n` is the length of a second array. With performance-critical usage you'd like to avoid using it for performance gains.

With very deep arrays (especially on Windows environments) this function can exhaust the stack since it is written using a recursion. A more complicated version with an usage of queues can be used to avoid stack overflows. The idea of such solution is very similar to a [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) algorithm - you keep nested arrays on a queue with positional information for further processing, repeating the process until the queue is empty. For the sake of simplicity I've avoided such solution.

Since I'm also unaware about the upper layers of an application the code is lacking sanity checks for its arguments. I assume the data passed to this array conforms to the implicit contract (it is a nested array of elements). Also this implementation does not handle array-like objects like `arguments`.

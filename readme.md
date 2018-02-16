# utmost

Returns the item which ranks highest by some criterion.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i utmost
```

## API

The module exports a single function.

### Parameters

1. Bindable: `items` (iterable): The items from which to select the “utmost” item.
2. Object argument:
    * Optional: `getValue` (function): A callback which accepts each item as its sole argument and returns the value that forms the basis of the comparison. Defaults to `x => x`.
    * Optional: `isBetterThan` (function): A callback which accepts two values (`a` and `b`) and returns `true` if `a` is “better than” `b`, otherwise `false`. Defaults to `(a, b) => a > b`.

### Return Value

The “utmost” item which is “better than” the others. In the case of a tie, the item returned is the one iterated first.

## Examples

```javascript
const utmost = require('utmost')

// Without additional arguments, the module defaults to finding the greatest item.
// This means that, in this example, the highest number will be returned.
utmost([1, 3, 2]) // 3

// Returns the lowest number
utmost([1, 3, 2], {isBetterThan: (a, b) => a < b}) // 1

// Returns the longest string
utmost(['test', 'example'], {getValue: x => x.length}) // 'example'

// Returns the shortest string
utmost(['test', 'example'], {getValue: x => x.length, isBetterThan: (a, b) => a < b}) // 'test'

// Supports the bind operator
['test', 'example']::utmost({getValue: x => x.length}) // 'example'
```

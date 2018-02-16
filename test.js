'use strict'

const assert = require('assert')
const utmost = require('.')

describe('', function () {
  it('should return the greatest item by default', function () {
    assert.strictEqual(utmost([1, 3, 2]), 3)
  })

  it('should return a single item as-is', function () {
    const s = Symbol('test')
    assert.strictEqual(utmost([s]), s)
  })

  it('should accept an `isBetterThan` callback', function () {
    assert.strictEqual(utmost([1, 3, 2], {isBetterThan: (a, b) => a < b}), 1)
  })

  it('should accept a `getValue` callback', function () {
    assert.strictEqual(utmost(['test', 'example']), 'test')
    assert.strictEqual(utmost(['test', 'example'], {getValue: x => x.length}), 'example')
  })

  it('should accept both callbacks together', function () {
    assert.strictEqual(utmost(['test', 'example'], {getValue: x => x.length, isBetterThan: (a, b) => a < b}), 'test')
  })

  it('should support the bind operator', function () {
    assert.strictEqual(utmost.call(['test', 'example'], {getValue: x => x.length}), 'example')
  })
})

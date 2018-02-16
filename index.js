'use strict'

module.exports = require('sbo')(function utmost (items, {getValue = x => x, isBetterThan = (a, b) => a > b} = {}) {
  let first = true
  let topItem
  let topValue
  for (const item of items) {
    const value = getValue(item)
    if (first || isBetterThan(value, topValue)) {
      topValue = value
      topItem = item
      first = false
    }
  }
  return topItem
})

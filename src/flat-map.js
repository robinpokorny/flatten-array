// Array.prototype.concat.apply([], arr.map(fn))

/**
 * Callback for Array.prototype.map.
 * @callback mapCallback
 */

/**
 * @function flatMap
 * @param {mapCallback} fn
 * @param {Array} arr
 * @description
 * Map a function over an array and flatten the result by one level.
 */
export default (fn, arr) =>
  [].concat(...arr.map(fn))

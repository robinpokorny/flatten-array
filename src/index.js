import flatMap from './flat-map'

/**
 * Anything except an Array.
 * @typedef {*} NonArray
 */

/**
 * An array-nested structure of (non-array) elements.
 * @typedef {(NonArray|NestedStructure[])} NestedStructure
 */

/**
 * @function flatten
 * @param {NestedStructure} arr
 * @returns {NonArray|NonArray[]}
 * @description
 * Flatten an array of arbitrarily nested arrays
 * of elements into a flat array of elements.
 */
const flatten = (arr) =>
  Array.isArray(arr) ? flatMap(flatten, arr) : arr

export default flatten

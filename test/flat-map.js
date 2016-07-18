/* eslint-env mocha */
import chai from 'chai'
const { expect } = chai

import flatMap from '../lib/flat-map'

describe('FlatMap', () => {
  it('should be a function', () => {
    expect(flatMap).to.be.a('function')
  })

  it('should apply function to each element and flatten result', () => {
    const fn = (x) => [x, 0]
    const arr = [1, 2, 3]
    expect(flatMap(fn, arr)).to.deep.equal([1, 0, 2, 0, 3, 0])
  })

  it('should correctly flatten arrays and non-arrays', () => {
    const fn = (x, i) => (i % 2) ? [x] : x
    const arr = [1, 2, 3]
    expect(flatMap(fn, arr)).to.deep.equal(arr)
  })
})

/* eslint-env mocha */
import chai from 'chai'
const { expect } = chai

import flatten from '../'

describe('Flatten', () => {
  it('should be a function', () => {
    expect(flatten).to.be.a('function')
  })

  it('should flatten nested array', () => {
    const nested = [[1, 2, [3]], 4]
    expect(flatten(nested)).to.deep.equal([1, 2, 3, 4])
  })

  it('should not modify non-array', () => {
    expect(flatten(1)).to.equal(1)
  })
})

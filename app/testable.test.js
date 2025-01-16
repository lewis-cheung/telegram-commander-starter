import { testableFunc } from './testable.js'

describe('Testable', () => {
  it('should return the sum of two numbers', () => {
    expect(testableFunc(1, 2)).toBe(3)
  })
})
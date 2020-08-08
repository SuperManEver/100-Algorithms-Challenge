import absoluteValuesSumMinimization from './absoluteValuesSumMinization'

describe('absoluteValuesSumMinization', () => {
  it('should be equal sum of items', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7])).toBe(13)
  })

  it('should be equal sum of items', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toBe(19)
  })

  it('should be equal sum of items', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(25)
  })

  it('should be equal sum of items', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(25)
  })

  it('should be equal sum of items', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])).toBe(33)
  })
})

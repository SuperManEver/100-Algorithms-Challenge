import { add, add2 } from './add'

describe('add 2 numbers', () => {
  it('add 2 numbers', () => {
    expect(add(1, 3)).toBe(4)
  })

  it('add 2 numbers', () => {
    expect(add(3, 2)).toBe(5)
  })
})

describe('add more than 2 numbers', () => {
  it('add 1,2,3,4,5', () => {
    expect(add2(1, 2, 3, 4, 5)).toBe(15)
  })
})

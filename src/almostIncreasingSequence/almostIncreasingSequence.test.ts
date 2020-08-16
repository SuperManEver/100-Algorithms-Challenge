import { almostIncreasingSequence as ais } from './almostIncreasingSequence'

test('for [1, 3, 2, 1] should be false', () => {
  expect(ais([1, 3, 2, 1])).toBe(false)
})

test('for [1, 3, 2] should be true', () => {
  expect(ais([1, 3, 2])).toBe(true)
})

test('for [1, 5, 7, 3, 4] should be false', () => {
  const xs = [1, 5, 7, 3, 4]
  expect(ais(xs)).toBe(false)
})

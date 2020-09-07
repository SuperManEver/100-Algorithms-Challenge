import arr, { absDiff } from './arrayMaximalAdjacentDifference'

test('arrayMaximalAdjacentDifference', () => {
  expect(arr([2, 4, 1, 0])).toBe(3)
})

test('arrayMaximalAdjacentDifference', () => {
  expect(arr([2, 9, 1, 0])).toBe(8)
})

test('absDiff', () => {
  expect(absDiff([9, 1])).toBe(8)
})

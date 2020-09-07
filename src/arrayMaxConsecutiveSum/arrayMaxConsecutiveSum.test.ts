import arrayMaxConsecutiveSum, { sum } from './arrayMaxConsecutiveSum'

test('arrayMaxConsecutiveSum', () => {
  const xs = [2, 3, 5, 1, 6]

  expect(arrayMaxConsecutiveSum(xs, 2)).toBe(8)
})

test('arrayMaxConsecutiveSum', () => {
  const xs = [2, 3, 5, 1, 6, 4]

  expect(arrayMaxConsecutiveSum(xs, 3)).toBe(12)
})

test('sum', () => {
  expect(sum([3, 5])).toBe(8)
})

test('sum', () => {
  expect(sum([2, 1, 6])).toBe(9)
})

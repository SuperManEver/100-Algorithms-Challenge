import { arrayChange } from './arrayChange'

test('arrayChange([1, 1, 1]) -> 3', () => {
  expect(arrayChange([1, 1, 1])).toBe(3)
})

test('arrayChange([1, 1, 2, 1]) -> 5', () => {
  expect(arrayChange([1, 1, 2, 1])).toBe(5)
})

test('arrayChange([1, 0, 1]) -> 4', () => {
  expect(arrayChange([1, 0, 1])).toBe(4)
})

test('arrayChange([1, 0, 0]) -> 5', () => {
  expect(arrayChange([1, 0, 0])).toBe(5)
})

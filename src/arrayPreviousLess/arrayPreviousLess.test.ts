import arrayPreviousLess, { searchSmallerFromRight } from './arrayPreviousLess'

test('searchSmallerFromRight', () => {
  expect(searchSmallerFromRight([3, 5], 5)).toBe(3)
})

test('searchSmallerFromRight', () => {
  expect(searchSmallerFromRight([3, 5], 2)).toBe(-1)
})

test('arrayPreviousLess', () => {
  expect(arrayPreviousLess([3, 5, 2, 4, 5])).toEqual([-1, 3, -1, 2, 4])
})

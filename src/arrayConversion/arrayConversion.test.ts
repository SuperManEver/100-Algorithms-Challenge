import { arrayConversion as ac } from './arrayConversion'

test('arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]) -> 186', () => {
  expect(ac([1, 2, 3, 4, 5, 6, 7, 8])).toBe(186)
})

import arrayReplace from './arrayReplace'

test('arrayReplace', () => {
  expect(arrayReplace([1, 2, 1], 1, 3)).toEqual([3, 2, 3])
})

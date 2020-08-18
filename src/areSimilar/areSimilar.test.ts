import { areSimilar } from './areSimilar'

test('areSimilar([1, 2, 3], [1, 2, 3]) true', () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true)
})

test('areSimilar([1, 2, 3], [2, 1, 3]) true', () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true)
})

test('areSimilar([1, 2, 2], [2, 1, 1]) false', () => {
  expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true)
})

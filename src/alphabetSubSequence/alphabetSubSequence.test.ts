import { alphabetSubsequence } from './alphabetSubSequence'

test('for "effg" and "cdce" should be false', () => {
  expect(alphabetSubsequence('cdce')).toBe(false)
  expect(alphabetSubsequence('effg')).toBe(false)
})

test('for "ace" and "bxz" should be true', () => {
  expect(alphabetSubsequence('ace')).toBe(true)
  expect(alphabetSubsequence('bxz')).toBe(true)
})

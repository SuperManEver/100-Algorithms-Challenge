import { areEquallyStrong } from './areEquallyStrong'

test('areEquallyStrong(10, 15, 15, 10) true', () => {
  expect(areEquallyStrong(10, 15, 15, 10)).toBe(true)
})

test('areEquallyStrong(15, 10, 15, 10) true', () => {
  expect(areEquallyStrong(15, 10, 15, 10)).toBe(true)
})

test('areEquallyStrong(15, 10, 15, 9) false', () => {
  expect(areEquallyStrong(15, 10, 15, 9)).toBe(false)
})

import { alphabeticShift as als } from './alphabeticShift'

test('for "crazy"', () => {
  expect(als('crazy')).toBe('dsbaz')
})

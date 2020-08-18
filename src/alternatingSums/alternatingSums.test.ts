import { alternatingSums } from './alternatingSums'

test('[50, 60, 60, 45, 70] should be [180, 105]', () => {
  const xs = [50, 60, 60, 45, 70]

  expect(alternatingSums(xs)).toEqual([180, 105])
})

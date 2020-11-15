import { avoidObstacles } from './avoidObstacles'

test('avoid obstacles', () => {
  expect(avoidObstacles([5, 3, 6, 7, 9])).toEqual(4)
})

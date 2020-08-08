import { addBorder } from './addBorder'

describe('Add border', () => {
  it('adds border of asterisks', () => {
    expect(addBorder(['abc', 'ded'])).toEqual([
      '*****',
      '*abc*',
      '*ded*',
      '*****',
    ])
  })
})

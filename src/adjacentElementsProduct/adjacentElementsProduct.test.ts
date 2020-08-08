import { adjacentElementsProduct } from './adjacentElementsProduct'

describe('adjacentElementsProduct', () => {
  it('pair of adjacent elements that has the largest product', () => {
    const xs1 = [3, 6, -2, -5, 7, 3]
    const xs2 = [3, 6, -2, -5, 7, 4]

    expect(adjacentElementsProduct(xs1)).toBe(21)
    expect(adjacentElementsProduct(xs2)).toBe(28)
  })
})

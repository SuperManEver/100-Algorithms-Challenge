function multiply([a, b]: [number, number]): number {
  return a * b
}

export function adjacentElementsProduct(xs: number[]): number {
  const pairs = []

  for (let i = 0; i < xs.length; i += 2) {
    const pair: [number, number] = [xs[i], xs[i + 1]]
    pairs.push(pair)
  }

  return pairs.reduce((max, curr) => {
    if (multiply(curr) > max) {
      return multiply(curr)
    }

    return max
  }, 0)
}

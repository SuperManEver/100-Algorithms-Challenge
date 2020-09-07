export function searchSmallerFromRight(xs: number[], search: number): number {
  let smaller = -1

  for (let i = xs.length - 1; i >= 0; i--) {
    if (xs[i] < search) {
      smaller = xs[i]
      break
    }
  }

  return smaller
}

function arrayPreviousLess(xs: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < xs.length; i++) {
    const item = searchSmallerFromRight(xs.slice(0, i), xs[i])
    result.push(item)
  }

  return result
}

export default arrayPreviousLess

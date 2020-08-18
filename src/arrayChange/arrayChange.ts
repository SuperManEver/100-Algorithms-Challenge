export function arrayChange(xs: number[]): number {
  let increment = 0

  for (let i = 0; i < xs.length; i++) {
    if (i === 0) {
      continue
    }

    if (xs[i] <= xs[i - 1]) {
      while (xs[i] <= xs[i - 1]) {
        xs[i] += 1
        increment++
      }
      continue
    }
  }

  return increment
}

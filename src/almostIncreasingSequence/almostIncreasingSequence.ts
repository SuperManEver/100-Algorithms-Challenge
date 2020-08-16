export function almostIncreasingSequence(xs: number[]): boolean {
  const sorted = [...xs].sort()

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] > xs[i + 1]) {
      const temp = xs[i]
      xs[i] = xs[i + 1]
      xs[i + 1] = temp
    }
  }

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === sorted[i]) {
      continue
    }

    return false
  }

  return true
}

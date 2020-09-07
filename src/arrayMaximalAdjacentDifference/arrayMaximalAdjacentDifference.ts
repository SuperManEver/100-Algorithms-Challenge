export function absDiff(xs: number[]): number {
  return xs.reduce((acc, n) => Math.abs(acc - n), 0)
}

function arrayMaximalAdjacentDifference(xs: number[]): number {
  let max = 0

  for (let i = 0; i < xs.length; i++) {
    const conseq = xs.slice(i, i + 2)

    const temp = absDiff(conseq)

    if (temp > max) {
      max = temp
    }
  }

  return max
}

export default arrayMaximalAdjacentDifference

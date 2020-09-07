export function sum(xs: number[]): number {
  return xs.reduce((acc, n) => acc + n, 0)
}

function arrayMaxConsecutiveSum(xs: number[], k: number): number {
  let max = 0

  for (let i = 0; i < xs.length; i++) {
    const conseq = xs.slice(i, i + k)

    const temp = sum(conseq)

    if (temp > max) {
      max = temp
    }
  }

  return max
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))

export default arrayMaxConsecutiveSum

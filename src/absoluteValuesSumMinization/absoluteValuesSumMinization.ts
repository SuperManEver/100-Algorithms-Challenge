function absoluteValuesSumMinimization(a: number[]): number {
  return a.reduce((acc, n) => acc + n)
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]))

export function areSimilar(a: number[], b: number[]): boolean {
  const aStr = a.sort().join('')
  const bStr = b.sort().join('')

  return aStr === bStr
}

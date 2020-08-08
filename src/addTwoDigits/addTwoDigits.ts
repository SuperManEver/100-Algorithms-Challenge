export function addTwoDigits(n: number): number {
  const numStr: string = n + ''
  const [a, b] = numStr.split('')

  return parseInt(a) + parseInt(b)
}

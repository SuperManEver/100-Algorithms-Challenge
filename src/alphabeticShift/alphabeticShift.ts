export function alphabeticShift(inputString: string): string {
  const xs: string[] = inputString.split('')

  const nums: number[] = xs.map((ch) => ch.charCodeAt(0))

  return nums
    .map((n) => (n + 1) % 97)
    .map((n) => (n % 26) + 97)
    .map((n) => String.fromCharCode(n))
    .join('')
}

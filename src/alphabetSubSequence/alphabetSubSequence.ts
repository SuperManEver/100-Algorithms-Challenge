export function alphabetSubsequence(s: string): boolean {
  const xs = s.split('').map((ch) => ch.charCodeAt(0))

  for (let i = 0; i < xs.length; i++) {
    if (i === 0) {
      continue
    }

    if (xs[i - 1] < xs[i]) {
      continue
    } else {
      return false
    }
  }

  return true
}

function sum(xs: number[]): number {
  return xs.reduce((acc, n) => acc + n)
}

export function alternatingSums(xs: number[]): number[] {
  let alternate = true
  const team_1 = []
  const team_2 = []

  for (let i = 0; i < xs.length; i++) {
    if (alternate) {
      team_1.push(xs[i])
    } else {
      team_2.push(xs[i])
    }

    alternate = !alternate
  }

  return [sum(team_1), sum(team_2)]
}

const compare = (a: string, b: string): number => {
  if (a.length < b.length) {
    return 1
  }

  if (a.length > b.length) {
    return -1
  }

  return 0
}

export function allLongestStrings(xs: string[]): string[] {
  const descrease = xs.sort(compare)

  let i = 0

  for (let len = descrease.length; i < len; i++) {
    if (descrease[i].length !== descrease[i + 1].length) {
      break
    }
  }

  return descrease.slice(0, i + 1)
}

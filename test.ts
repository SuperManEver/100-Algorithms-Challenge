const xs = ['aba', 'aa', 'ad', 'vcd', 'aba']

const compare = (a: string, b: string): number => {
  if (a.length < b.length) {
    return 1
  }

  if (a.length > b.length) {
    return -1
  }

  return 0
}

const res = xs.sort(compare)

console.log(res)

function mult(n: number, m: number): number {
  return n * m
}

function add(n: number, m: number): number {
  return n + m
}

export function arrayConversion(xs: number[]): number {
  let iter = 1

  while (xs.length > 1) {
    const temp = []

    const op = iter % 2 === 0 ? mult : add

    for (let i = 0; i < xs.length; i += 2) {
      if (i + 1 < xs.length) {
        temp.push(op(xs[i], xs[i + 1]))
      }
    }

    xs = temp
    iter += 1
  }

  return xs[0]
}

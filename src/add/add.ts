export function add(param1: number, param2: number): number {
  return param1 + param2
}

export function add2(...args: number[]): number {
  return args.reduce((acc, n) => acc + n)
}

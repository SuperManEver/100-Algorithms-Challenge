function arrayReplace(
  xs: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return xs.map((n) => (n === elemToReplace ? substitutionElem : n))
}

export default arrayReplace

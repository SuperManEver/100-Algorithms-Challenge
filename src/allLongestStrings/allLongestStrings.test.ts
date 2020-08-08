import { allLongestStrings } from './allLongestStrings'

describe('allLongestStrings', () => {
  it('return another array containing all of its longest strings', () => {
    const xs = ['aba', 'aa', 'ad', 'vcd', 'aba']

    expect(allLongestStrings(xs)).toEqual(['aba', 'vcd', 'aba'])
    expect(
      allLongestStrings(['aba', 'aa', 'aca', 'ad', 'vcd', 'aba'])
    ).toEqual(['aba', 'aca', 'vcd', 'aba'])
  })
})

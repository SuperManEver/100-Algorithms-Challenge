import { times } from 'ramda'

export function addBorder(picture: string[]): string[] {
  const temp = picture.map((x) => `*${x}*`)

  const num = temp[0].length

  let border = ''

  times(() => (border += '*'), num)

  return [border, ...temp, border]
}

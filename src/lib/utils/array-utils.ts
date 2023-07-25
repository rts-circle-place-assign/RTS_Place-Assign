export const deduplicate = <K>(arr: K[]) => {
  return arr.sort().filter(function (item, pos, ary) {
    return !pos || item !== ary[pos - 1]
  })
}

export const shuffle = <T>(arr: T[]): T[] => {
  const copy = arr.concat()
  const length = copy.length
  for (let i = length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

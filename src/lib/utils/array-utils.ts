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

// table要素をObj[]にする関数
export const toArrayObjects = (table: HTMLElement) => {
  const columns = Array.from(table.querySelectorAll('th')).map(heading => heading.textContent)
  const rows = table.querySelectorAll('tbody > tr')
  return Array.from(rows).map(row => {
    const dataCells = Array.from(row.querySelectorAll('td'))
    return columns.reduce((obj, column, index) => {
      // @ts-ignore
      obj[column!] = dataCells[index].textContent
      return obj
    }, {})
  })
}

import { Circle } from '~/type'

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

// 複数の関数の要素を全て組み合わせて一つの配列にする関数
export const makeComb = (...array) => {
  // 2つの配列の組み合わせを作る関数
  const make = (arr1, arr2) => {
    // 組み合わせ作成時の例外処理
    if (arr1.length === 0) {
      return arr2
    }
    // 組み合わせの作成
    return arr1.reduce((arr, v1) => {
      arr2.forEach(v2 => {
        // concatで結合
        const group = [].concat(v1, v2)
        arr.push(group)
      })
      return arr
    }, [])
  }

  // 繰り返し処理
  return array.reduce(make, [])
}

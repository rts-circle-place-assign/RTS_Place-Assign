import mediacodeList from '../../../assets/data/mediacode.json'
import sakuhinList from '../../../assets/data/sakuhincode.json'
import spaceList from '../../../assets/data/spacenum.json'
import {
  Circle,
  MediaSet,
  SakuhinSet,
  SpaceSet,
  CutInfo,
  FriendCodeInfo,
  CircleMinInfo,
  PlaceAssignBaseInfo,
} from './type'
export * from './type'

export function getSum(circles: Circle[]): number {
  return circles.length
}

export function useKikakuCard(kikakuAll: Circle[]): number[] {
  return kikakuAll.map(k => k.id)
}

export function useKikakuCardById(
  kikakuAll: Circle[],
  id: number
): Circle | undefined {
  return kikakuAll.find((k: Circle) => k.id === id)
}

export function getJointCircle(
  all: Circle[],
  circle: Circle
): Circle | undefined | CircleMinInfo {
  // const thisCircle = getCircleById(circle.id)! //合体元サークルのデータ
  const thisMsId = circle.msnum // 合体元サークルの「合体受付番号」=相手のMS申込番号
  const jointTo = all.find((h: Circle) => h.gattainum === thisMsId) // MS申込番号で検索、合体先サークルのデータを取得
  if (jointTo === undefined || thisMsId === '') {
    return {
      id: 9999,
      circlename: '該当なし',
      penname: '該当なし',
      mediacode: 99,
      sakuhincode: 'ZZZ',
      seijin: 0,
    }
  }
  // console.log(jointTo?.id)
  return jointTo
}

export function cutURL(circle: Circle): string {
  const fileId = circle.cutId
  return 'https://drive.google.com/uc?id=' + fileId
}

export function getMedia(circle: Circle): string {
  const mc = circle.mediacode
  if (typeof mc === 'undefined') {
    return ''
  } else {
    // const mediacodeList: MediaSet[] = require('../../../assets/data/mediacode.json')
    const media = mediacodeList.find(k => k.code === mc)
    return mc + '（' + media?.media + '）'
  }
}

export function getSakuhin(circle: Circle): string {
  const wc = circle.sakuhincode
  if (typeof wc === 'undefined') {
    // console.log(wc)
    return ''
  } else {
    // const sakuhinList: SakuhinSet[] = require('../../../assets/data/sakuhincode.json')
    const hankakuWc = wc?.replace(/[Ａ-Ｚ]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    })
    const sakuhin = sakuhinList.find(l => l.code === hankakuWc)
    return wc + '（' + sakuhin?.sakuhin + '）'
  }
}

export function isAdult(circle: Circle): boolean | undefined {
  return circle.seijin !== 0
}

export function isAdultString(circle: Circle): string {
  const Adult = isAdult(circle)
  if (typeof Adult === 'undefined') {
    return '記入なし'
  } else {
    return Adult === false ? 'なし' : 'あり'
  }
}

export function spaceKind(circle: Circle): string | undefined {
  const spnum = Number(circle.spnum)
  const spacenumData: SpaceSet[] = spaceList
  const spaceset = spacenumData.find((i: SpaceSet) => i.num === spnum)
  if (typeof spaceset === 'undefined') {
    console.log(circle.id)
  } else {
    return spaceset.space
  }
}

export function spKind(spnum: number): string | undefined {
  const spacenumData: SpaceSet[] = spaceList
  const spaceset = spacenumData.find((i: SpaceSet) => i.num === spnum)
  if (typeof spaceset === 'undefined') {
    console.log(spnum)
  } else {
    return spaceset.space
  }
}

export function spNum(circle: Circle): number | undefined {
  return circle.spnum === 1 ? 1 : 2
}

export function getSpNum(circles: Circle[]) {
  // 該当するサークルの合計スペース数を算出
  const one = circles.filter(circle => circle.spnum === 1)
  const other = circles.filter(circle => circle.spnum >= 2)
  return one.length + other.length * 2
}

export function isJoint(circle: Circle): boolean {
  return circle.gattainum !== ''
}

export function twitterURL(circle: Circle): string {
  const twitterId = circle.twitter
  return twitterId === '' ? '' : 'https://twitter.com/' + twitterId
}

export function pixivURL(circle: Circle): string {
  const pixivId = circle.pixiv
  return pixivId === '' ? '' : 'https://www.pixiv.net/users/' + pixivId
}

export function webURL(circle: Circle): string {
  const web = circle.web
  if (typeof web === 'undefined') {
    return ''
  } else {
    return web === 'http://' ? '' : web
  }
}

export function breakNewLine(circle: Circle): string {
  return circle.hosoku.replace(/(㊦)/g, '<br>')
}

export function jointJudge(
  circle: Circle,
  jointCircle: Circle,
  item: string
): boolean {
  const thisCircleItem = circle[item as keyof typeof circle]
  if (jointCircle === undefined) {
    return false
  } else {
    const jointCircleItem = jointCircle[item as keyof typeof jointCircle]!
    return thisCircleItem === jointCircleItem
  }
}

export function cutKikaku(circle: Circle) {
  const sp = circle.spnum
  if (sp === 1) {
    return {
      width: 945,
      height: 945,
    }
  } else {
    return {
      width: 1925,
      height: 945,
    }
  }
}

export function cutJudge(
  circle: Circle,
  realWidth: number,
  realHeight: number
) {
  const kikaku = cutKikaku(circle)
  return !!(kikaku.height === realHeight && kikaku.width === realWidth)
}

export function filterItem(all: Circle[], item: string) {
  return all.filter(circle => circle[item as keyof typeof circle] !== '')
}

export function sortCircles(all: Circle[], item: string) {
  const friends = filterItem(all, item)
  const sort = friends.sort((a, b) => {
    const smalla = a.friendCode!.toString().toLowerCase()
    const smallb = b.friendCode!.toString().toLowerCase()
    if (smalla < smallb) return -1
    else if (smalla > smallb) return 1
    return 0
  })
  return sort
}

export function FrinedCodeCircles(all: Circle[], code: string) {
  const friends = filterItem(all, 'friendCode')
  return friends.filter(circle => circle.friendCode === code)
}

export function count(all: Circle[], item: string) {
  const friends = filterItem(all, 'friendCode')
  const groupBy = friends.reduce((result, current) => {
    const element = result.find(
      // @ts-ignore
      value => value.code === current[item as keyof typeof value]
    )
    if (element) {
      element.count++
    } else {
      result.push({
        // @ts-ignore
        code: current[item as keyof typeof value],
        count: 1,
        circles: [],
        different: false,
        codeDifferent: false,
      })
    }
    return result
  }, [] as FriendCodeInfo[])
  return groupBy as FriendCodeInfo[]
}

export function useCircles(all: Circle[], item: string) {
  // itemごとにソートし、サークル数を算出。
  const countCircles = count(all, item)
  countCircles.map(element => {
    const code = element.code
    const circles = FrinedCodeCircles(all, code)
    element.circles = circles
  })
  return countCircles
}

export function planDifferenet(all: Circle[]) {
  // 申込プラン大分類の異なるサークル同士がなかよしコードを利用している例を出す。
  const countCircles = useCircles(all, 'friendCode')
  const ccc = countCircles.map(a => {
    const codes = a.circles.map(d => d.spnum) // 各サークルのspnum配列を返す（重複あり）[4,1,1,1]
    const uniqueCodes = Array.from(new Set(codes)) // 重複しているspnumが削除された状態の配列を返す [4,1]
    const sum = uniqueCodes.reduce((a, b) => a + b) // 配列の和（申込プランの和）を算出
    const judge = uniqueCodes.length >= 2 && sum >= 4 // 申込プラン大分類が異なる場合は、配列の要素数が2以上かつ要素数の和が4以上であるとき。trueを返す
    a.different = judge // differentに項目を追加
    return a
  })
  return ccc
}

export function codeDifferent(all: Circle[], item: string) {
  // なかよしコード利用サークルの間でコードが異なる例を出す。
  const countCircles = useCircles(all, 'friendCode')
  const ccc = countCircles.map(a => {
    const codes = a.circles.map(d => d[item as keyof typeof d]) // 各サークルの<item>ごとの配列を返す（重複あり）[A, A, A, B]
    const uniqueCodes = Array.from(new Set(codes)) // 重複分を削除した配列を返す [A, B]
    const judge = uniqueCodes.length >= 2 // コードが異なる、つまり重複削除後の配列の要素数が2以上であるものをtrueとする。
    a.codeDifferent = judge
    return a
  })
  return ccc
}

export function mediaSort(all: Circle[], mc: number) {
  // メディアコードごとのサークル数
  return all.filter(circle => circle.mediacode! === mc).length
}

export function getToNgram(text: string, n: number = 3) {
  const ret: { [key: string]: number } = {}
  for (let m = 0; m < n; m++) {
    for (let i = 0; i < text.length - m; i++) {
      const c = text.substring(i, i + m + 1)
      ret[c] = ret[c] ? ret[c] + 1 : 1
    }
  }
  return ret
}

export function getValuesSum(object: { [key: string]: number }) {
  return Object.values(object).reduce((prev, current) => prev + current, 0)
}

export function calculate(a: string, b: string) {
  const aGram = getToNgram(a)
  const bGram = getToNgram(b)
  const keyOfAGram = Object.keys(aGram)
  const keyOfBGram = Object.keys(bGram)
  // aGramとbGramに共通するN-gramのkeyの配列
  const abKey = keyOfAGram.filter(n => keyOfBGram.includes(n))

  // aGramとbGramの内積(0と1の掛け算のため、小さいほうの値を足し算すれば終わる。)
  const dot = abKey.reduce(
    (prev, key) => prev + Math.min(aGram[key], bGram[key]),
    0
  )

  // 長さの積(平方根の積は積の平方根)
  const abLengthMul = Math.sqrt(getValuesSum(aGram) * getValuesSum(bGram))
  return dot / abLengthMul
}

//　ここから配置管理ファイル系の処理
export function reAssign(all: Circle[]) {
  const base = [] as PlaceAssignBaseInfo[]
  all.forEach(circle => {
    if (circle.hanpu1amount === undefined) {
      return 0
    }
    if (circle.hanpu2amount === undefined) {
      return 0
    }
    if (circle.hanpu3amount === undefined) {
      return 0
    }
    if (circle.hanpu4amount === undefined) {
      return 0
    }
    if (circle.hanpu5amount === undefined) {
      return 0
    }
    const twitter =
      circle.twitter === '' ? '' : 'https://twitter.com/' + circle.twitter
    const web = circle.web === 'http://' ? '' : circle.web
    const pixiv =
      circle.pixiv === '' ? '' : 'https://www.pixiv.net/users/' + circle.pixiv
    const strBase = ''
    const forSort = strBase.concat(
      String(circle.mediacode),
      String(circle.seijin),
      circle.sakuhincode,
      String(circle.id)
    )
    const aaa = {
      id: circle.id,
      circlename: circle.circlename,
      penname: circle.penname,
      sakuhincode: circle.sakuhincode,
      mediacode: circle.mediacode,
      seijin: circle.seijin,
      amount:
        Number(circle.hanpu1amount) +
        Number(circle.hanpu2amount) +
        Number(circle.hanpu3amount) +
        Number(circle.hanpu4amount) +
        Number(circle.hanpu5amount),
      web,
      pixiv,
      twitter,
      spnum: circle.spnum,
      forSort,
      paId: 0,
    }
    base.push(aaa)
    return base
  })
  return base
}

export function placeAssignMaster(all: Circle[]) {
  const base = reAssign(all)
  base.forEach((circle, index, base) => {
    if (circle.spnum >= 2) {
      base.push(circle)
    }
  })
  const sort = base.sort((a, b) => {
    const smalla = a.forSort.toString().toLowerCase()
    const smallb = b.forSort.toString().toLowerCase()
    if (smalla < smallb) return -1
    else if (smalla > smallb) return 1
    return 0
  })
  return sort
}

export function getSakuhinByCode(code: string, sakuhinList: SakuhinSet[]) {
  const result = sakuhinList.find(sakuhin => sakuhin.code === code)
  return result === undefined ? '' : result.sakuhin
}

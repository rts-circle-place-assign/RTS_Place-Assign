import mediacodeList from '../../../assets/data/mediacode.json'
import sakuhinList from '../../../assets/data/sakuhincode.json'
import spaceList from '../../../assets/data/spacenum.json'
import charaList from '../../../assets/data/sakuhinchara.json'
import goodsList from '../../../assets/data/goods.json'
import {
  Circle,
  SakuhinSet,
  SpaceSet,
  BothCircle,
  FriendCodeInfo,
  CircleMinInfo,
  PlaceAssignBaseInfo,
  ResultArr,
} from './type'
export * from './type'
export * from './management'

export function getSum(circles: Circle[]): number {
  return circles.length
}

export function useKikakuCard(kikakuAll: Circle[]): number[] {
  return kikakuAll.map(k => k.id)
}

export function useKikakuCardById(kikakuAll: Circle[], id: number): Circle {
  const result = kikakuAll.find((k: Circle) => k.id === id)
  return result === undefined ? [] : result
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

export function cutURL(id: string): string {
  return 'https://drive.google.com/uc?id=' + id
}

export function getMedia(
  mc: number | string | null,
  isBr: boolean = false
): string {
  if (mc !== '' || mc !== null) {
    const media = mediacodeList.find(k => k.code === mc)
    if (isBr === true) {
      return mc + '<br />（' + media?.media + '）'
    } else {
      return mc + '（' + media?.media + '）'
    }
  } else {
    return ''
  }
}

export function isOtherMedia(mc: number | null): boolean {
  const others = [12, 24, 36, 90]
  return others.includes(mc)
}

export function switchGenre(circle: Circle) {
  if (circle.mediacode === 12) {
    return circle.bookgenre
  } else if (circle.mediacode === 24) {
    return circle.musicgenre
  } else if (circle.mediacode === 36) {
    return circle.goodsgenre
  } else {
    return ''
  }
}

export function getSakuhin(wc: string, isBr: boolean = false): string {
  if (wc !== '') {
    const hankakuWc = wc?.replace(/[Ａ-Ｚ]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    })
    const sakuhin = sakuhinList.find(l => l.code === hankakuWc)
    if (isBr === true) {
      return wc + '<br />（' + sakuhin?.sakuhin + '）'
    } else {
      return wc + '（' + sakuhin?.sakuhin + '）'
    }
  } else {
    return ''
  }
}

export function isAdult(num: number): boolean {
  return num !== 0
}

export function isAdultString(num: number): string {
  if (num === 0) {
    return 'なし'
  } else {
    return 'あり'
  }
}

export function spKind(spnum: number | string): string | undefined {
  const useNum = Number(spnum)
  const spacenumData: SpaceSet[] = spaceList
  const spaceset = spacenumData.find((i: SpaceSet) => i.num === useNum)
  if (typeof spaceset === 'undefined') {
    return ''
  } else {
    return spaceset.space
  }
}

export function spNum(spnum: number | string): number {
  const useNum = Number(spnum)
  return useNum === 1 ? 1 : 2
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

export function isMatchCharaHosoku(circle: Circle): boolean {
  const sakuhinSet = charaList.find(set => set.code === circle.sakuhincode)
  const matchCharaArr = sakuhinSet.chara.map(chara => {
    // charaの配列の要素それぞれについて、正規表現regを定めてキャラ・CP欄入力内容に部分一致するかどうか判定しresultとして出力。部分一致したならその内容が、しなかったらnullが返る。
    const reg = new RegExp(chara)
    const isMatchBookChara = circle.bookcharacter.match(reg)
    return isMatchBookChara
  })
  const nullCharaNum = matchCharaArr.filter(item => item === null).length
  const isNullCharaArr = matchCharaArr.length === nullCharaNum

  const matchHosokuArr = sakuhinSet.chara.map(chara => {
    // charaの配列の要素それぞれについて、正規表現regを定めて補足説明欄入力内容に部分一致するかどうか判定しresultとして出力。部分一致したならその内容が、しなかったらnullが返る。
    const reg = new RegExp(chara)
    const isMatchBookHosoku = circle.hosoku.match(reg)
    return isMatchBookHosoku
  })
  // console.log(matchHosokuArr)
  const nullHosokuNum = matchHosokuArr.filter(item => item === null).length
  const isNullHosokuArr = matchHosokuArr.length === nullHosokuNum
  return isNullCharaArr && isNullHosokuArr === true
}

export function isMatchGoods(circle: Circle): boolean {
  const goodsSet = goodsList.find(set => set.code === circle.mediacode)
  const matchGoodsArr = goodsSet.goods.map(goods => {
    // goodsの配列の要素それぞれについて、正規表現regを定めてグッズジャンル欄入力内容に部分一致するかどうか判定しresultとして出力。部分一致したならその内容が、しなかったらnullが返る。
    const reg = new RegExp(goods)
    const isMatchGoodsGenre = circle.goodsgenre.match(reg)
    return isMatchGoodsGenre
  })
  const nullGoodsNum = matchGoodsArr.filter(item => item === null).length
  const isNullGoodsArr = matchGoodsArr.length === nullGoodsNum

  const matchHosokuArr = goodsSet.goods.map(goods => {
    // goodsの配列の要素それぞれについて、正規表現regを定めて補足説明欄入力内容に部分一致するかどうか判定しresultとして出力。部分一致したならその内容が、しなかったらnullが返る。
    const reg = new RegExp(goods)
    const isMatchGoodsHosoku = circle.hosoku.match(reg)
    return isMatchGoodsHosoku
  })
  const nullHosokuNum = matchHosokuArr.filter(item => item === null).length
  const isNullHosokuArr = matchHosokuArr.length === nullHosokuNum
  return isNullGoodsArr && isNullHosokuArr === true
}

export function isMatchCosplay(circle: Circle, head: string) {
  const cosplaySet = ['コスプレ', '写真集', 'ROM']
  const matchCosplayArr = cosplaySet.map(item => {
    const reg = new RegExp(item)
    const itemName = circle[head as keyof Circle] as string
    if (typeof itemName !== 'string') {
      return null
    } else {
      return itemName.match(reg)
    }
  })
  // console.log([circle.id, matchCosplayArr])
  const nullNum = matchCosplayArr.filter(item => item === null).length
  const isNullArr = nullNum === 3 // 全部nullであればtrue
  return isNullArr
}

export function isCircleMatchCosplay(circle: Circle) {
  const circleData = [
    'hosoku',
    'hanpu1name',
    'hanpu2name',
    'hanpu3name',
    'hanpu4name',
    'hanpu5name',
  ] // 「コスプレ」「写真集」という文字列が入っているかどうか確認する項目の見出し
  const isCosplay = circleData.map(item => isMatchCosplay(circle, item)) // ↑の文字がないかどうか、circleDataの各項目それぞれに対して確認（なければtrue） [false, false, true, ... , false]
  const trueNum = isCosplay.filter(item => item === false).length // isCosplayの中にfalseが何回出てくるか
  // console.log([circle.id, isCosplay])
  return trueNum !== 0 // 1回でも出てきたら確認対象。
}

export function jointJudge(
  circle: Circle,
  jointCircle: Circle,
  item: string
): boolean {
  // 合体サークル間でitemの項目が一致しているかどうか判定する関数。一致していたらtrueを返す。
  const thisCircleItem = circle[item as keyof typeof circle]
  if (jointCircle === undefined || jointCircle.circleid === 9999) {
    return false
  } else {
    const jointCircleItem = jointCircle[item as keyof typeof jointCircle]!
    return thisCircleItem === jointCircleItem
  }
}

export function jointJudgeArr(all: Circle[], item: string): BothCircle[] {
  const judgeArr = all.map(circle => {
    if (circle.gattainum !== '') {
      return {
        thisCircle: circle,
        jointCircle: getJointCircle(all, circle) as Circle,
        // @ts-ignore
        different: jointJudge(circle, getJointCircle(all, circle), item),
      }
    }
  })
  const noUndefinedArr = judgeArr.filter(
    (item): item is Exclude<typeof item, undefined> => item !== undefined
  )
  return noUndefinedArr
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
    const judge = uniqueCodes.length > 1 // コードが異なる、つまり重複削除後の配列の要素数が2以上であるものをtrueとする。
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

export function getAllCircleNum(arr: ResultArr[]) {
  return arr.reduce((acc, val) => acc + val.circles.length, 0)
}

export function getAllSpNum(arr: ResultArr[]) {
  return arr.reduce((acc, val) => acc + getSpNum(val.circles), 0)
}

export function getSakuhinByCode(code: string, sakuhinList: SakuhinSet[]) {
  const result = sakuhinList.find(sakuhin => sakuhin.code === code)
  return result === undefined ? '' : result.sakuhin
}

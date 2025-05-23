import sakuhinList from '~/assets/data/sakuhincode.json'
import mediaList from '~/assets/data/mediacode_management.json'
import { getJointCircle, getSpNum, spaceKind, spNum, useCircles } from '~/lib/hooks'
import { Circle, SakuhinRecord, SakuhinSet, PastGaisyuInfo, PlaceAssignBaseInfo } from '~/type'

// ここから配置管理ファイル系の処理
export function reAssign(all: Circle[], beforeData: PastGaisyuInfo[]): PlaceAssignBaseInfo[] {
  const arr = all.map(circle => {
    // ソート用の配列を作る。
    const twitter = circle.twitter === '' ? '' : 'https://twitter.com/' + circle.twitter
    const web = circle.web === 'http://' ? '' : circle.web
    const pixiv = circle.pixiv === '' ? '' : 'https://www.pixiv.net/users/' + circle.pixiv
    // ソート用の文字列を作る。
    const strBase = ''
    // なかよしコード利用有無で採番。なかよしコードをソートして00から採番し、なかよしコードを利用していなければ99にする。
    const friendCodeArr = all.map(circle => circle.friendCode).filter(code => code !== undefined)
    const uniqueFriendCodeArr = [...new Set(friendCodeArr)].sort()
    const friendCodeNum = uniqueFriendCodeArr.indexOf(circle.friendCode)
    const zeroPaddingFriendCodeNum = ('00' + friendCodeNum).slice(-2)
    const friendCode = circle.friendCode === '' ? '99' : zeroPaddingFriendCodeNum

    const SpKindOL = () => {
      if (circle.gattainum) {
        const jointCircle = getJointCircle(all, circle) as Circle
        const jointSpNum = spNum(circle.spnum) + spNum(jointCircle!.spnum)
        switch (jointSpNum) {
          case 4:
            return 'A'
          case 3:
            return 'B'
          case 2:
            return 'C'
        }
      } else {
        return circle.spnum === 1 ? 'Y' : 'X'
      }
    }
    const smallSortNum = circle.spnum === 1 ? circle.msnum : circle.rtsId
    const forSort = strBase.concat(
      spaceKind(circle.spnum),
      String(friendCode),
      String(circle.mediacode),
      String(circle.seijin),
      circle.sakuhincode,
      String(SpKindOL()),
      String(smallSortNum)
    )
    const beforeResultArr = beforeData.find(k => k.circlename === circle.circlename)
    const circleHyouka = (item: string) => {
      if (typeof beforeResultArr === 'undefined') {
        return ''
      } else {
        return beforeResultArr[item as keyof typeof beforeResultArr]
      }
    }
    const best = circleHyouka('best')
    const konzatsu = circleHyouka('konzatsu')
    const returnData = {
      id: circle.id,
      msnum: circle.msnum,
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
      best,
      konzatsu,
    }
    return returnData
  })
  return arr
}

export function placeAssignMaster(all: Circle[], beforeData: PastGaisyuInfo[]) {
  const base = reAssign(all, beforeData)
  base.forEach((circle, index, base) => {
    if (circle.spnum === 2) {
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

export function sakuhinCodeSpNum(all: Circle[]) {
  const notDigiAna = all.filter(circle => circle.spnum <= 2)
  const resultArr = [] as SakuhinRecord[]
  const adultList = [0, 1]
  mediaList.forEach(media => {
    if (media.code === 10) {
      // メディアコード10番のみ作品コードで分けるため、code === 10のみ作品コードを入力する。他のメディアコードではundefinedなので'-'を返す。
      adultList.forEach(adult => {
        sakuhinList.forEach(sakuhin => {
          const tenCricles = notDigiAna.filter(
            circle => circle.mediacode === 10 && circle.seijin === adult && circle.sakuhincode === sakuhin.code
          )
          const friend = tenCricles.filter(circle => circle.friendCode !== '')
          const notfriend = tenCricles.filter(circle => circle.friendCode === '')
          const pushArr = {
            mediacode: media.code,
            media: media.media,
            sakuhincode: sakuhin.code,
            sakuhin: getSakuhinByCode(sakuhin.code, sakuhinList),
            adultNum: adult,
            adult: adult === 0 ? 'なし' : 'あり',
            friendSpNum: getSpNum(friend),
            notFriendSpNum: getSpNum(notfriend),
            forSort: String(adult) + media.code + sakuhin.code,
          }
          // console.log(String(adult) + media.code + sakuhin.code)
          resultArr.push(pushArr)
        })
      })
    } else {
      adultList.forEach(adult => {
        const otherCircles = notDigiAna.filter(circle => circle.mediacode === media.code && circle.seijin === adult)
        const friend = otherCircles.filter(circle => circle.friendCode !== '')
        const notfriend = otherCircles.filter(circle => circle.friendCode === '')
        resultArr.push({
          mediacode: media.code,
          media: media.media,
          adultNum: adult,
          adult: adult === 0 ? 'なし' : 'あり',
          friendSpNum: getSpNum(friend),
          notFriendSpNum: getSpNum(notfriend),
          sakuhincode: '-',
          sakuhin: '-',
          forSort: String(adult) + media.code,
        })
      })
    }
  })
  return resultArr
}

export function sakuhinRecordArr(all: Circle[]) {
  const resultArr = sakuhinCodeSpNum(all)
  const deletedArr = Array.from(new Map(resultArr.map(set => [set.forSort, set])).values())
  const sortedArr = deletedArr.sort((a, b) => {
    const smalla = a.forSort.toString().toLowerCase()
    const smallb = b.forSort.toString().toLowerCase()
    if (smalla < smallb) return -1
    else if (smalla > smallb) return 1
    return 0
  })
  return sortedArr
}

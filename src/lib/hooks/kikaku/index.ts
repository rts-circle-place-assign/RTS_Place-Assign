import { Circle, MediaSet, SakuhinSet } from './type'
export * from './type'
import mediacodeList from '../../../assets/data/mediacode.json'
import sakuhinList from '../../../assets/data/sakuhincode.json'

export function useKikakuCard(kikakuAll: Circle[]): number[] {
  return kikakuAll.map((k) => k.id)
}

export function useKikakuCardById(
  kikakuAll: Circle[],
  id: number
): Circle | undefined {
  return kikakuAll.find((k: Circle) => k.id === id)
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
    const media = mediacodeList.find((k) => k.code === mc)
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
    const sakuhin = sakuhinList.find((l) => l.code === hankakuWc)
    return wc + '（' + sakuhin?.sakuhin + '）'
  }
}

export function isAdult(circle: Circle): boolean | undefined {
  return circle.seijin === 0 ? false : true
}

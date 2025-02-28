<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { getSpNum } from '~/lib/hooks'
import { kaikiStoreType, Media } from '~/type/'
import mediaList from '~/assets/data/mediacode_management.json'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const notDigiAna = kikakuAll.value.filter(circle => circle.spnum <= 2)
const notFriend = notDigiAna.filter(circle => circle.friendCode === '') // 1紙時点ではなかよしコードの有無を第一段階に置く。
const sortedList = mediaList.map(media => {
  const mediaCircles = (mediaSet: Media) => {
    // この段階ではメディアコード10番のみ成年向け有無で分けるため、code === 10のみfilter条件にseijinを加えている。他は成年向け有無で分けないためcodeのみでfilter。
    if (mediaSet.code === 10 && mediaSet.adult === 0) {
      const tenNotAdult = notFriend.filter(circle => circle.mediacode === 10 && circle.seijin === 0)
      return getSpNum(tenNotAdult)
    } else if (mediaSet.code === 10 && mediaSet.adult === 1) {
      const tenAdult = notFriend.filter(circle => circle.mediacode === 10 && circle.seijin === 1)
      return getSpNum(tenAdult)
    } else {
      const other = notFriend.filter(circle => circle.mediacode === mediaSet.code)
      return other.length === 0 ? 0 : getSpNum(other)
    }
  }
  const isAdult = (mediaSet: Media) => {
    // この段階ではメディアコード10番のみ成年向け有無で分けるため、code === 10のみ「なし」「あり」を書く。他はundefinedなので'-'を返している。
    if (mediaSet.adult === undefined) {
      return '-'
    } else {
      return mediaSet.adult === 0 ? 'なし' : 'あり'
    }
  }
  const isNormal = (mediaSet: Media) => {
    // 99番は「落選」なので'-'を返す。他は「通常」を返す。
    return mediaSet.code === 99 ? '-' : '通常'
  }
  return {
    code: media.code,
    spNum: mediaCircles(media),
    media: media.media,
    adult: isAdult(media),
    adultNum: media.adult === undefined ? '-' : media.adult,
    class: isNormal(media),
    isFriendCode: false,
  }
})
const friendPlus = () => {
  const friendCircle = notDigiAna.filter(circle => circle.friendCode !== '')
  console.log(getSpNum(friendCircle))
  const digital = kikakuAll.value.filter(circle => circle.spnum === 4)
  const analog = kikakuAll.value.filter(circle => circle.spnum === 3)
  sortedList.push({
    code: 0,
    spNum: analog.length, // デジアナは2SPで1枚なので.lengthで問題ない
    media: 'アナログゲームプラン',
    adult: '-',
    adultNum: '-',
    class: '通常',
    isFriendCode: false,
  })
  sortedList.push({
    code: 0.5,
    spNum: digital.length,
    media: 'デジタルゲームプラン',
    adult: '-',
    adultNum: '-',
    class: '通常',
    isFriendCode: false,
  })
  sortedList.push({
    code: 1,
    spNum: getSpNum(friendCircle),
    media: 'なかよしコード',
    adult: '-',
    adultNum: '-',
    class: '通常',
    isFriendCode: true,
  })
  const sort = sortedList.sort((a, b) => {
    const smalla = a.code.toString().toLowerCase()
    const smallb = b.code.toString().toLowerCase()
    if (smalla < smallb) return -1
    else if (smalla > smallb) return 1
    return 0
  })
  return sort
}
</script>

<template>
  <client-only>
    <o-media-record
      v-for="(media, i) in friendPlus()"
      :key="i"
      :recordNum="i"
      :kaikiEn="kaikiEn"
      :media="media"
      :isMediaRecod="true"
    />
  </client-only>
</template>

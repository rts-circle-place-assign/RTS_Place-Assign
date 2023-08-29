<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { useKaikiStore } from '~/composables/useKaikiStore'
import mediaList from '~/assets/data/mediacode_management.json'
import sakuhinList from '~/assets/data/sakuhincode.json'
import { Circle, getSakuhinByCode, getSpNum } from '~/lib/hooks'
import { kaikiStoreType, SakuhinRecord } from '~/type/'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const all = kikakuAll.value as Circle[]
const notDigiAna = all.filter(circle => circle.spnum <= 2)
const adultList = [0, 1]
const resultArr = reactive([]) as SakuhinRecord[]
mediaList.forEach(media => {
  if (media.code === 10) {
    // メディアコード10番のみ作品コードで分けるため、code === 10のみ作品コードを入力する。他のメディアコードではundefinedなので'-'を返す。
    adultList.forEach(adult => {
      sakuhinList.forEach(sakuhin => {
        const tenCricles = notDigiAna.filter(
          circle =>
            circle.mediacode === 10 &&
            circle.seijin === adult &&
            circle.sakuhincode === sakuhin.code
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
      const otherCircles = notDigiAna.filter(
        circle => circle.mediacode === media.code && circle.seijin === adult
      )
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
const deletedArr = Array.from(
  new Map(resultArr.map(set => [set.forSort, set])).values()
)
const sortedArr = deletedArr.sort((a, b) => {
  const smalla = a.forSort.toString().toLowerCase()
  const smallb = b.forSort.toString().toLowerCase()
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})
</script>

<template>
  <client-only>
    <o-sakuhin-record
      v-for="(sakuhin, i) in sortedArr"
      :key="i"
      :recordNum="i"
      :kaikiEn="kaikiEn"
      :sakuhin="sakuhin"
    />
  </client-only>
</template>

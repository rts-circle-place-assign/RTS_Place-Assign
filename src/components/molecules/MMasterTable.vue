<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore, useBeforeResultStore } from '~/store/'
import { Circle, PlaceAssignBaseInfo, PastGaisyuInfo } from '~/lib/hooks'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const allData = kikakuAll.value as Circle[]
const beforeResultStore = useBeforeResultStore()
const { fetchBeforeResult } = beforeResultStore
await fetchBeforeResult()
const { beforeResult } = storeToRefs(beforeResultStore)
const beforeData = beforeResult.value as PastGaisyuInfo[]
const reassigned = allData.map(circle => {
  const twitter =
    circle.twitter === '' ? '' : 'https://twitter.com/' + circle.twitter
  const web = circle.web === 'http://' ? '' : circle.web
  const pixiv =
    circle.pixiv === '' ? '' : 'https://www.pixiv.net/users/' + circle.pixiv
  const strBase = ''
  const zeroPaddingId = ('0000' + circle.id).slice(-4)
  const isFriendCodeCircle = circle.friendCode !== '' ? 0 : 1
  const forSort = strBase.concat(
    String(isFriendCodeCircle),
    String(circle.mediacode),
    String(circle.seijin),
    circle.sakuhincode,
    String(zeroPaddingId)
  )
  const beforeResultArr = beforeData.find(
    k => k.circlename === circle.circlename
  )
  const circleHyouka = (item: string) => {
    if (typeof beforeResultArr === 'undefined') {
      return ''
    } else {
      return beforeResultArr[item as keyof typeof beforeResultArr]
    }
  }
  const best = circleHyouka('best')
  const konzatsu = circleHyouka('konzatsu') ? '○' : ''
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
}) as PlaceAssignBaseInfo[]
const jointedList = computed(() => {
  const base = reassigned
  reassigned.forEach((circle, index, base) => {
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
})
</script>

<template>
  <table class="check-table mt-12">
    <thead>
      <tr>
        <th>配置id</th>
        <th>申込データid</th>
        <!-- <th>MS申込番号</th> -->
        <th>メディアコード</th>
        <th>成年向け有無</th>
        <th>作品コード</th>
        <th>総搬入量</th>
        <th class="name">サークル名</th>
        <th class="name">ペンネーム</th>
        <th>前回外周抜き最高値</th>
        <th>前回混雑有</th>
        <th>web</th>
        <th>Pixiv</th>
        <th>Twitter</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in jointedList" :key="i">
        <td>{{ i + 1 }}</td>
        <td>
          <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
        </td>
        <td>{{ circle.mediacode }}</td>
        <td>{{ circle.seijin }}</td>
        <td>{{ circle.sakuhincode }}</td>
        <td
          :class="{
            'amount-mid': circle.amount >= 500 && circle.amount < 1000,
            'amount-many': circle.amount >= 1000,
          }"
        >
          {{ circle.amount }}
        </td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td>
          {{ circle.best }}
        </td>
        <td>
          {{ circle.konzatsu }}
        </td>
        <td>
          <a :href="circle.web" target="_blank" rel="noopener">{{
            circle.web
          }}</a>
        </td>
        <td>
          <a :href="circle.pixiv" target="_blank" rel="noopener">{{
            circle.pixiv
          }}</a>
        </td>
        <td>
          <a :href="circle.twitter" target="_blank" rel="noopener">{{
            circle.twitter
          }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
table {
  table-layout: fixed;
}
th,
td {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
  max-width: 60px;
  text-overflow: ellipsis;
  // font-size: .9rem;
}
.name {
  width: 200px;
  max-width: 100%;
}
.amount {
  &-mid {
    background-color: #ffff00;
  }
  &-many {
    background-color: #ffc000;
  }
}
</style>

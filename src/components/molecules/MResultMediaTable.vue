<script setup lang="ts">
import { storeToRefs } from 'pinia'
import mediaList from '~/assets/data/mediacode.json'
import { getSpNum, getMedia, isAdult } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const notAdultAllSpNum = getSpNum(kikakuAll.value.filter(circle => !isAdult(circle.seijin)))
const adultSpAllNum = getSpNum(kikakuAll.value.filter(circle => isAdult(circle.seijin)))
const digiAna = kikakuAll.value.filter(circle => circle.spnum >= 3)
const notDigiAna = kikakuAll.value.filter(circle => circle.spnum <= 2)
const first = [10, 20, 30, 90, 99]
const arr = mediaList.map(media => {
  const mediaCircles = notDigiAna.filter(circle => circle.mediacode === media.code)
  const notAdultCircles = mediaCircles.filter(circle => !isAdult(circle.seijin))
  const adultCircles = mediaCircles.filter(circle => isAdult(circle.seijin))
  const firstInfo = () => {
    if (first.includes(media.code)) {
      const rowspan = mediaList.filter(s => s.code >= media.code && s.code <= media.code + 8).length // 各メディアコード○番台の最初のコードのにみ設定。内容は各番台で合計すべきメディアコードの数。10番台なら10,11,12の3つ。
      const bandaiCircles = notDigiAna.filter(
        circle => circle.mediacode >= media.code && circle.mediacode < media.code + 9
      ) // 各メディアコード○番台の最初のコードのにみ設定。内容は、各番台の合計SP数。10番台なら10,11,12の各SP数の和。「10番台」を「10以上10+9未満」で指定している。
      const notAdultBandaiNum = getSpNum(bandaiCircles.filter(circle => !isAdult(circle.seijin)))
      const adultBandaiNum = getSpNum(bandaiCircles.filter(circle => isAdult(circle.seijin)))
      return {
        rowspan,
        notAdultBandaiNum,
        adultBandaiNum,
      }
    }
  }
  return {
    name: getMedia(media.code),
    notAdultSp: getSpNum(notAdultCircles),
    adultSp: getSpNum(adultCircles),
    rowspan: first.includes(media.code) ? firstInfo()!.rowspan : undefined,
    notAdultBandaiNum: first.includes(media.code) ? firstInfo()!.notAdultBandaiNum : undefined,
    adultBandaiNum: first.includes(media.code) ? firstInfo()!.adultBandaiNum : undefined,
  }
})
const notAdultNormalSpNum = arr.reduce((sum, e) => {
  return sum + e.notAdultSp
}, 0)
const adultNormalSpNum = arr.reduce((sum, e) => {
  return sum + e.adultSp
}, 0)
const notAdultDigiSpNum = getSpNum(digiAna.filter(circle => !isAdult(circle.seijin)))
const adultDigiAnaSpNum = getSpNum(digiAna.filter(circle => isAdult(circle.seijin)))
</script>

<template>
  <div class="mt-20">
    <table class="check-table">
      <thead>
        <tr>
          <th>メディアコード</th>
          <th>成年向けなし</th>
          <th>小計</th>
          <th>成年向けあり</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in arr" :key="i">
          <td>{{ set.name }}</td>
          <td>{{ set.notAdultSp }}</td>
          <td v-if="set.rowspan" :rowspan="set.rowspan">{{ set.notAdultBandaiNum }}</td>
          <td>{{ set.adultSp }}</td>
          <td v-if="set.rowspan" :rowspan="set.rowspan">{{ set.adultBandaiNum }}</td>
        </tr>
        <tr>
          <td>合計</td>
          <td :class="{ different: notAdultAllSpNum !== notAdultNormalSpNum + notAdultDigiSpNum }" colspan="2">
            {{ notAdultNormalSpNum }}
          </td>
          <td :class="{ different: adultSpAllNum !== adultNormalSpNum + adultDigiAnaSpNum }" colspan="2">
            {{ adultNormalSpNum }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

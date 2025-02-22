<script setup lang="ts">
import { storeToRefs } from 'pinia'
// import mediaList from '~/assets/data/mediacode.json'
import { getSpNum, getMedia, isAdult, getSakuhin } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'
import sakuhinList from '~/assets/data/sakuhincode.json'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
// const digiAna = kikakuAll.value.filter(circle => circle.spnum >= 3)
const notDigiAna = kikakuAll.value.filter(circle => circle.spnum <= 2)
const notAdult = notDigiAna.filter(circle => !isAdult(circle.seijin))
const adult = notDigiAna.filter(circle => isAdult(circle.seijin))
const arr = sakuhinList.map(sakuhin => {
  const notAdultSakuhinCircles = notAdult.filter(circle => circle.sakuhincode === sakuhin.code)
  const adultSakuhinCricles = adult.filter(circle => circle.sakuhincode === sakuhin.code)
  return {
    name: getSakuhin(sakuhin.code),
    notAdultSp: getSpNum(notAdultSakuhinCircles),
    adultSp: getSpNum(adultSakuhinCricles),
  }
})
</script>

<template>
  <div class="mt-20">
    <div class="check-table">
      <table>
        <thead>
          <tr>
            <th>作品コード</th>
            <th>成年向けなし</th>
            <th>成年向けあり</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(set, i) in arr" :key="i">
            <td>{{ set.name }}</td>
            <td>{{ set.notAdultSp }}</td>
            <td>{{ set.adultSp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

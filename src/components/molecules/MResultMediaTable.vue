<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import mediaList from '../../assets/data/mediacode.json'
import { getSpNum, getMedia, ResultArr, getAllCircleNum, getAllSpNum } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

interface UseResultArr extends ResultArr {
  code: number
  sum?: number
  rowspan?: number
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const resultArr = ref<UseResultArr[]>([])
const first = [10, 20, 30, 90, 99]
mediaList.forEach(set => {
  if (first.includes(set.code)) {
    const smallSum = mediaList.filter(s => s.code >= set.code && s.code <= set.code + 8).length
    resultArr.value.push({
      name: getMedia(set.code),
      code: set.code,
      circles: [],
      sum: 0,
      rowspan: smallSum,
    })
  } else {
    resultArr.value.push({
      name: getMedia(set.code),
      code: set.code,
      circles: [],
    })
  }
})
resultArr.value.map(set => {
  set.circles = kikakuAll.value.filter(circle => circle.mediacode === set.code)
  if (first.includes(set.code)) {
    const filteredCircles = kikakuAll.value.filter(
      circle => circle.mediacode >= set.code && circle.mediacode <= set.code + 8
    )
    set.sum = getSpNum(filteredCircles)
  }
})
const allCircleNum = getAllCircleNum(resultArr.value)
const allCircleSpNum = getAllSpNum(resultArr.value)
</script>

<template>
  <div class="mt-20">
    <table class="check-table">
      <thead>
        <tr>
          <th>メディアコード</th>
          <th>サークル数</th>
          <th>スペース数</th>
          <th>小計スペース数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in resultArr" :key="i">
          <td>{{ set.name }}</td>
          <td>{{ set.circles.length }}</td>
          <td>{{ getSpNum(set.circles) }}</td>
          <td v-if="set.rowspan" :rowspan="set.rowspan">{{ set.sum }}</td>
        </tr>
        <tr>
          <td>合計</td>
          <td :class="{ different: allCircleNum !== kikakuAll.length }">
            {{ allCircleNum }}
          </td>
          <td :class="{ different: allCircleSpNum !== getSpNum(kikakuAll) }" colspan="2">
            {{ allCircleSpNum }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

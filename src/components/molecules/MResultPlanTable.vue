<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getSpNum, ResultArr, getAllCircleNum, getAllSpNum } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

interface UseResultArr extends ResultArr {
  spnum: number
}

const resultArr = ref<UseResultArr[]>([
  {
    name: '通常1スペース',
    spnum: 1,
    circles: [],
  },
  {
    name: '通常2スペース',
    spnum: 2,
    circles: [],
  },
  {
    name: 'アナログゲームプラン',
    spnum: 3,
    circles: [],
  },
  {
    name: 'デジタルゲームプラン',
    spnum: 4,
    circles: [],
  },
])

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
resultArr.value.map(set => (set.circles = kikakuAll.value.filter(circle => circle.spnum === set.spnum)))
const allCircleNum = getAllCircleNum(resultArr.value)
const allCircleSpNum = getAllSpNum(resultArr.value)
</script>

<template>
  <div class="mt-20">
    <table class="check-table">
      <thead>
        <tr>
          <th>申込プラン</th>
          <th>サークル数</th>
          <th>スペース数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in resultArr" :key="i">
          <td>{{ set.name }}</td>
          <td>{{ set.circles.length }}</td>
          <td>{{ getSpNum(set.circles) }}</td>
        </tr>
        <tr class="sum">
          <td>合計</td>
          <td :class="{ different: allCircleNum !== kikakuAll.length }">
            {{ allCircleNum }}
          </td>
          <td :class="{ different: allCircleSpNum !== getSpNum(kikakuAll) }">
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

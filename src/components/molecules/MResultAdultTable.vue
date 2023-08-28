<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Circle,
  getSpNum,
  ResultArr,
  getAllCircleNum,
  getAllSpNum,
} from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

interface UseResultArr extends ResultArr {
  seijin: number
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const kikakuAllArr = kikakuAll.value as Circle[]
const resultArr = ref<UseResultArr[]>([
  {
    name: 'なし',
    seijin: 0,
    circles: [],
  },
  {
    name: 'あり',
    seijin: 1,
    circles: [],
  },
])
resultArr.value.map(
  set =>
    (set.circles = kikakuAllArr.filter(circle => circle.seijin === set.seijin))
)
const allCircleNum = getAllCircleNum(resultArr.value)
const allCircleSpNum = getAllSpNum(resultArr.value)
</script>

<template>
  <div class="mt-20">
    <table class="check-table">
      <thead>
        <tr>
          <th>成年向け有無</th>
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
        <tr>
          <td>合計</td>
          <td :class="{ different: allCircleNum !== kikakuAllArr.length }">
            {{ allCircleNum }}
          </td>
          <td :class="{ different: allCircleSpNum !== getSpNum(kikakuAllArr) }">
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

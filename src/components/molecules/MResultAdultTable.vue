<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
// import { Bar } from 'vue-chartjs'
import { getSpNum, getAllCircleNum, getAllSpNum } from '~/lib/hooks'
import { ResultArr } from '~/type'
import { useKikakuAllStore } from '~/store/'

interface UseResultArr extends ResultArr {
  seijin: number
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
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
resultArr.value.map(set => (set.circles = kikakuAll.value.filter(circle => circle.seijin === set.seijin)))
const allCircleNum = getAllCircleNum(resultArr.value)
const allCircleSpNum = getAllSpNum(resultArr.value)
// const chartData = ref({
//   labels: ['なし', 'あり'],
//   datesets: [
//     {
//       data: [resultArr[0].circles],
//     },
//   ],
// })
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

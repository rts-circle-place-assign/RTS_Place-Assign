<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Circle, getSpNum, ResultArr, getAllCircleNum, getAllSpNum } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

interface UseResultArr extends ResultArr {
  isSecond: boolean
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const kikakuAllArr = kikakuAll.value as Circle[]
const resultArr = ref<UseResultArr[]>([
  {
    name: '一次募集',
    isSecond: false,
    circles: [],
  },
  {
    name: '二次募集',
    isSecond: true,
    circles: [],
  },
])
resultArr.value.map(set => (set.circles = kikakuAllArr.filter(circle => circle.isSecond === set.isSecond)))
const allCircleNum = getAllCircleNum(resultArr.value)
const allCircleSpNum = getAllSpNum(resultArr.value)
</script>

<template>
  <div class="mt-12">
    <table class="check-table">
      <thead>
        <tr>
          <th></th>
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

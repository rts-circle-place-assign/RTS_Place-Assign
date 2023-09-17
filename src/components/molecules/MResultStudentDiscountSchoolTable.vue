<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStudentDiscountStore } from '~/store/'
import { ResultArr, StudentDiscountData } from '~/type'

interface UseResultArr extends ResultArr {
  apps: StudentDiscountData[]
}

const studentDiscountStore = useStudentDiscountStore()
const { studentDiscount } = storeToRefs(studentDiscountStore)
const allData = studentDiscount.value as StudentDiscountData[]
const resultArr = ref<UseResultArr[]>([
  {
    name: '大学',
    circles: null,
    apps: [],
  },
  {
    name: '専門学校',
    circles: null,
    apps: [],
  },
  {
    name: '高校・高専',
    circles: null,
    apps: [],
  },
  {
    name: '中学（中3）',
    circles: null,
    apps: [],
  },
])
resultArr.value.forEach(set => (set.apps = allData.filter(circle => circle.school === set.name)))
const allCircleNum = resultArr.value.reduce((acc, val) => acc + val.apps.length, 0)
</script>

<template>
  <div class="mt-12">
    <table class="check-table">
      <thead>
        <tr>
          <th>種類</th>
          <th>サークル数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in resultArr" :key="i">
          <td>{{ set.name }}</td>
          <td>{{ set.apps.length }}</td>
        </tr>
        <tr>
          <td>合計</td>
          <td :class="{ different: allCircleNum !== allData.length }">
            {{ allCircleNum }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

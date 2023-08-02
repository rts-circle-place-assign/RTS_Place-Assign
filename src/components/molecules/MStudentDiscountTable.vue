<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Circle, StudentDiscountData } from '../../lib/hooks'
import { useStudentDiscountStore, useKikakuAllStore } from '../../store/'

const studentDiscountStore = useStudentDiscountStore()
const { fetchStudentDiscount } = studentDiscountStore
await fetchStudentDiscount()
const { studentDiscount } = storeToRefs(studentDiscountStore)
const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

const studentDiscountData = studentDiscount.value as StudentDiscountData[]
const allData = kikakuAll.value as Circle[]
const discountUseCircles = allData.filter(circle => circle.code)

const useData = discountUseCircles.map(circle => {
  const ddd = studentDiscountData.find(
    application => application.circlename === circle.circlename
  )
  return {
    id: circle.id,
    circlename: circle.circlename,
    penname: circle.penname,
    discountCode: ddd?.code, // 付与した照合用コード
    applicationCode: circle.code, // 実際に使用された照合用コード,
    isDifferent: ddd?.code === circle.code, // 照合用コードが合致しているかbooleanで返す。合致しているならtrue。
  }
})
</script>

<template>
  <client-only>
    <table class="check-table">
      <thead>
        <th>申込データid</th>
        <th>サークル名</th>
        <th>ペンネーム</th>
        <th>付与照合用コード</th>
        <th>申込時照合用コード</th>
      </thead>
      <tbody>
        <tr v-for="(circle, i) in useData" :key="i">
          <td>
            <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <td>{{ circle.penname }}</td>
          <td>{{ circle.discountCode }}</td>
          <td>{{ circle.applicationCode }}</td>
        </tr>
      </tbody>
    </table>
  </client-only>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

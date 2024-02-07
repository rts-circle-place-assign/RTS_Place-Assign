<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStudentDiscountStore, useKikakuAllStore } from '~/store/'
import { StudentDiscountData } from '~/type'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const studentDiscountStore = useStudentDiscountStore()
const { fetchStudentDiscount } = studentDiscountStore
await fetchStudentDiscount()
const { studentDiscount } = storeToRefs(studentDiscountStore)
const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

const studentDiscountData = studentDiscount.value as StudentDiscountData[]
const discountUseCircles = kikakuAll.value.filter(circle => circle.code)
// console.log(discountUseCircles)

const useData = discountUseCircles.map(circle => {
  const ddd = studentDiscountData.find(application => application.name === circle.name)
  return {
    id: circle.id,
    name: circle.name,
    circlename: circle.circlename,
    penname: circle.penname,
    discountCode: ddd?.code, // 付与した照合用コード
    applicationCode: circle.code, // 実際に使用された照合用コード,
    isDifferent: ddd?.code === circle.code, // 照合用コードが合致しているかbooleanで返す。合致しているならtrue。
  }
})
const filteredData = useData.filter(circle => !circle.isDifferent)
const showArr = computed(() => {
  if (orderMode.value === 'filtered') {
    return filteredData
  } else {
    return useData
  }
})
</script>

<template>
  <div class="mt-20">
    <a-kikaku-radio-button :isChosen="orderMode === 'all'" content="全学割申請サークル" @click="switchOption('all')" />
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="異なるサークルのみ"
      @click="switchOption('filtered')"
    />
    <client-only>
      <table class="check-table mt-12">
        <thead>
          <th>申込データid</th>
          <th>氏名</th>
          <th>サークル名</th>
          <th>ペンネーム</th>
          <th>付与照合用コード</th>
          <th>申込時照合用コード</th>
        </thead>
        <tbody>
          <tr v-for="(circle, i) in showArr" :key="i" :class="{ different: !circle.isDifferent }">
            <td>
              <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
            </td>
            <td>{{ circle.name }}</td>
            <td>{{ circle.circlename }}</td>
            <td>{{ circle.penname }}</td>
            <td>{{ circle.discountCode }}</td>
            <td>{{ circle.applicationCode }}</td>
          </tr>
        </tbody>
      </table>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

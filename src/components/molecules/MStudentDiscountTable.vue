<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSDStore, useKikakuAllStore, useSDApplicationStore } from '~/store/'
import { SDApplicationData, CircleApplicationSDData } from '~/type'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const SDStore = useSDStore()
const { fetchSD } = SDStore
await fetchSD()
const { studentDiscount } = storeToRefs(SDStore) // サークル参加申込時に入力された情報（申込者氏名、入力された照合用コード）を取得して格納

const SDApplicationStore = useSDApplicationStore()
const { fetchSDApplication } = SDApplicationStore
await fetchSDApplication()
const { studentDiscountApplication } = storeToRefs(SDApplicationStore) // 学割申請時に入力された情報（氏名、付与した照合用コード）を取得して格納

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store) // サークル参加申込情報のうち個人情報以外の情報（サークル名など）

const sdInfo = studentDiscount.value as CircleApplicationSDData[] // サークル参加申込時
const sdUseCircles = sdInfo.filter(circle => circle.code)
const sdAppData = studentDiscountApplication.value as SDApplicationData[] // 学割申請時

const useData = sdUseCircles.map(application => {
  const findCircle = kikakuAll.value.find(circle => application.rtsId === circle.rtsId)!
  // console.log(findCircle)
  const findApp = sdAppData.find(app => app.name === application.name)
  return {
    id: findCircle.id,
    name: application.name,
    circlename: findCircle.circlename,
    penname: findCircle.penname,
    discountCode: findApp?.code === undefined ? '' : findApp.code, // 申請時付与した照合用コード
    applicationCode: application.code, // 参加申込時使用した照合用コード,
    isDifferent: findApp?.code === application.code, // 照合用コードが合致しているかbooleanで返す。合致しているならtrue。
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

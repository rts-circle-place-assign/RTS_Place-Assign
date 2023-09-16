<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { Circle, sakuhinRecordArr } from '~/lib/hooks'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const all = kikakuAll.value as Circle[]
const resultArr = sakuhinRecordArr(all)
const rakusenFilteredArr = resultArr.filter(set => set.mediacode !== 99) // コピーする表に99番（落選）の数値は必要ないのでmediacode === 99の配列を除外する。
const notAdultArr = rakusenFilteredArr.filter(set => set.adultNum === 0)
const adultArr = rakusenFilteredArr.filter(set => set.adultNum === 1)

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}
</script>

<template>
  <div>
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="理論SP数のみ"
      @click="switchOption('filtered')"
    />
    <a-kikaku-radio-button :isChosen="orderMode === 'all'" content="拡張版" @click="switchOption('all')" />
    <m-article-paragraph secondhead="成年向けなし">
      <template #secondhead>
        <m-sakuhin-count-excel-table v-show="orderMode === 'all'" :sakuhinArr="notAdultArr" />
        <m-sakuhin-count-excel-small-table v-show="orderMode === 'filtered'" :sakuhinArr="notAdultArr" />
      </template>
    </m-article-paragraph>
    <m-article-paragraph secondhead="成年向けあり">
      <template #secondhead>
        <m-sakuhin-count-excel-table v-show="orderMode === 'all'" :sakuhinArr="adultArr" />
        <m-sakuhin-count-excel-small-table v-show="orderMode === 'filtered'" :sakuhinArr="adultArr" />
      </template>
    </m-article-paragraph>
  </div>
</template>

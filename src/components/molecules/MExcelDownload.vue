<script setup lang="ts">
import { useKaikiStore } from '~/composables/useKaikiStore'
import { kaikiStoreType } from '~/type/'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const download = () => {
  const link = document.createElement('a')
  link.href = '/spNumber-count-check.xlsx'
  link.download = kaikiEn + '理論SP数・短冊カウント比較.xlsx'
  link.target = '_blank'
  link.click()
}
</script>

<template>
  <a-link-button width="300px" class="download-button" @click="download"
    >Excelファイルダウンロード</a-link-button
  >
</template>

<style lang="scss" scoped>
.download-button {
  cursor: pointer;
}
</style>

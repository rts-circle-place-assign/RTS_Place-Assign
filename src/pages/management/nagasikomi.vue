<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import { useBlockNumberStore } from '~/store'

useHead({
  title: '流し込みチェック',
})

const blockNumberStore = useBlockNumberStore()
const { fetchBlockNumber } = blockNumberStore
await fetchBlockNumber()
const { blockNumber } = storeToRefs(blockNumberStore)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th rowspan="2">ブロック</th>
        <th colspan="2">流し込みチェック</th>
      </tr>
      <tr>
        <th>確認待ち</th>
        <th>有識者</th>
        <th>Mk2</th>
        <th>植村</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(block, i) in blockNumber" :key="i">
        <th>{{ block.block }}</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tbody>
  </table>
</template>

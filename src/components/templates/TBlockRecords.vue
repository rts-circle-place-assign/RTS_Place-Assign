<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { useBlockNumberStore } from '~/store/'
import { kaikiStoreType, BlockNumber } from '~/type'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const blockNumberStore = useBlockNumberStore()
const { fetchBlockNumber } = blockNumberStore
await fetchBlockNumber()
const { blockNumber } = storeToRefs(blockNumberStore)
const blockAllData = blockNumber.value as BlockNumber[]
</script>

<template>
  <client-only>
    <o-block-record v-for="(block, i) in blockAllData" :key="i" :recordNum="i" :kaikiEn="kaikiEn" :block="block" />
  </client-only>
</template>

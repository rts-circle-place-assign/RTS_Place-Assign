<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { kaikiStoreType, BlockNumber } from '../../type/'
import { useBlockNumberStore } from '../../store'
import { useKaikiStore } from '~/composables/useKaikiStore'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const blockStore = useBlockNumberStore()
const { fetchBlockNumber } = blockStore
await fetchBlockNumber()
const { blockNumber } = storeToRefs(blockStore)
const blockNumberArr = blockNumber.value as BlockNumber[]
const gaisyuNumber = blockNumberArr.filter(set => set.isGaisyu)
const gaisyuNumberArr = gaisyuNumber.map(set => {
  return {
    adultNum: set.seijin,
    adult: set.seijin ? 'あり' : 'なし',
    spNum: set.spNum,
  }
})
</script>

<template>
  <client-only>
    <o-gaisyu-record
      v-for="(record, i) in gaisyuNumberArr"
      :key="i"
      :recordNum="i"
      :kaikiEn="kaikiEn"
      :gaisyu="record"
    />
  </client-only>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { useGaisyuNumberStore } from '~/store'
import { kaikiStoreType, GaisyuNumber, GaisyuNumberResult } from '~/type/'
import { isAdultString } from '~/lib/hooks'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const gaisyuStore = useGaisyuNumberStore()
const { fetchGaisyuNumber } = gaisyuStore
await fetchGaisyuNumber()
const { gaisyuNumber } = storeToRefs(gaisyuStore)
const gaisyuNumberArr = gaisyuNumber.value as GaisyuNumber[]
const resultArr: GaisyuNumberResult[] = gaisyuNumberArr.map(set => {
  return {
    adultNum: set.adult,
    adult: isAdultString(set.adult),
    spNum: set.spNum,
  }
})
</script>

<template>
  <client-only>
    <o-gaisyu-record
      v-for="(record, i) in resultArr"
      :key="i"
      :recordNum="i"
      :kaikiEn="kaikiEn"
      :gaisyu="record"
    />
  </client-only>
</template>

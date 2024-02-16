<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { sakuhinRecordArr } from '~/lib/hooks'
import { kaikiStoreType } from '~/type/'

const kaikiStore = useKaikiStore()
const { state: kaikiState } = kaikiStore
const kaikiStoreState = kaikiState.value as kaikiStoreType
const kaikiEn = kaikiStoreState.kaikiEn

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const resultArr = sakuhinRecordArr(kikakuAll.value)
</script>

<template>
  <o-sakuhin-record v-for="(sakuhin, i) in resultArr" :key="i" :recordNum="i" :kaikiEn="kaikiEn" :sakuhin="sakuhin" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const favListName = computed(() => state.value.kaikiEn.toLowerCase() + 'fav-list')
const favList = useStorage(favListName.value, [] as number[])

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const favKikakuList = favList.value.map(kikakuNum => {
  return kikakuAll.value.find(kikaku => kikaku.id === kikakuNum)
})
</script>

<template>
  <div class="flex wrap justify-center">
    <o-kikaku-card v-for="(kikaku, i) in favKikakuList" :key="i" :kikaku="kikaku" />
  </div>
</template>

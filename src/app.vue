<script setup lang="ts">
import { useKikakuAllStore, usePastStore } from '~/store/'

const KikakuAllStore = useKikakuAllStore()
const { fetchKikakuAll } = KikakuAllStore
await fetchKikakuAll()

const pastStore = usePastStore()
const { fetchPast } = pastStore
await fetchPast()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

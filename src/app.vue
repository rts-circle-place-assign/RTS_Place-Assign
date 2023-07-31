<script setup lang="ts">
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { fetchKikakuAll } = store
await fetchKikakuAll()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

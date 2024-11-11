<script setup lang="ts">
import { onMounted } from 'vue'
import { useKikakuAllStore, usePastStore } from '~/store/'

const KikakuAllStore = useKikakuAllStore()
const { fetchKikakuAll } = KikakuAllStore
await fetchKikakuAll()

onMounted(() => {
  try {
    Typekit.load({ async: true })
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

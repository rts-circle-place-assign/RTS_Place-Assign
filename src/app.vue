<script setup lang="ts">
import { onMounted } from 'vue'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'
import { useKikakuAllStore } from '~/store/'

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
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SpeedInsights />
    <Analytics />
  </div>
</template>

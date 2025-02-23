<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { Circle } from '~/type'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { useRuntimeConfig } from '#app'

interface Props {
  kikaku: Circle
  radius?: string
  border?: string
}

const props = withDefaults(defineProps<Props>(), {
  radius: '0',
  border: '0',
})
const kaikiStore = useKaikiStore()
const kaiki = kaikiStore.state.value.kaikiEn
const config = useRuntimeConfig()
const supabase = createClient(config.public.SUPABASE_URL, config.public.SUPABASE_KEY)
const url = ref('')

async function getData() {
  const { data } = supabase.storage.from(`${kaiki}_cut`).getPublicUrl(`${props.kikaku.cutId}.png`)
  url.value = data.publicUrl
}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="flex align-center justify-center thumb_wrapper">
    <img :src="url" alt="サムネ" class="inline-block thumbnail" :style="{ 'border-radius': radius, border: border }" />
  </div>
</template>

<style lang="scss" scoped>
.thumb_wrapper {
  width: 150px;
}
.thumbnail {
  // max-height: 120px;
  max-width: 150px;
  // height: auto;
  @media print {
    border-radius: 0 !important;
    max-width: inherit;
    max-height: 155px;
  }
}
</style>

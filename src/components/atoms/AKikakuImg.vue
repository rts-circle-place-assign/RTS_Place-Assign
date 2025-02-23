<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import { onMounted, ref } from 'vue'
import { Circle } from '~/type'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { useRuntimeConfig } from '#app'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
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
  <div class="mb--20">
    <div class="hi-gazo bokashi" :style="{ 'background-image': `url(${url})` }">
      <div class="kikaku-image-container text-align-center">
        <img class="aweye" :src="url" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hi-gazo {
  background-size: 100vw;
  background-position: center;
  height: 140px;
  @include mq(from-tab) {
    height: 228px;
  }
}
.bokashi {
  position: relative;
  z-index: 0;
  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: inherit;
    filter: blur(2px) brightness(85%);
    content: '';
    z-index: -1;
  }
}
.aweye {
  // max-width: 212px;
  height: 140px;
  @include mq(from-tab) {
    margin-top: 68px;
  }
}
</style>

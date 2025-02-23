<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
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

const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
</script>

<template>
  <div>
    <nuxt-img
      :src="url"
      crossorigin="anonymous"
      :alt="kikaku.circlename + 'のサークルカット'"
      class="thumbnail cursor-zoomin"
      @click="setPopupOpen(true)"
    />
    <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
      <nuxt-img :src="url" :alt="kikaku.circlename + 'の拡大版サークルカット'" />
    </a-popup>
  </div>
</template>

<style lang="scss" scoped>
.thumbnail {
  // max-height: 120px;
  max-width: 100%;
  // max-width: 150px;
  // @include mq(from-tab) {
  //   max-width: 400px;
  // }
  // height: auto;
}
</style>

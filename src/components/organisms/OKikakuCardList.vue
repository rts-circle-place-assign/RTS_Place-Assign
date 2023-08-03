<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Circle, cutURL } from '../../lib/hooks'
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const useData = allData.slice(0, 12)

const windowWidth = ref(0)
onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('load', getWindowWidth)
  window.addEventListener('resize', getWindowWidth)
})
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
</script>

<template>
  <div class="mt-20">
    <div v-for="(kikaku, i) in useData" :key="i" class="inline-block card">
      <nuxt-img :src="cutURL(kikaku.cutId)" alt="" loading="lazy" />
      <div class="text-center">
        <nuxt-link :to="'/kikaku/' + kikaku.id">{{ kikaku.id }}</nuxt-link>
      </div>
      <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
        <nuxt-img :src="cutURL(kikaku.cutId)" alt="" loading="lazy" />
      </a-popup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 0.5rem;
}
</style>

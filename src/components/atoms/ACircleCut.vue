<script setup lang="ts">
import { ref } from 'vue'
import { Circle, cutURL } from '~/lib/hooks/'

interface Props {
  kikaku: Circle
}
defineProps<Props>()

const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
</script>

<template>
  <div>
    <img
      :src="cutURL(kikaku.cutId)"
      :alt="kikaku.circlename + 'のサークルカット'"
      class="thumbnail cursor-zoomin"
      @click="setPopupOpen(true)"
    />
    <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
      <img :src="cutURL(kikaku.cutId)" :alt="kikaku.circlename + 'の拡大版サークルカット'" />
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

<script setup lang="ts">
import { ref } from 'vue'

interface Emits {
  (e: 'change', state: boolean): void
}
const emits = defineEmits<Emits>()

const isFavorite = ref(false)
const fontcolor = ref('#153d26')
const imgpath = ref('bookmark')
const change = () => {
  fontcolor.value = 'white'
  imgpath.value = 'bookmark_white'
}
const fix = () => {
  fontcolor.value = '#153d26'
  imgpath.value = 'bookmark'
}
const searchFavorite = async () => {
  emits('change', !isFavorite.value)
  isFavorite.value = !isFavorite.value
}
</script>

<template>
  <button @click="searchFavorite" @mouseover="change" @mouseleave="fix">
    <p :style="{ color: fontcolor }">お気に入り企画</p>
    <img :src="`/img/search/${imgpath}.svg`" />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 180px;
  height: 35px;
  border: 2px solid $main-dark;
  border-radius: 10px;
  outline: none;
  background-color: white;
  display: grid;
  place-content: center;
  place-items: center;
  grid-auto-flow: column;
  &:hover {
    background-color: $main-dark;
  }
}
p {
  font-family: dnp-shuei-gothic-gin-std, sans-serif;
  font-size: 16px;
  margin: 0;
}
img {
  width: 28px;
  height: 28px;
  margin: 0;
}
</style>

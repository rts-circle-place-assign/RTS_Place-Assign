<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useKaikiStore } from '~/composables/useKaikiStore'

interface Props {
  id: number
  margin?: string
}
const props = withDefaults(defineProps<Props>(), {
  margin: '30px auto 20px auto',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const favListName = computed(
  () => state.value.kaikiEn.toLowerCase() + 'fav-list'
)
const favList = useStorage(favListName.value, [] as number[])
const liked = computed(() => {
  // @ts-ignore
  return favList.value.includes(props.id)
})

const icon = computed(() => {
  return [
    !liked.value ? 'bookmark.svg' : 'bookmark_white.svg' ?? 'bookmark.svg',
  ]
})
const fontcolor = computed(() => (liked.value ? 'white' : '#153d26'))
const bgcolor = computed(() => (liked.value ? '#153d26' : 'white'))
const fav = () => {
  if (liked.value) {
    // @ts-ignore
    favList.value = favList.value.filter((i: number) => i !== props.id)
  } else {
    // @ts-ignore
    favList.value.push(props.id)
  }
}
const name = computed(() => (liked.value ? 'お気に入り企画' : 'お気に入り登録'))
</script>

<template>
  <client-only>
    <div
      class="a-f-b"
      :style="{ 'background-color': bgcolor, margin: margin }"
      @click="fav"
    >
      <p class="fff" :style="{ color: fontcolor }">
        <span>{{ name }}</span>
      </p>
      <img class="a-f-l" :src="`/img/search/${icon}`" />
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
.a-f-b {
  // margin: 30px auto 20px auto;
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
  cursor: pointer;
}
.fff {
  // font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 16px;
  margin: 0;
}
.a-f-l {
  width: 28px;
  height: 28px;
  margin: 0;
}
</style>

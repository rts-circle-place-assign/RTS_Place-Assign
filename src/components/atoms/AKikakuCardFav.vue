<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

interface Props {
  id: number
}
const props = defineProps<Props>()
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
  return [liked.value ? 'bookmark.svg' : 'bookmark_white.svg' ?? 'bookmark.svg']
})
const fav = () => {
  if (liked.value) {
    // @ts-ignore
    favList.value = favList.value.filter((i: number) => i !== props.id)
  } else {
    // @ts-ignore
    favList.value.push(props.id)
  }
}
</script>

<template>
  <div class="icon-wrapper" @click="fav">
    <img class="fav-dao" :src="`/img/search/${icon}`" />
  </div>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  font-size: 1.5rem;
  height: 55px;
  width: 43px;
}
.fav-dao {
  position: relative;
  top: 15px;
  left: 13px;
  width: 31.5px;
}
</style>

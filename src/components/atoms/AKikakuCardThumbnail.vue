<script setup lang="ts">
import { computed } from 'vue'
import { Circle, cutURL } from '~/lib/hooks'

interface Props {
  kikaku: Circle
  radius?: string
  border?: string
}

const props = withDefaults(defineProps<Props>(), {
  radius: '0',
  border: '0',
})
const imgUrl = computed(() => cutURL(props.kikaku.cutId))
</script>

<template>
  <div class="flex align-center justify-center thumb_wrapper">
    <img
      :src="imgUrl"
      alt="サムネ"
      class="inline-block thumbnail"
      :style="{ 'border-radius': radius, border: border }"
    />
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
}
</style>

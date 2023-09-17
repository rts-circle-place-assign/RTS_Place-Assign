<script setup lang="ts">
import { computed, ref } from 'vue'
import { getMedia, getSakuhin } from '~/lib/hooks'
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const lh = ref('auto')
const width = ref('auto')
const mt = ref('auto')
const mb = ref('auto')

const displayCategory = computed(() => {
  const media = getMedia(props.kikaku.mediacode)
  const sakuhin = getSakuhin(props.kikaku.sakuhincode)
  if (media !== '' && sakuhin !== '') {
    const category = media + '/' + sakuhin
    if (category.length < 10) {
      width.value = '52px'
    }
    return category
  } else if (media === '' || sakuhin === '') {
    return media + sakuhin
  } else {
    return ''
  }
})
</script>

<template>
  <div class="category_wrapper inline-block px-5" :style="{ 'margin-top': mt, 'margin-bottom': mb }">
    <p class="mt--2 mb-0" :style="{ 'line-height': lh, width: width }">
      {{ displayCategory }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.category_wrapper {
  color: $main_dull;
  font-size: 10px;
  border: 1.5px solid $main_dull;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.seinen {
  color: $white;
  background-color: $text3;
}
</style>

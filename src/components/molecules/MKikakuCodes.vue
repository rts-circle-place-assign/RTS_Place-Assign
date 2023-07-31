<script setup lang="ts">
import { Circle, getMedia, getSakuhin } from '../../lib/hooks/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
const media = getMedia(props.kikaku)
const sakuhin = getSakuhin(props.kikaku)
const isAdult = props.kikaku.seijin === 1
</script>

<template>
  <div>
    <a-article-small-heading title="コード" />
    <div>
      メディアコード：
      {{ media }}
    </div>
    <div>
      作品コード：
      {{ sakuhin }}
    </div>
    <div>
      成年向け頒布物有無：
      <span :class="{ 'adult bold': isAdult }">{{
        isAdult ? 'あり' : 'なし'
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adult {
  color: $text3;
}
</style>

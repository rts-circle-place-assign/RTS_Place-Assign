<script setup lang="ts">
import { Circle, getMedia, getSakuhin, isAdult } from '~/lib/hooks/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
const media = getMedia(props.kikaku.mediacode)
const sakuhin = getSakuhin(props.kikaku.sakuhincode)
const adult = isAdult(props.kikaku.seijin)
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
      <span :class="{ 'adult bold': adult }">{{ adult ? 'あり' : 'なし' }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adult {
  color: $text3;
}
</style>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { cutURL } from '~/lib/hooks'
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
const imgUrl = cutURL(props.kikaku.cutId)
</script>

<template>
  <div class="mb--20">
    <div class="hi-gazo bokashi" :style="{ 'background-image': `url(${imgUrl})` }">
      <div class="kikaku-image-container text-align-center">
        <img class="aweye" :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hi-gazo {
  background-size: 100vw;
  background-position: center;
  height: 140px;
  @include mq(from-tab) {
    height: 228px;
  }
}
.bokashi {
  position: relative;
  z-index: 0;
  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: inherit;
    filter: blur(2px) brightness(85%);
    content: '';
    z-index: -1;
  }
}
.aweye {
  // max-width: 212px;
  height: 140px;
  @include mq(from-tab) {
    margin-top: 68px;
  }
}
</style>

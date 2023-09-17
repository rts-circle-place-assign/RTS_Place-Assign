<script setup lang="ts">
import { computed } from 'vue'
import { twitterURL, pixivURL, webURL } from '~/lib/hooks'
import { Circle } from '~/type/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
const isYouTube = computed(() => props.kikaku.web?.includes('youtube'))
</script>

<template>
  <div class="sns">
    <a v-if="kikaku.twitter" :href="twitterURL(kikaku)" target="_blank" rel="noopener">
      <img src="../../assets/img/kikaku/details/twitter.png" alt="Twitter Logo" class="sns-logo" />
    </a>
    <a v-if="kikaku.pixiv" :href="pixivURL(kikaku)" target="_blank" rel="noopener">
      <img src="../../assets/img/kikaku/details/pixiv.png" alt="Pixiv Logo" class="sns-logo" />
    </a>
    <a v-if="webURL(kikaku)" :href="webURL(kikaku)" target="_blank" rel="noopener">
      <img v-if="isYouTube" src="../../assets/img/kikaku/details/youtube.png" alt="YouTube Logo" class="sns-logo" />
      <img v-else src="../../assets/img/kikaku/details/web.png" alt="YouTube Logo" class="sns-logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.sns {
  @include mq(from-sp) {
    display: flex;
  }
  &-logo {
    width: 40px;
    margin: 0.5rem;
  }
  margin-top: 1rem;
}
</style>

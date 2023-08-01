<script setup lang="ts">
const snss = [
  {
    href: 'https://twitter.com/HakureijinjyaS',
    icon: 'twitter_logo.svg',
  },
  // {
  //   href: 'https://www.instagram.com/gogatsusai/',
  //   icon: 'instagram_glyph_gradient_rgb',
  // },
  // {
  //   href: 'https://www.facebook.com/mayfestival.jp',
  //   icon: 'f_logo_RGB-Blue_250',
  // },
  {
    href: 'https://com.nicovideo.jp/community/co2004724?com_header=1',
    icon: 'nicovideo.png',
  },
  {
    href: 'https://www.youtube.com/channel/UCWgWAk02r-HKSYX2h6wnJVA',
    icon: 'yt_icon_rgb.svg',
  },
]
</script>

<template>
  <div class="footer-sns-link-wrapper flex space-around align-center">
    <a
      v-for="sns in snss"
      :key="sns.href"
      :href="sns.href"
      class="a-footer-link overflow-hidden max-w-restricted"
      target="_blank"
      rel="noopener norefferer external"
    >
      <img :src="`/img/template/${sns.icon}`" class="img" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.footer-sns-link-wrapper {
  height: 100%;
  @media screen and (max-width: 400px) {
    width: 70%;
  }
  @include mq(from-tab) {
    flex: 1;
  }
}
.img {
  height: 100%;
  max-width: 100%;
}
.max-w-restricted {
  max-width: 28px;
  @media screen and (min-width: 1000px) {
    max-width: 38px;
  }
}
</style>

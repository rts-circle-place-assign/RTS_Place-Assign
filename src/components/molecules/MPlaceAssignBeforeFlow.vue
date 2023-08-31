<script setup lang="ts">
const pages = [
  {
    title: '配置準備前作業',
    link: 'before',
  },
  {
    title: '1紙（メディア別頭紙）',
    link: 'media',
  },
  {
    title: '2.5紙（作品別頭紙）',
    link: 'sakuhin',
  },
  {
    title: '外周/島中SP数調整・外周抜き',
    link: 'gaisyu-adjust',
  },
  {
    title: '配置図面引き',
    link: 'map',
  },
]
</script>

<template>
  <div class="container">
    <a-timeline-box
      v-for="(page, i) in pages"
      :key="i"
      :head="page.title"
      :link="'/management/' + page.link"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  width: 100%;
  @include mq(from-pc) {
    margin: 0 auto;
  }
  margin: 0 auto;
  @include mq(until-tab) {
    margin-left: 0.5rem;
  }
}
</style>

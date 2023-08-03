<script setup lang="ts">
const pages = [
  {
    title: '受付サークルリスト作成',
    link: 'accepted-circles-list',
  },
  {
    title: '外周抜きマスタ作成',
    link: 'gaisyu-master',
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
    ></a-timeline-box>
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

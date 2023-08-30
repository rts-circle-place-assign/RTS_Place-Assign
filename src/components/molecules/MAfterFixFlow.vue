<script setup lang="ts">
const pages = [
  {
    title: '一次募集受付サークルリスト作成',
    link: 'kikaku/accepted-circles-list',
  },
  {
    title: '二次募集受付サークルリスト作成',
    link: 'kikaku/accepted-additional-circles-list',
  },
  {
    title: '外周抜きスプシ作成',
    link: 'management/gaisyu-master',
  },

  {
    title: '短冊マスタデータ出力依頼',
    link: '',
  },
  {
    title: '採番済図面作成依頼',
    link: '',
  },
]
</script>

<template>
  <div class="container">
    <a-timeline-box
      v-for="(page, i) in pages"
      :key="i"
      :head="page.title"
      :link="page.link === '' ? '' : '/' + page.link"
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

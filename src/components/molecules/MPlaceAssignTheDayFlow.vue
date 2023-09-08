<script setup lang="ts">
const pages = [
  {
    title: 'ホチキス/クリップチェック・キャラ分け・キャラソート',
    link: 'chara',
  },
  {
    title: '4紙（ブロック別頭紙）',
    link: 'block',
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

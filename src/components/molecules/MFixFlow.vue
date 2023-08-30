<script setup lang="ts">
const pages = [
  {
    title: '修正前作業',
    link: 'before',
  },
  {
    title: '学割チェック',
    link: 'student-discount',
  },
  {
    title: 'なかよしコード特殊処理',
    link: 'friend-code-particular',
  },
  {
    title: '2サークルなかよしコード処理',
    link: 'two-circles-friend-code',
  },
  {
    title: 'なかよしコード・合体矛盾処理（成年向け有無編）',
    link: 'joint-adult-different',
  },
  {
    title: 'なかよしコード・合体矛盾処理（メディアコード編）',
    link: 'joint-media-different',
  },
  {
    title: 'なかよしコード・合体矛盾処理（作品コード編）',
    link: 'joint-sakuhin-different',
  },
  {
    title: 'コスプレメディアコード修正',
    link: 'cosplay-correct',
  },
  {
    title: '作品コード・キャラ矛盾処理',
    link: 'sakuhin-chara-different',
  },
  {
    title: 'グッズ矛盾処理',
    link: 'goods-different',
  },
  {
    title: 'メディアコード「その他」処理',
    link: 'media-other',
  },
]
</script>

<template>
  <div class="container">
    <a-timeline-box
      v-for="(page, i) in pages"
      :key="i"
      :head="page.title"
      :link="page.link === '' ? '' : '/fix/' + page.link"
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

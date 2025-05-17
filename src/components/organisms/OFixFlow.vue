<script setup lang="ts">
const pages = [
  {
    title: '学割チェック',
    link: 'student-discount',
  },
  {
    title: 'なかよしコード申込大分類確認',
    link: 'friend-code-particular',
  },
  {
    title: '2サークルなかよしコード処理',
    link: 'two-circles-friend-code',
  },
  {
    title: '合体サークルなかよしコード利用チェック',
    link: 'joint-friend',
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
    title: 'メディアコード「その他」処理',
    link: 'media-other',
  },
]
</script>

<template>
  <m-flow :flows="pages" dir="fix" />
</template>

<script setup lang="ts">
const pages = [
  {
    title: '修正後データサーバー格納',
    link: '',
  },
  {
    title: '一次募集受付サークルリスト作成',
    link: 'kikaku/accepted-circles-list',
  },
  {
    title: '二次募集受付サークルリスト作成',
    link: 'kikaku/accepted-additional-circles-list',
  },
  {
    title: '外周抜きデータ準備',
    link: 'management/gaisyu-prepare',
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
  <m-flow :flows="pages" dir="" />
</template>

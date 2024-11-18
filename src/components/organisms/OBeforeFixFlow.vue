<script setup lang="ts">
const pages = [
  {
    title: 'サークルカット格納',
    link: 'cut-storage',
  },
  {
    title: '会期情報変更',
    link: 'store',
  },
  {
    title: '過去会期データ格納',
    link: 'past-data',
  },
  {
    title: 'マスタファイル処理',
    link: 'tsv',
  },
  {
    title: '差し込みサークル追加',
    link: 'add-circles',
  },
  {
    title: 'サークルカットID取得',
    link: 'cut-id',
  },
  {
    title: '申込情報スプシ格納',
    link: 'tsv-to-sheet',
  },
  {
    title: '新規作品コード追加',
    link: 'new-sakuhin-code',
  },
  {
    title: 'mongoDB Collection作成',
    link: 'mongodb-collection',
  },
  {
    title: '学割申請データ入力',
    link: 'student-discount-application',
  },
  {
    title: 'GAS編集・デプロイ',
    link: 'gas',
  },
]
</script>

<template>
  <m-flow :flows="pages" dir="before-fix" />
</template>

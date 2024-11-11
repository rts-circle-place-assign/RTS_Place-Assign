<script setup lang="ts">
const pages = [
  {
    title: '新規作品コード追加',
    link: 'new-sakuhin-code',
  },
  {
    title: 'mongoDB Collection作成',
    link: 'mongodb-collection',
  },
  {
    title: '会期情報変更',
    link: 'store',
  },
  {
    title: '学割申請データ入力へ',
    link: 'student-discount-application',
  },
]
</script>

<template>
  <m-flow :flows="pages" dir="before-fix" />
</template>

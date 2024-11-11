<script setup lang="ts">
const pages = [
  {
    title: '新規作品コード追加',
    link: 'new-sakuhin-code',
  },
]
</script>

<template>
  <m-flow :flows="pages" dir="before-fix" />
</template>

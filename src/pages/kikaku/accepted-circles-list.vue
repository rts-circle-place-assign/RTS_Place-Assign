<script setup lang="ts">
useHead({
  title: '一次募集受付サークル一覧',
})
</script>

<template>
  <o-article-template title="一次募集受付サークル一覧">
    <m-accepted-circles-table :isSecond="false" />
  </o-article-template>
</template>

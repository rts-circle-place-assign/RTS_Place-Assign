<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'お気に入り企画一覧',
})
</script>
<template>
  <o-article-template title="お気に入り企画一覧">
    <m-fav-kikaku-table />
  </o-article-template>
</template>

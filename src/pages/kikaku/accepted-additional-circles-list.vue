<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '二次募集受付サークル一覧',
})
</script>

<template>
  <o-article-template title="二次募集受付サークル一覧">
    <lazy-m-accepted-circles-table :isSecond="true" />
  </o-article-template>
</template>

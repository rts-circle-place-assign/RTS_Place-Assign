<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'トップページ',
})
</script>

<template>
  <div>
    <a-top-firstview />
    <m-top-search />
  </div>
</template>

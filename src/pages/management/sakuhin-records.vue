<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '2.5紙（作品別）',
})
</script>

<template>
  <client-only>
    <t-sakuhin-records />
  </client-only>
</template>

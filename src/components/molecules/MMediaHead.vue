<script setup lang="ts">
interface Props {
  recordNum: number
  kaikiEn: string
}

defineProps<Props>()
</script>

<template>
  <a-media-head-id :recordNum="recordNum" />
  <a-media-head-kaiki :kaikiEn="kaikiEn" />
</template>

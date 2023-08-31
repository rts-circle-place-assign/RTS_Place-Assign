<script setup lang="ts">
interface Props {
  recordNum: number
  kaikiEn: string
}

defineProps<Props>()
</script>

<template>
  <a-management-head />
  <a-management-head-kaiki :kaikiEn="kaikiEn" />
</template>

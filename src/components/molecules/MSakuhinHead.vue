<script setup lang="ts">
interface Props {
  recordNum: number
  kaikiEn: string
}

defineProps<Props>()
</script>

<template>
  <a-sakuhin-head-id :recordNum="recordNum" />
  <a-management-head-kaiki :kaikiEn="kaikiEn" />
</template>

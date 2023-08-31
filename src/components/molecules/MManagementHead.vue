<script setup lang="ts">
interface Props {
  recordNum: number
  number: string
  name: string
  kaikiEn: string
}

defineProps<Props>()
</script>

<template>
  <a-management-head-id :recordNum="recordNum" :number="number" :name="name" />
  <a-management-head-kaiki :kaikiEn="kaikiEn" />
</template>

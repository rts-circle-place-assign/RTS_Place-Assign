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
  <div>
    <a-management-head-id :recordNum="recordNum" :number="number" :name="name" />
    <a-management-head-kaiki :kaikiEn="kaikiEn" />
  </div>
</template>

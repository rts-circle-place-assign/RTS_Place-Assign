<script setup lang="ts">
const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
})
</script>

<template>
  <p>{{ thisPlaceAssignData }}</p>
</template>

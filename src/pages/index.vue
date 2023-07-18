<template lang="pug">
p {{ data }}
</template>

<script setup lang="ts">
  const thisPlaceAssignData = await useFetch('/api/thisPlaceAssign', {key: 'thisPlaceAssignData'})
</script>

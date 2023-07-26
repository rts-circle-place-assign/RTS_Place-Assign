<script setup lang="ts">
const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
  // onResponse({ request, response, options }) {
  //   setKikaku(shuffle(response._data).slice(0, 12))
  // },
})
</script>

<template>
  <p>{{ thisPlaceAssignData }}</p>
</template>

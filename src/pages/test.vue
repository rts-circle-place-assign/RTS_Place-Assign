<script setup lang="ts">
const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
  // transform: circles => {
  //   return thisPlaceAssignData.map(circle => ({
  //     circlename: circle.circlename,
  //     cutId: circle.cutId,
  //     penname: circle.penname,
  //   }))
  // },
  // onResponse({ request, response, options }) {
  //   setKikaku(shuffle(response._data).slice(0, 12))
  // },
})
</script>

<template>
  <p>{{ thisPlaceAssignData }}</p>
</template>

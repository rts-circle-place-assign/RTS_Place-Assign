<template lang="pug">
div
  //- p {{ pastGaisyuData }}
  //- p {{ studentDiscountData }}
</template>

<script setup lang="ts">
  const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {key: 'thisPlaceAssignData'})
  const { data: pastPlaceAssignData } = await useFetch('/api/pastPlaceAssign.get', {key: 'pastPlaceAssignData'})
  const { data: studentDiscountData } = await useFetch('/api/studentDiscount', {key: 'studentDiscountData'})
  const { data: pastGaisyuData } = await useFetch('/api/pastGaisyu', {key: 'pastGaisyuData'})
</script>

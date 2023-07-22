<script setup lang="ts">
useHead({
  title: "トップページ"
})

const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {key: 'thisPlaceAssignData'})
const { data: pastPlaceAssignData } = await useFetch('/api/pastPlaceAssign.get', {key: 'pastPlaceAssignData'})
const { data: studentDiscountData } = await useFetch('/api/studentDiscount', {key: 'studentDiscountData'})
const { data: pastGaisyuData } = await useFetch('/api/pastGaisyu', {key: 'pastGaisyuData'})
</script>

<template>
  <div>
    <a-top-firstview />
    <m-top-search />
  </div>
</template>

<script setup lang="ts">
import { Circle } from '~/lib/hooks'
interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
</script>

<template>
  <div class="relative flex">
    <a-kikaku-card-thumbnail class="mr-10" :kikaku="kikaku" />
    <a-kikaku-card-title :kikaku="kikaku" />
  </div>
</template>

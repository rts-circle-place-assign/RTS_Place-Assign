<script setup lang="ts">
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <div class="relative flex mt-5 mb-7">
    <a-kikaku-card-category :kikaku="kikaku" />
    <!-- <a-kikaku-card-catchcopy class="absolute ml-90 mt--2" :web="kikaku.web" /> -->
  </div>
</template>

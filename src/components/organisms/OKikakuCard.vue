<script setup lang="ts">
import { Circle } from '../../lib/hooks/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

// const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {key: 'thisPlaceAssignData'})
if (!props.kikaku) {
  process.client && console.error(`Project of id ${props.kikaku.id} not found!`)
}
</script>

<template>
  <div class="relative inline-block card_wrapper ma-5">
    <!-- <a-kikaku-card-pr :prInternal="kikaku.pr_internal" /> -->
    <div class="relative card pl-5 ml-5">
      <a-kikaku-card-fav :id="kikaku.id" class="fav" />
      <a-kikaku-card-path
        class="card_child flex direction-column"
        :to="`/kikaku/${kikaku.id}`"
      >
        <m-kikaku-card-above :kikaku="kikaku" />
        <m-kikaku-card-bottom :kikaku="kikaku" />
      </a-kikaku-card-path>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card_wrapper {
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.015);
  }
  width: fit-content;
}
.card {
  width: 325px;
}
.card_child {
  border-bottom: 1px solid black;
  height: 180px;
}
.mt-auto {
  margin-top: auto;
}
.fav {
  position: absolute;
  right: 0px;
  z-index: 10;
}
</style>

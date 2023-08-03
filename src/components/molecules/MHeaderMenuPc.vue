<script setup lang="ts">
import { computed, ref } from 'vue'

const menuTabs = [
  {
    title: 'kikaku',
    contents: ['search'],
  },
  {
    title: 'info',
    contents: ['attention'],
  },
  {
    title: 'contents',
    contents: ['goods'],
  },
  {
    title: 'mayfes',
    contents: ['about'],
  },
]

const infoOpenTab = ref(-1)
const infoOpenHandler = (value: number) => {
  infoOpenTab.value = value
}
const dropdownMenu = computed(() => menuTabs[infoOpenTab.value]?.contents || [])
// const dropdownMenu = computed(() => {
//   // console.log(menuTabs)
//   menuTabs[infoOpenTab.value]?.contents || []
// })
</script>

<template>
  <div
    class="links-wrapper mt-2 hidden-until-pc align-self-start overflow-hidden"
    @mouseleave="infoOpenHandler(-1)"
  >
    <m-header-links
      class="header-links"
      :infoOpenTab="infoOpenTab"
      :menuTabs="menuTabs"
      @infoOpen="infoOpenHandler"
    />
    <m-header-menu-pc-content
      class="header-info-links"
      :contents="dropdownMenu"
    />
  </div>
</template>

<style lang="scss" scoped>
.align-self-start {
  align-self: flex-start;
}
.hidden-until-pc {
  @include mq(until-pc) {
    display: none;
  }
}
.links-wrapper {
  width: 600px;
}
</style>

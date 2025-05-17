<script setup lang="ts">
import { computed, ref } from 'vue'

const menuTabs = [
  {
    title: 'kikaku',
    contents: ['search', 'accepted-circles-list', 'accepted-additional-circles-list', 'place-assign'],
  },
  {
    title: 'fix',
    contents: ['fix-top', 'result'],
  },
  {
    title: 'management',
    contents: ['management-top', 'gaisyu-master', 'special-treatment'],
  },
  {
    title: 'data',
    contents: ['space-label', 'space-list', 'jiko-absent', 'email'],
  },
]

const infoOpenTab = ref(-1)
const infoOpenHandler = (value: number) => {
  infoOpenTab.value = value
}
const dropdownMenu = computed(() => menuTabs[infoOpenTab.value]?.contents || [])
const dropdownTitle = computed(() => menuTabs[infoOpenTab.value]?.title || '')
// const dropdownMenu = computed(() => {
//   // console.log(menuTabs)
//   menuTabs[infoOpenTab.value]?.contents || []
// })
</script>

<template>
  <div class="links-wrapper mt-2 hidden-until-pc align-self-start overflow-hidden" @mouseleave="infoOpenHandler(-1)">
    <m-header-links class="header-links" :infoOpenTab="infoOpenTab" :menuTabs="menuTabs" @infoOpen="infoOpenHandler" />
    <m-header-menu-pc-content class="header-info-links" :contents="dropdownMenu" :title="dropdownTitle" />
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

<script setup lang="ts">
type MenuTab =
  | {
      title: string
      contents?: string[]
      to?: string
    }
  | undefined
interface Props {
  infoOpenTab: number
  menuTabs: Array<MenuTab>
}
const props = withDefaults(defineProps<Props>(), {
  infoOpenTab: -1,
  menuTabs: () => []
})

interface Emits {
  (e: 'infoOpen', num: number): void
}
const emits = defineEmits<Emits>()

const changeBorderRadius = computed(() => {
  return !!props.menuTabs[props.infoOpenTab]?.contents
})
</script>

<template>
  <div class="wrapper" :class="{ 'change-radius': changeBorderRadius }">
    <a-header-link
      v-for="(headerLink, idx) in menuTabs"
      :key="headerLink.title"
      :to="headerLink.to"
      :link="headerLink.to"
      :infoOpenTab="infoOpenTab"
      :sentence="headerLink.title"
      :active="idx === infoOpenTab"
      @mouseenter="emits('infoOpen', idx)"
      @click="emits('infoOpen', idx)"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 44px;
  background-color: $sub2-soft;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: border-radius 0.1s 0.3s;
}
.change-radius {
  transition: border-radius 0s 0s;
  border-radius: 15px 15px 0 0;
}
</style>

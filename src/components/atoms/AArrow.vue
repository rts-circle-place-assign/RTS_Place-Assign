<script setup lang="ts">
import { computed } from 'vue'
const rotateAngleMap = {
  r: 0,
  b: 90,
  l: 180,
  t: 270,
} as const
interface Props {
  direction?: keyof typeof rotateAngleMap
  color?: string
  weight?: number
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'r',
  color: 'currentColor',
  weight: 1,
})

const rotateStyle = computed(() => {
  const angle = rotateAngleMap[props.direction]
  return {
    transform: `rotate(${angle}deg)`,
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :style="rotateStyle">
    <path d="M7,1L18,12L7,23" :stroke-width="weight" :stroke="color" fill="none" />
  </svg>
</template>

<script setup lang="ts">
import { computed, watch, onBeforeUnmount } from 'vue'

interface Props {
  isOpen: boolean
  isPortrait?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  isPortrait: false,
})

interface Emits {
  (e: 'close'): void
}
const emits = defineEmits<Emits>()

const fontMode = ref<'r' | 's'>('r')
const toSolid = () => {
  fontMode.value = 's'
}
const toRegular = () => {
  fontMode.value = 'r'
}
const preventScroll = (e: Event) => e.preventDefault()
// const isThisOpen = ref<boolean>(props.isOpen)
const isThisOpen = computed(() => props.isOpen)
watch(isThisOpen, _isOpen => {
  if (!process.client) {
    return
  }
  if (_isOpen) {
    window.addEventListener('mousewheel', preventScroll, {
      passive: false,
    })
    window.addEventListener('touchmove', preventScroll, { passive: false })
  } else {
    window.removeEventListener('mousewheel', preventScroll)
    window.removeEventListener('touchmove', preventScroll)
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('mousewheel', preventScroll)
  window.removeEventListener('touchmove', preventScroll)
})
</script>

<template>
  <div v-show="isOpen" class="bg-gray z-index-10000 parent-fit fixed flex relative">
    <div class="flex justify-end absolute t-0 r-0">
      <client-only>
        <font-awesome-icon
          :icon="[`fa${fontMode}`, 'rectangle-xmark']"
          class="mt-12 mr-20 close-icon cursor-pointer"
          @mouseenter="toSolid"
          @mouseleave="toRegular"
          @click.prevent="emits('close')"
        />
      </client-only>
    </div>
    <div class="flex align-center justify-center flex-grow-1 fluid">
      <div :class="isPortrait ? 'content-portrait' : 'content'">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-gray {
  background-color: #0008;
}
.content {
  @media screen and (min-width: 1301px) {
    width: 60vw;
  }
  @media screen and (max-width: 1300px) {
    max-width: 780px;
  }
  & :deep(img) {
    width: 100%;
  }
}
.content-portrait {
  height: 85vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  & :deep(img) {
    max-height: 100%;
    max-width: 100%;
  }
}
.close-icon {
  color: white;
  height: 40px;
}
</style>

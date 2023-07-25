<script setup lang="ts">
interface Props {
  isOpen?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})

interface Emits {
  (e: 'close'): void
}
const emits = defineEmits<Emits>()

const isDisplayed = ref(false)
const internalIsOpen = ref(false)
const isThisOpen = computed(() => props.isOpen)
// const isThisOpen = ref(props.isOpen)
// console.log(isThisOpen.value)
watch(isThisOpen, value => {
  if (value) {
    isDisplayed.value = true
    // console.log([isDisplayed, internalIsOpen])
    window.setTimeout(() => (internalIsOpen.value = true), 10)
  } else if (process.client) {
    // console.log([isDisplayed, internalIsOpen])
    internalIsOpen.value = false
    window.setTimeout(() => {
      isDisplayed.value = props.isOpen
    }, 600)
  }
})

const displayStyle = computed(() => {
  return isDisplayed.value
    ? {}
    : {
        display: 'none',
      }
})
</script>

<template>
  <div
    class="fixed parent-fit pt-64 px-24 hamburger-wrapper"
    :class="{ open: internalIsOpen }"
    :style="displayStyle"
  >
    <m-hamburger-menu @close="emits('close')" />
    <button class="fixed close-button" @click="emits('close')">
      <img src="../../assets/img/template/menu-close.svg" alt="close" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
$button-right-offset: 8vw;
$button-bottom-offset: 30px;
$button-cx: calc(100vw - $button-right-offset - 30px);
$button-cy: calc(100vh - $button-bottom-offset - 30px);
.hamburger-wrapper {
  background-color: $sub3-soft;
  transition: clip-path 0.2s;
  clip-path: circle(0 at $button-cx $button-cy);
  z-index: 100;
  overflow: scroll;
  padding: calc(60px + $button-bottom-offset * 2);
  &.open {
    transition: clip-path 0.6s;
    clip-path: circle(142vmax at $button-cx $button-cy);
  }
}
.close-button {
  right: $button-right-offset;
  bottom: $button-bottom-offset;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: $main-dull;
  font-size: 10px;
  color: white;
  display: grid;
  place-content: center;
}
</style>

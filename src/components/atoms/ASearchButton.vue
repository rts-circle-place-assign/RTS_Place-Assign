<script setup lang="ts">
interface Props {
  filterName: string
  backc?: string
}
const props = withDefaults(defineProps<Props>(), {
  filterName: "",
  backc: ""
})

interface Emits {
  (e: 'input'): void
}
const emits = defineEmits<Emits>()

const search = async () => {
  emits('input')
}
</script>

<template>
  <button :style="{ '--background': backc }" @click="search">
    <p class="name">{{ filterName }}</p>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-color: white;
  border: none !important;
  outline: none !important;
  border-radius: 100px !important;
  background-color: white;
}
button:hover {
  background-color: var(--background);
}
.name {
  margin: 0.3em 1em;
}
</style>

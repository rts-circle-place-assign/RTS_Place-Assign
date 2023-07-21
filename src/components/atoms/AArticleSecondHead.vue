<script setup lang="ts">
interface Props {
  secondhead: string
}

withDefaults(defineProps<Props>(), {
  secondhead: ""
})
</script>

<template>
  <div class="flex align-start mt-32">
    <img
      class="mt--6 mr--24"
      src="../../assets/img/template/h3_leaf_green.svg"
    />
    <h3 class="nakamidashi my-0">{{ secondhead }}</h3>
    <img class="mt-4" src="../../assets/img/template/h3_dots.svg" />
  </div>
</template>

<style lang="scss" scoped>
.nakamidashi {
  color: $main-dark;
}
</style>

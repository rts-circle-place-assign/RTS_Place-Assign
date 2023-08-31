<script setup lang="ts">
interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '10vh',
})
</script>

<template>
  <img
    src="~/assets/img/template/arts10_mono1_white-based.png"
    alt="ARTS10ロゴ"
    class="logo"
    :style="{ height: height }"
  />
</template>

<script setup lang="ts">
import { Circle } from '~/lib/hooks/'

interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <o-kikaku-info title="配置希望情報">
    <m-kikaku-codes :kikaku="kikaku" />
    <m-hosoku :kikaku="kikaku" />
  </o-kikaku-info>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  box-sizing: border-box;
  background-color: $main-soft;
  border-radius: 5%;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.2);
}
.online {
  justify-content: flex-end;
  border-bottom: 1px solid black;
}
.image {
  width: 20px;
  margin-right: 5px;
}
</style>

<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="wrapper come-on-online">
    <div class="flex online">
      <img class="image" src="~/assets/img/kikaku/details/globe.svg" />
      <div>{{ title }}</div>
    </div>
    <slot />
  </div>
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
.come-on-online {
  margin: auto auto;
  padding: 20px;
}
</style>

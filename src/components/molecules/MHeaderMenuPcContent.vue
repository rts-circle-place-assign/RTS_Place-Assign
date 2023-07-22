<script setup lang="ts">
interface Props {
  contents: Array<string>
}

withDefaults(defineProps<Props>(), {
  contents: () => []
})
</script>

<template>
  <div class="wrapper" :class="{ hidden: !contents.length }">
    <div
      v-for="link in contents"
      :key="link"
      class="a-header-link"
    >
      <nuxt-link :to="link">{{ link }}</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: $main-dull;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  width: calc(100% - 60px);
  border-top: 0.5px solid lightgray;
  &.hidden {
    transform: scaleY(0);
  }
  transform: scaleY(1);
  transition: transform 0.3s ease;
  transform-origin: top;
}
.a-header-link {
  margin: 7px;
  width: calc(33.3% - 14px);
  > a {
    text-decoration: none;
    color: white;
    &:hover {
      color: $sub2-soft;
    }
  }
}
</style>

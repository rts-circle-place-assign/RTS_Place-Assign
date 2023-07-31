<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
</script>

<template>
  <p class="a-article-small-heading pl-12 my-8">
    {{ title }}
  </p>
</template>

<style lang="scss" scoped>
.a-article-small-heading {
  color: $main-dark;
  font-weight: bold;
  position: relative;
  &::before {
    position: absolute;
    width: 0.3rem;
    height: 14px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    background-color: $main-dark;
    @include mq(until-tab) {
      height: calc(100% - 4px);
      left: 1px;
    }
  }
}
</style>

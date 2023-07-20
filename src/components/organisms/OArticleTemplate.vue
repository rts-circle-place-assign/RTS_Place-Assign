<script setup lang="ts">
type Props = {
  title: string;
};
withDefaults(defineProps<Props>(), {
title: ""
})
</script>


<template>
  <div class="article-wrapper">
    <a-article-title :title="title" />
    <div class="article-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-wrapper {
  background-size: cover;
  background-image: url("../../assets/img/template/sp_background.png");
  @include mq(fromtab) {
    // tab,pc版
    background-image: url("../../assets/img/template/pc_background.png");
  }
  min-height: calc(100vh - 80px);
}
.article-content {
  margin: auto auto;
  width: fit-content;
  padding-bottom: 75px;
}
</style>

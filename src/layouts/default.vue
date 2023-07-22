<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - 博麗神社例大祭 配置関連ウェブシステム` : '博麗神社例大祭 配置関連ウェブシステム';
  },
});
</script>

<template>
  <div>
    <o-header />
    <!-- <div v-show="hasSearchMenu">
      <m-search-menu
        class="searchmenu"
      />
    </div> -->
    <slot />
    <!-- <o-footer /> -->
    <o-navigation />
    <!-- <a-virtual-time v-if="onDev" class="fixed parent-fit-right-bottom" /> -->
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - 博麗神社例大祭 配置関連ウェブシステム` : '博麗神社例大祭 配置関連ウェブシステム';
  },
});
</script>

<template>
  <div>
    <nav>ここにナビゲーションバーを入れる</nav>
    <slot />
  </div>
</template>
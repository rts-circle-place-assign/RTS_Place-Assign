<script setup lang="ts">
useHead({
  title: 'サークル申込データ修正',
})
</script>

<template>
  <o-article-template title="サークル申込データ修正">
    <div class="flex justify-center mx-auto">
      <a-link-button class="mb-20" link="/fix/result"
        >修正結果集計</a-link-button
      >
    </div>
    <m-fix-flow />
  </o-article-template>
</template>

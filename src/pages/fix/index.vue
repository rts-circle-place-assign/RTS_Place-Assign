<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'サークル申込データ修正トップ',
})
</script>

<template>
  <o-article-template title="サークル申込データ修正トップ">
    <div class="flex justify-center mx-auto">
      <a-link-button class="mb-20" link="/fix/result"
        >修正結果集計</a-link-button
      >
    </div>
    <m-article-window head="修正作業の流れ">
      <template #head>
        <m-fix-flow />
      </template>
    </m-article-window>
    <m-article-window head="修正作業後の流れ">
      <template #head>
        <m-after-fix-flow />
      </template>
    </m-article-window>
  </o-article-template>
</template>

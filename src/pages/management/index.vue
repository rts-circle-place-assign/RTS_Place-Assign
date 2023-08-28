<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '配置作業管理トップ',
})
</script>

<template>
  <o-article-template title="配置作業管理トップ">
    <m-article-window head="配置作業準備日の流れ">
      <template #head>
        <m-place-assign-flow />
      </template>
    </m-article-window>
  </o-article-template>
</template>

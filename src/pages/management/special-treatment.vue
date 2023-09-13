<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '変更・特殊対応履歴一覧',
})
</script>

<template>
  <o-article-template title="変更・特殊対応履歴一覧">
    <m-article-window head="">
      <template #head>
        <m-special-treatment-table />
      </template>
    </m-article-window>
  </o-article-template>
</template>

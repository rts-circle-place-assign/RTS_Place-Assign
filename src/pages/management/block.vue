<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '4.ブロック流し込み',
})
</script>

<template>
  <o-article-template title="4.ブロック流し込み">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            4紙を印刷する。
            <a-link-button link="/management/block-records" class="m-10">4紙</a-link-button>
          </li>
          <li></li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

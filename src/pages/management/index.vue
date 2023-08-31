<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '配置作業管理トップ',
})
</script>

<template>
  <o-article-template title="配置作業管理トップ">
    <m-article-window head="作業の流れ">
      <template #head>
        <m-article-paragraph secondhead="配置作業準備日の流れ">
          <template #secondhead>
            <m-place-assign-before-flow />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="配置作業日の流れ">
          <template #secondhead>
            <m-place-assign-the-day-flow />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

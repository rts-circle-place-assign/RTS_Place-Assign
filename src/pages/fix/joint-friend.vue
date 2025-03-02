<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '合体サークルなかよしコード利用チェック',
})
</script>

<template>
  <o-article-template title="合体サークルなかよしコード利用チェック">
    <m-article-window head="作業概要">
      <template #head>
        <p>なかよしコードを利用しているサークル内で合体が完結しているか確認する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <ol>
          <li>
            下の表で、「合体有無」が「あり」で「合体成立」が「false」になっている箇所を探し、該当のサークルの合体先サークルになかよしコードを設定する。
          </li>
        </ol>
        <m-article-paragraph secondhead="なかよしコード利用サークル一覧">
          <template #secondhead>
            <o-joint-friend />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

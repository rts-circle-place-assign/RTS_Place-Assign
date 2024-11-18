<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'サークルカット規格チェック',
})

const items = [
  {
    text: 'サクカを確認しましたか？',
    itemValue: 'サクカ確認',
  },
]
</script>

<template>
  <o-article-template title="サークルカット規格チェック">
    <m-article-window head="作業概要">
      <template #head>
        <ul>
          <li>サークルカットがつぶれていないか、半分切れてしまっていないかチェックする</li>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>サークルカットがつぶれていないか、半分切れてしまっていないかを目視で確認してください。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="企画カード一覧">
          <template #secondhead>
            <o-kikaku-card-list />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>

    <m-check-list :items="items" link="/fix/cut-check" width="350" next="処理⑩ーサークルカット規格チェックへ" />
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

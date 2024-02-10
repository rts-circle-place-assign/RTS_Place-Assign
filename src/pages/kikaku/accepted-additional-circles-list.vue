<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '二次募集受付サークル一覧',
})
</script>

<template>
  <o-article-template title="二次募集受付サークル一覧">
    <m-article-window head="ページ作成手順">
      <template #head>
        <ol>
          <li>
            以下のHTMLコード3つを順番にWordPressのHTMLコード部分にコピペする。
            <m-accepted-circles-code />
          </li>
          <li>
            以下のCSSをWordPressのHTMLコード部分に貼り付ける。
            <a-accepted-circles-list-css />
          </li>
        </ol>
      </template>
    </m-article-window>
    <lazy-o-accepted-circles-list :isSecond="true" />
  </o-article-template>
</template>

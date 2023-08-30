<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '外周・島中SP数調整スプシ初期設定',
})
</script>

<template>
  <o-article-template title="外周・島中SP数調整スプシ初期設定">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            理論SP数・短冊カウントを比較する
            <a
              href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              >スプシ</a
            >を開く。
            <a-link-button
              link="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit?usp=sharing"
              >外周・島中SP数調整スプシ</a-link-button
            >
          </li>
          <li>
            「理論SP」の列に以下の表の数値を入力する。
            <o-sakuhin-count-excel-table />
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

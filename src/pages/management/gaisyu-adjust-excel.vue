<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Excelファイル初期設定',
})
</script>

<template>
  <o-article-template title="Excelファイル初期設定">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            理論SP数・短冊カウントを比較するExcelファイルを開く。
            <m-excel-download />
          </li>
          <li>
            Excelファイル「2.5紙-理論SP数・付箋有無合計SP数比較」シートを開く。
          </li>
          <li>「理論SP」の列に以下の表の数値を入力する。</li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

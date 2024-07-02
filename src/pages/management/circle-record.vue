<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '短冊データ確認',
})
</script>

<template>
  <o-article-template title="短冊データ確認">
    <m-article-window head="作業の流れ">
      <template #head>
        <p>荒瀬さんの出力した短冊データがこちらの想定通りに並んでいるか確認します。</p>
        <ol>
          <li>荒瀬さんから短冊のデータ（.PDFまたは.xlsx）を受け取ります。</li>
          <li>1.のデータの並びが以下のそれと完全に一致しているかを確認してください。</li>
        </ol>
      </template>
    </m-article-window>
    <m-article-window head="短冊データ">
      <template #head>
        <o-circle-records-table />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

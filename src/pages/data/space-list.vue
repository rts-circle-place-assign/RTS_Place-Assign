<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { usePlaceAssignMaster } from '~/store'

useHead({
  title: 'スペース配置表',
})

const placeAssignMasterStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignMasterStore
await fetchPlaceAssignMaster()
</script>

<template>
  <o-article-template title="スペース配置表">
    <m-article-window head="データ出力手順">
      <template #head>
        <p>館内のホールへ展開する配置表を作成するページです。</p>
        <ol>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1g4PI3fDTWVkhuZvoBQDn1XkGenl9ebfb-pSLCQZTnaA/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              >「配置短冊マスタ」スプシ</a
            >に今期のデータが入っているか確認する。
          </li>
          <li>新規Excelファイルを作成し、「配置マスタ」シートを作成する。</li>
          <li>
            以下のボタンを押し、2.で作成したシートに値のみ貼り付ける。
            <a-html-copy-button id="hall-master" name="ホール向けマスタの表" width="300px" />
          </li>
          <li>「2SP」シートを作成する。</li>
          <li>
            以下のボタンを押し、2.で作成したシートに値のみ貼り付ける。
            <a-html-copy-button id="twoSp-master" name="2SPサークルの表" width="280px" />
          </li>
          <li>「事故SP」シートを作成する。</li>
          <li>
            以下のボタンを押し、2.で作成したシートに値のみ貼り付ける。
            <a-html-copy-button id="jiko-master" name="事故SPの表" width="250px" />
          </li>
        </ol>
        <lazy-o-place-assign-master-for-hall />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

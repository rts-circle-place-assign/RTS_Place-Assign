<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { usePlaceAssignMaster } from '~/store'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '事故・欠席POP作成',
})

const placeAssignMasterStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignMasterStore
await fetchPlaceAssignMaster()

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
</script>

<template>
  <o-article-template title="事故・欠席POP作成">
    <m-article-window head="作成手順">
      <template #head>
        <ol>
          <li>「{{ kaikiEn }}_jiko_x.x.x.xlsx」を作成する。</li>
          <li>
            下のボタンを押してtable部分のコードをコピーする。
            <a-html-copy-button id="jiko-data-table" name="事故SPデータの表" width="280px" />
          </li>
          <li>1.で作成したシートに2.のデータを貼り付ける。</li>
          <li>「{{ kaikiEn }}_jiko-absent_x.x.x.pptm」を開く。</li>
          <li>
            「開発」>「マクロ」>「CreateSlides」を開き、designTemplate = 1、cstTargetEDesign =
            1であることを確認した上でマクロを実行し、データとして1.のブックを読み込む。
          </li>
          <li></li>
        </ol>
      </template>
    </m-article-window>
    <m-article-window head="事故SPデータ">
      <template #head>
        <m-jiko-space-table />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

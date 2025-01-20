<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { usePlaceAssignMaster } from '~/store'
import circlelist from '~/assets/data/SCP6_cricleList__20250111_065704.json'

useHead({
  title: 'サークル配置',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()

const placeAssignMasterStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignMasterStore
await fetchPlaceAssignMaster()

const list = circlelist
</script>

<template>
  <o-article-template title="サークル配置">
    <!--    <m-article-window head="ページ作成手順">-->
    <!--      <template #head>-->
    <!--        <ol>-->
    <!--          <li>-->
    <!--            配置短冊マスタが出たら、<a-->
    <!--              href="https://docs.google.com/spreadsheets/d/1g4PI3fDTWVkhuZvoBQDn1XkGenl9ebfb-pSLCQZTnaA/edit"-->
    <!--              target="_blank"-->
    <!--              rel="noopener"-->
    <!--              >配置短冊マスタスプシ</a-->
    <!--            >の「{{ smallKaikiEn }}」シートに貼り付ける。-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <a-->
    <!--              href="https://script.google.com/home/projects/1NW5bhlgBivICY-79b40dpPekJDwZMoPTtjt4c3-HkRN55Unq6lgv09iU/edit"-->
    <!--              >配置短冊マスタデータ取得GAS</a-->
    <!--            >の10行目のシート名を変更して、デプロイする。-->
    <!--          </li>-->
    <!--          <li>2.のURLを.envのGAS_PLACE_ASSIGN_MASTER_URLに貼り付けて再起動。</li>-->
    <!--          <li>-->
    <!--            以下のボタンを押して配置WEBマスタのHTMLをコピーし、<a-->
    <!--              href="https://docs.google.com/spreadsheets/d/1PDRtF0oHosaxSi0ad67KG6kyRL7F7Y5-6IWZjCMoe2M/edit"-->
    <!--              >サークル配置発表WEBマスタスプシ</a-->
    <!--            >の「{{ smallKaikiEn }}」シートに貼り付ける。-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            以下のHTMLコード3つを順番にWordPressのHTMLコード部分にコピペする。-->
    <!--            <m-place-assign-announce-code />-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            以下のCSSをWordPressのカスタムCSS部分に貼り付ける。-->
    <!--            <a-place-assign-announce-css />-->
    <!--          </li>-->
    <!--        </ol>-->
    <!--      </template>-->
    <!--    </m-article-window>-->
    <!--    <lazy-o-place-assign-table />-->
    <m-place-assign-table :data="list" />
  </o-article-template>
</template>

<style scoped lang="scss"></style>

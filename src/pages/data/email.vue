<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHead } from '@unhead/vue'
import { useEmailStore, useKikakuAllStore, usePlaceAssignMaster } from '~/store/'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '発送マスタ作成',
})

const emailStore = useEmailStore()
const { fetchEmailList } = emailStore
await fetchEmailList()

const placeAssignStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignStore
await fetchPlaceAssignMaster()

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()
</script>

<template>
  <o-article-template title="発送マスタ">
    <m-article-window head="作成手順">
      <template #head>
        <ol>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1g4PI3fDTWVkhuZvoBQDn1XkGenl9ebfb-pSLCQZTnaA/edit"
              target="_blank"
              rel="noopener"
              >配置短冊マスタスプシ</a
            >が今期のものになっていることを確認する。
          </li>
          <li>
            <a
              href="https://script.google.com/home/projects/1cDi9aiB8zqZIdZvnaSQClydCT2YF30K53ENCl0qzyQnyD2KKVxCRQ2M0/edit"
              >発送情報取得GAS</a
            >の10行目のシート名を{{ smallKaikiEn }}に変更して、デプロイする。
          </li>
          <li>2.のURLを.envのGAS_EMAIL_URLに貼り付けて再起動。</li>
          <li>
            以下のボタンを押して配置WEBマスタのHTMLをコピーする。
            <a-html-copy-button id="email-master-table" name="表" />
          </li>
        </ol>
        <o-email-master id="email-master-table" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { usePlaceAssignMaster } from '~/store'

const placeAssignMasterStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignMasterStore
await fetchPlaceAssignMaster()
</script>

<template>
  <o-article-template title="WEBマスタ作成">
    <m-article-window head="作成手順">
      <template #head>
        <ol>
          <li>
            配置短冊マスタが出たら、<a
              href="https://docs.google.com/spreadsheets/d/1g4PI3fDTWVkhuZvoBQDn1XkGenl9ebfb-pSLCQZTnaA/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              >配置短冊マスタスプシ</a
            >の「"kaiki"」シートに貼り付ける。
            <ul>
              <li>
                <b
                  >貼り付ける前に、スプシのサークル名～ペンネームカナセルのデータ型を必ず標準型から文字列型に変更しておくこと</b
                >。
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://script.google.com/u/0/home/projects/1NW5bhlgBivICY-79b40dpPekJDwZMoPTtjt4c3-HkRN55Unq6lgv09iU/edit"
              >配置短冊マスタデータ取得GAS</a
            >のシート名を変更して、デプロイする。
          </li>
          <li>3.でデプロイしたGASのURLを.envのGAS_PLACE_ASSIGN_MASTER_URLに貼り付ける。</li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1PDRtF0oHosaxSi0ad67KG6kyRL7F7Y5-6IWZjCMoe2M/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              >配置発表スプシ</a
            >を開き、"kaiki"のシートを作成する。
          </li>
          <li>
            以下のボタンを押し、4.で作成したシートに値のみ貼り付ける。
            <a-html-copy-button id="web-master" name="WEBマスタの表" width="280px" />
          </li>
          <li>
            そのまま <nuxt-link to="/kikaku/place-assign">配置発表ページ作成</nuxt-link>へ移動。
            <a-link-button link="/kikaku/place-assign" width="280px">「配置発表ページ作成」ページへ</a-link-button>
          </li>
        </ol>
        <o-place-assign-master-data />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

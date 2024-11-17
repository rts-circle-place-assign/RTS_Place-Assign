<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: 'mongoDB Collection作成',
})

const config = useRuntimeConfig()

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()

const items = [
  {
    text: 'mongoDB Atlasに正しく追加されていますか？',
    itemValue: 'atlas追加',
  },
]
</script>

<template>
  <o-article-template title="mongoDB Collection作成">
    <m-article-window head="作業概要">
      <template #head> mongoDB Atlasの中に今会期の特殊対応を格納するCollectionを作成する。 </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <ol>
          <li>
            <a href="https://cloud.mongodb.com/v2/64d087af9245ba61033130ee#/overview" target="_blank" rel="noopener"
              >mongoDB</a
            >にアクセスする。
          </li>
          <li>
            Googleアカウントでログインする。
            <ul>
              <li>メールアドレス：circle.place.assign@gmail.com</li>
              <li>パスワード：{{ config.public.google_password }}</li>
            </ul>
          </li>
          <li>左側メニューから「Clusters」を選択し、「place-assign」の「Browse Collections」ボタンを押す。</li>
          <li>"test"にカーソルを合わせ、出てきた「+」ボタンを押す。</li>
          <li>
            以下の設定で「Create」ボタンを押す。
            <ul>
              <li>Collection name: {{ smallKaikiEn }}</li>
              <li>Additional Preferences: Clustered Index Collection</li>
              <li>Index name: (空白）</li>
            </ul>
          </li>
        </ol>
      </template>
    </m-article-window>
    <m-check-list :items="items" link="/before-fix/store" width="300" next="処理③ー会期情報変更へ" />
  </o-article-template>
</template>

<style scoped lang="scss"></style>

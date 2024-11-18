<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: 'GAS編集・デプロイ',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()
</script>

<template>
  <o-article-template title="GAS編集・デプロイ">
    <m-article-window head="作業概要">
      <template #head>
        <p>各種データを取得するGASを今期向けに編集する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <ol>
          <li>
            <a
              href="https://script.google.com/home/projects/1P2wwWu7pXPVoek23MivVcrm2wDubH9fmuvLYn24Y-7p4Ob7KJR8MCsOG/edit"
              target="_blank"
              rel="noopener"
              >学割申請情報取得GAS</a
            >を開き、10行目のシート名を「{{ smallKaikiEn }}_studentDiscount」に変更する。
          </li>
          <li>
            「デプロイ」>「新しいデプロイ」を押し、以下の設定で「デプロイ」を押す。
            <ul>
              <li>説明：{{ kaikiEn }}</li>
              <li>次のユーザーとして実行：自分（circle.place.assign@gmail.com）</li>
              <li>アクセスできるユーザー：全員</li>
            </ul>
          </li>
          <li>
            表示されたURLをコピーして、.envのGAS_STUDENTDISCOUNT_APPLICATION_URLに貼り付ける。<br />※.envファイルを保存するたびにNuxtが再起動してしまうので、<b>一通り編集し終えるまで.envファイルを保存しないこと</b>。
          </li>
          <li>
            <a
              href="https://script.google.com/home/projects/1a4JBTLmrfCdgHIOkfmIatcFgqMp0gRCOHBTsfjmdbk3nZK6Dro7IUiZ1/edit"
              target="_blank"
              rel="noopener"
              >申込情報学割関連情報取得GAS</a
            >を開き、10行目のシート名を「{{
              smallKaikiEn
            }}」に変更してデプロイし、URLを.envのGAS_STUDENTDISCOUNT_URLに貼り付ける。
          </li>
          <li>
            <a
              href="https://script.google.com/home/projects/1m_2q3vGEdVNbRhMwgIBvatH-S1YYkF8L6GDWLK1dQykZ-lfBiAMGesV3/edit"
              target="_blank"
              rel="noopener"
              >申込情報取得GAS</a
            >を開き、10行目のシート名を「{{ smallKaikiEn }}」に変更してデプロイし、URLを.envのGAS_URLに貼り付ける。
          </li>
          <li>
            <a
              href="https://script.google.com/home/projects/11dx-Mz6_Ir1zEBLjs8RTQGIGTLxSve7-6RgizjgDJW4VEdm_GV2TM-ST/edit"
              target="_blank"
              rel="noopener"
              >受付サークル一覧取得GAS</a
            >を開き、10行目のシート名を「{{
              smallKaikiEn
            }}_base」に変更してデプロイし、URLを.envのGAS_BEFORE_FIX_URLに貼り付ける。
          </li>
          <li>
            ここまで終わったら<nuxt-link to="/fix/">「データ修正トップ」ページ</nuxt-link
            >に戻り、やり残した作業がないか確認する。
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

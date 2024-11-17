<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '学割申請データ入力',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const smallKaikiEn = state.value.kaikiEn.toLowerCase()

const items = [
  {
    text: '「store格納情報」の表の内容は今期のものになっていますか？',
    itemValue: 'store格納情報',
  },
]
</script>

<template>
  <o-article-template title="学割申請データ入力">
    <m-article-window head="作業概要">
      <template #head>
        <p>今期の申込情報を格納するスプシに、学割申請情報を格納する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1lw1a1RqQ2Kdszu8MUBWsSzagO24WStVWNoGjKNCHXJc/edit?gid=1262282731#gid=1262282731"
                  target="_blank"
                  rel="noopener"
                  >学割申請フォーム回答スプシ</a
                >を開く。
              </li>
              <li>「お名前（本名）」「サークル名」の列をコピーする。</li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit?gid=1156355093#gid=1156355093"
                  target="_blank"
                  rel="noopener"
                  >サークル申込情報スプシ</a
                >を開く。
              </li>
              <li>「{{ smallKaikiEn }}_studentDiscount」シートを開き、2.でコピーしたものを貼り付ける。</li>
              <li>
                <a
                  href="https://script.google.com/home/projects/1P2wwWu7pXPVoek23MivVcrm2wDubH9fmuvLYn24Y-7p4Ob7KJR8MCsOG/edit"
                  target="_blank"
                  rel="noopener"
                ></a
                >学割申請情報取得GASを開く。
              </li>
              <li>
                「デプロイ」>「新しいデプロイ」を押し、以下の設定で「デプロイ」を押す。
                <ul>
                  <li>説明：会期英略称</li>
                  <li>次のユーザーとして実行：自分（circle.place.assign@gmail.com）</li>
                  <li>アクセスできるユーザー：全員</li>
                </ul>
              </li>
              <li>表示されたURLをコピーして、.envのGAS_STUDENTDISCOUNT_APPLICATION_URLに貼り付ける。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list
          :items="items"
          link="/before-fix/student-discount-application"
          width="350"
          next="学割申請データ入力へ"
        />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '修正前作業',
})
const links = [
  {
    name: '今会期申込データ格納スプシ',
    link: 'https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit',
  },
  {
    name: '今会期申込データ取得GASエディタ',
    link: 'https://script.google.com/u/0/home/projects/1m_2q3vGEdVNbRhMwgIBvatH-S1YYkF8L6GDWLK1dQykZ-lfBiAMGesV3/edit',
  },
  {
    name: '学割申請情報GASエディタ',
    link: 'https://script.google.com/home/projects/1P2wwWu7pXPVoek23MivVcrm2wDubH9fmuvLYn24Y-7p4Ob7KJR8MCsOG/edit',
  },
  {
    name: '今会期サクカフォルダ',
    link: 'https://drive.google.com/drive/folders/1gUq07jrxuS-tT4icm74uYtiNRx0vFTMN',
  },
  {
    name: '今会期サクカファイルID取得GASエディタ',
    link: 'https://script.google.com/home/projects/1UwdYA4Ho97K6dRoxg7-JVkHWYKziQ3yRUPJNcMcRHZ2Ev8wroqE_x4w7/edit',
  },
  {
    name: '過去配置データ格納スプシ',
    link: 'https://docs.google.com/spreadsheets/d/1wPpLGmEWqXI5Y0uc5vlg2EEW8yaDGZ5Obk_JfErZI7U/edit',
  },
  {
    name: '過去配置データ取得GASエディタ',
    link: 'https://script.google.com/home/projects/1ShzyjeAb1uqkwcFEHKi_qlGGwDWdk_KbZRO1jli9joLRxTgrhROKvydo/edit',
  },
]

const beforeItems = [
  {
    text: '今会期のデータを`/composables/useKaikiStore.ts`に入力しましたか？',
    itemValue: '会期データ入力',
  },
  {
    text: '学割申請者と照合用コードの情報を<a href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit#gid=748512896" target="blank" rel="noopener">スプシ</a>に入力しましたか？',
    itemValue: '学割申請データ入力',
  },
  {
    text: '学割申請の情報を取得する<a href="https://script.google.com/home/projects/1P2wwWu7pXPVoek23MivVcrm2wDubH9fmuvLYn24Y-7p4Ob7KJR8MCsOG/edit" target="blank" rel="noopener">GAS</a>の10行目にあるシート名を今会期のシートに変更した上で再デプロイして、そのURLを.envの`GAS_STUDENTDISCOUNT_URL`にコピーしましたか？',
    itemValue: '学割申請GAS',
  },
  {
    text: 'サクカを格納する<a href="https://drive.google.com/drive/folders/1gX8Jk6HutEtAxBp_7eAPrmQLaX6hxcnY" target="blank" rel="noopener">フォルダ</a>の中に今会期のフォルダを作りましたか？',
    itemValue: 'サクカフォルダ作成',
  },
  {
    text: '配置データを格納する<a href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit" target="blank" rel="noopener">スプシ</a>に、今会期分のシートを作成しましたか？',
    itemValue: 'シート作成',
  },
  {
    text: 'サクカのファイルIDを格納する<a href="https://script.google.com/home/projects/1m_2q3vGEdVNbRhMwgIBvatH-S1YYkF8L6GDWLK1dQykZ-lfBiAMGesV3/edit" target="blank" rel="noopener">GAS</a>の8行目にあるフォルダID（フォルダIDは、1番目で新規作成したフォルダのID）と、38行目の格納先シート名（シート名は、2番目で作成した_cutシート）を変更しましたか？',
    itemValue: 'サクカGAS取得元フォルダID変更',
  },
  {
    text: '過去の配置データを<a href="https://docs.google.com/spreadsheets/d/1wPpLGmEWqXI5Y0uc5vlg2EEW8yaDGZ5Obk_JfErZI7U/edit" target="blank" rel="noopener">スプシ</a>に格納しましたか？',
    itemValue: '配置データ格納',
  },
  {
    text: '過去の配置データを取得する<a href="https://script.google.com/home/projects/1ShzyjeAb1uqkwcFEHKi_qlGGwDWdk_KbZRO1jli9joLRxTgrhROKvydo/edit" target="blank" rel="noopener">GAS</a>に直前会期のものを入力・再デプロイして、そのURLを.envの1行目にコピーしましたか？',
    itemValue: '過去配置データGASURL環境変数格納',
  },
  {
    text: '前回の壁の情報を`assets/data/gaisyu.json`に入力しましたか？',
    itemValue: '外周データ格納',
  },
  {
    text: 'データを取得する<a href="https://script.google.com/home/projects/10pj3ww4Fn-AD07PawLphsZGoBPvUqHyrfRAe0UN3oMLD3R1siKxr8IJ2/edit" target="blank" rel="noopener">GAS</a>で、10行目の取得元シート名を変更しましたか？',
    itemValue: 'GASデータ変更',
  },
]

const items = [
  {
    text: 'サクカを↑の2番目で新規作成したフォルダに格納しましたか？',
    itemValue: 'サクカ格納',
  },
  {
    text: '↑の<a href="https://script.google.com/home/projects/1m_2q3vGEdVNbRhMwgIBvatH-S1YYkF8L6GDWLK1dQykZ-lfBiAMGesV3/edit" target="blank" rel="noopener">GAS</a>をデプロイ・実行して、サクカのファイルIDをスプシに格納しましたか？',
    itemValue: 'サクカID格納',
  },
  {
    text: '修正前のデータを<a href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/" target="blank" rel="noopener">スプシ</a>の新しいシートに格納して、同内容を別シートにコピーしましたか？',
    itemValue: '修正前データコピー',
  },
  {
    text: '今会期のデータを取得する<a href="https://script.google.com/home/projects/10pj3ww4Fn-AD07PawLphsZGoBPvUqHyrfRAe0UN3oMLD3R1siKxr8IJ2/edit">GAS</a>をデプロイして、そのURLを.envの1行目にコピーしましたか？',
    itemValue: '今会期配置データGASURL環境変数格納',
  },
]

const selectItems = ref([])
</script>

<template>
  <o-article-template title="修正前作業">
    <m-article-window head="はじめに">
      <template #head>
        <m-article-paragraph secondhead="作業時Googleアカウント">
          <template #secondhead>
            <p class="bold">作業時（特にGASのデプロイ時）は「配置関連GAS実行用」のアカウントで行うこと！</p>
            <ul>
              <li>アカウント名：circle.place.assign@gmail.com</li>
              <li>パスワード：（ながたに聞いてください）</li>
            </ul>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-article-window head="作業関係リンク集">
      <template #head>
        <ul>
          <li v-for="(content, j) in links" :key="j">
            <a :href="content.link" target="blank" rel="noopener"> {{ content.name }}</a>
          </li>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業時チェックリスト">
      <template #head>
        <m-article-paragraph secondhead="事前作業">
          <template #secondhead>
            <label v-for="(item, i) in beforeItems" :key="'before' + i" :for="item.itemValue" class="label">
              <input :id="item.itemValue" v-model="selectItems" type="checkbox" :value="item.itemValue" class="input" />
              <span class="mark"></span>
              <span class="text" v-html="item.text"></span>
            </label>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="データ修正当日の作業">
          <template #secondhead>
            <div v-for="(item, i) in items" :key="i">
              <label :for="'item' + i" class="label">
                <input :id="'item' + i" v-model="selectItems" type="checkbox" :value="item.itemValue" class="input" />
                <span class="mark"></span>
                <span class="text" v-html="item.text"></span>
              </label>
            </div>
          </template>
        </m-article-paragraph>
        <a-link-button v-show="items.length === selectItems.length" link="/fix/student-discount"
          >処理①ー学割チェックへ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

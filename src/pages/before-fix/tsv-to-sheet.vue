<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '申込情報スプシ格納',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()

const items = [
  {
    text: '見出しが日本語のままの列は残っていませんか？',
    itemValue: '見出し',
  },
  {
    text: '「base」シートは保護されていますか？',
    itemValue: '編集保護',
  },
]
const headItems = [
  {
    en: 'rtsId',
    jp: '仮ID',
  },
  {
    en: 'msnum',
    jp: 'MS申込番号',
  },
  {
    en: 'gattainum',
    jp: '合体受付番号',
  },
  {
    en: 'friendCode',
    jp: 'なかよしコード',
  },
  {
    en: 'circlename',
    jp: 'サークル名',
  },
  {
    en: 'circlenamekana',
    jp: 'サークル名カナ',
  },
  {
    en: 'penname',
    jp: 'ペンネーム',
  },
  {
    en: 'pennamekana',
    jp: 'ペンネームカナ',
  },
  {
    en: 'sakuhincode',
    jp: '配置希望作品コード',
  },
  {
    en: 'mediacode',
    jp: '配置希望メディアコード',
  },
  {
    en: 'hosoku',
    jp: 'ジャンルの補足説明',
  },
  {
    en: 'seijin',
    jp: '成人向け頒布物の有無',
  },
  {
    en: 'musicgenre',
    jp: '音楽ジャンル',
  },
  {
    en: 'bookcharacter',
    jp: 'コード１０_１',
  },
  {
    en: 'bookgenre',
    jp: 'コード１０_２',
  },
  {
    en: 'bookseijingenre',
    jp: 'コード１０_3',
  },
  {
    en: 'goodsgenre',
    jp: 'コード３０_１',
  },
  {
    en: 'web',
    jp: 'WEB',
  },
  {
    en: 'webok',
    jp: 'WEB_FLG',
  },
  {
    en: 'pixiv',
    jp: 'PIXIV',
  },
  {
    en: 'pixivok',
    jp: 'PIXIV_FLG',
  },
  {
    en: 'twitter',
    jp: 'TWITTER',
  },
  {
    en: 'twitter',
    jp: 'TWITTER_FLG',
  },
  {
    en: 'hanpu1name',
    jp: '発行誌名１',
  },
  {
    en: 'hanpu1date',
    jp: '発行日１',
  },
  {
    en: 'hanpu1price',
    jp: '価格１',
  },
  {
    en: 'hanpu1amount',
    jp: '持ち込み数１',
  },
  {
    en: 'email',
    jp: 'MAIL',
  },
  {
    en: 'spnum',
    jp: '申込内容',
  },
]
</script>

<template>
  <o-article-template title="申込情報スプシ格納">
    <m-article-window head="作業概要">
      <template #head>
        <p>統合マスタを加工し、スプシに貼り付ける。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>「{{ kaikiEn }}_スプシ格納用.xlsx」を開く。</li>
              <li>「代表者本名 姓」の左に新たに列を挿入し、1行目のセルに「氏名結合」と入力する。</li>
              <li>
                挿入した列の2行目から、「="代表者本名 姓">"&&"代表者本名 名"」の形式で姓と名を結合した文字列を作成する。
              </li>
              <li>「氏名結合」列の左に新たに列を挿入し、1行目のセルに「name」と入力する。</li>
              <li>「氏名結合」の内容をコピーし、「name」の列に</li>
              <li>
                各見出しを以下のように英語化する。（順不同可）
                <ul class="container">
                  <li v-for="(item, i) in headItems" :key="i" class="column">{{ item.jp }}: {{ item.en }}</li>
                </ul>
              </li>
              <li>
                日本語のままの見出しを削除する。
                <ul>
                  <li>「削除」から「編集可否」までの列全て</li>
                  <li>「合体サークル名」</li>
                  <li>「申込みSP数」「サークルid」</li>
                  <li>「代表者本名 姓」から「性別」までの列全て</li>
                  <li>「アンケート1」から「クーポン割引額」までの列全て</li>
                </ul>
              </li>
              <li>先頭列の左に新たに列を挿入し、A1セルに「id」と入力する。</li>
              <li>A2セルに1を入力し、最終行まで連番でオートフィルする。</li>
              <li>
                「{{ kaikiEn }}_tsvマスタデータ.xlsx」を開き、「MS申込番号」と「照合用コード」を「{{
                  kaikiEn
                }}_スプシ格納用.xlsx」の新規シートにコピペする。
              </li>
              <li>
                元あったシートの最終列の右の列の1行目に「code」と入力し、「MS申込番号」をkeyとして「照合用コード」をXLOOKUP関数の返り値として入力する。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit?gid=1156355093#gid=1156355093"
                  target="_blank"
                  rel="noopener"
                  >サークル申込情報スプシ</a
                >を開く。
              </li>
              <li>
                「{{ smallKaikiEn }}_base」シートを開き、シートを値のみコピペしてする。<br />
                ※「-M」「午前11時」「1569」などデータ型に注意する必要があるサークル名・ペンネームが正しく貼り付けられているか直接目視で確認すること。
              </li>
              <li>「{{ smallKaikiEn }}_base」シートのタブを右クリックし、「シートを保護」を押す。</li>
              <li>「権限を設定」を押し、「この範囲を編集するときに警告を表示する」を選択して「完了」を押す。</li>
              <li>「{{ smallKaikiEn }}_base」シートをコピーして「{{ smallKaikiEn }}」にリネームする。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list :items="items" link="/before-fix/new-sakuhin-code" next="新規作品コード追加へ" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem 2rem;
}
.column {
  width: calc(50% - 2rem);
}
</style>

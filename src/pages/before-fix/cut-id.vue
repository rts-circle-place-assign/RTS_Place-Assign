<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: 'サークルカットID取得',
})
const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()

const items = [
  {
    text: '「base」シートと本シートの「cutId」列にファイルidが入力されていますか？',
    itemValue: 'ファイルid',
  },
  {
    text: '「スプシ格納用.xlsx」とリネームしましたか？',
    itemValue: 'ファイル名確認',
  },
  {
    text: '「Sheet1」シートに「cutId」の値が入力されていますか？',
    itemValue: 'cutId',
  },
]
</script>

<template>
  <o-article-template title="サークルカットID取得">
    <m-article-window head="作業概要">
      <template #head>
        <p>Googleドライブに格納したサークルカットのIDを取得し、申込情報に統合する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1gX8Jk6HutEtAxBp_7eAPrmQLaX6hxcnY"
                  target="_blank"
                  rel="noopener"
                  >サークルカットが格納されているフォルダ</a
                >から「{{ smallKaikiEn }}」のフォルダを開く。
              </li>
              <li>フォルダに差し込みサークルを含め全てのサークルカットがアップロードされていることを確認する。</li>
              <li>
                <a
                  href="https://script.google.com/home/projects/1UwdYA4Ho97K6dRoxg7-JVkHWYKziQ3yRUPJNcMcRHZ2Ev8wroqE_x4w7/edit"
                  target="_blank"
                  rel="noopener"
                  >サークルカットのファイルIDを取得するGASのエディタ</a
                >を開く。
              </li>
              <li>8行目のfolderIdを、「{{ smallKaikiEn }}」のフォルダのidに変更する。</li>
              <li>38行目のシート名を、「{{ smallKaikiEn }}_cut」に変更する。</li>
              <li>
                「デプロイ」>「新しいデプロイ」を押し、以下の設定で「デプロイ」を押す。
                <ul>
                  <li>説明：{{ kaikiEn }}</li>
                  <li>次のユーザーとして実行：自分（circle.place.assign@gmail.com）</li>
                  <li>アクセスできるユーザー：全員</li>
                </ul>
              </li>
              <li>「ウェブアプリ」のURLをクリックしてGASを実行する。</li>
              <li>
                「{{ kaikiEn }}_データインポート前_統合マスタ_t<b>1</b>.xlsx」をコピーし、「{{
                  kaikiEn
                }}_スプシ格納用.xlsx」と名前を付けて保存する。
              </li>
              <li>「スプシ格納用.xlsx」ブック内に「cut」シートを新規作成する。</li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit?gid=1156355093#gid=1156355093"
                  target="_blank"
                  rel="noopener"
                  >サークル申込情報スプシ</a
                >の「{{ smallKaikiEn }}_cut」シートの内容を9.の「cut」シートに値のみコピペする。
              </li>
              <li>ファイル名（A列）の右に新たに列を挿入し、「=LEFT(A:A,5)」で数字のみ取り出す。</li>
              <li>
                「Sheet1」シート（統合マスタファイルに元々あったサークル参加申込データ）の「カット名」列をコピーして「cut」シートのD列に値のみ貼り付ける。
              </li>
              <li>
                「=XLOOKUP(D2:D2000,B2:B2000,C2:C2000)」のように、D列（カット名）をキー値にしてB列（ファイル名数字）から検索し、C列の値をE列に返す。
              </li>
              <li>「Sheet1」シートの「カット名」列の右に新たに列を挿入し、1行目を「cutId」とする。</li>
              <li>XLOOKUP関数で帰ってきた値を14.の2行目から値のみ貼り付ける。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list :items="items" link="/before-fix/tsv-to-sheet" next="申込情報スプシ格納" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'マスタファイル処理',
})

const config = useRuntimeConfig()

const items = [
  {
    text: '通常申込と学割申込両方の.tsvファイルがローカルに保存されていますか？',
    itemValue: '.tsvローカルダウンロード',
  },
  {
    text: '.xlsxファイルに「照合用コード」の列まで正しくペーストされていますか？',
    itemValue: '照合用コード',
  },
  {
    text: '.xlsxファイルで「-M」「午前11時」「1569」を直接検索してください。これらが異なる名前になっていませんか？',
    itemValue: 'データ型注意',
  },
  {
    text: '.xlsxファイルがローカルに保存されていますか？',
    itemValue: 'データ型注意',
  },
]
</script>

<template>
  <o-article-template title="マスタファイル処理">
    <m-article-window head="作業概要">
      <template #head>
        社務所サーバーに格納されているマスタデータ.tsvファイルをローカルにダウンロードし、.xlsxファイルとして出力する。
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a href="http://192.168.11.6:8080/cgi-bin/">社務所サーバー</a>にアクセスする。
                <ul>
                  <li>ユーザー名：pri_staff <br />※zimu_staffではないので注意</li>
                  <li>パスワード：{{ config.public.pri_staff_password }}</li>
                </ul>
              </li>
              <li>
                「\\192.168.11.6\020.rts個人情報作業領域\(kaiki)\マスタ作業領域\納品_yymmdd」を開き、「（会期名称）_オンライン申込データ_yymmdd.tsv」と「（会期名称）_オンライン申込データ[学割専用]_yymmdd.tsv」をローカルにダウンロードする。
              </li>
              <li>Excelを開く。</li>
              <li>「データ」タブから「テキストまたはCSVファイルから」を押す。</li>
              <li>
                「データの取り込み」ウィンドウが出てきたら、読み込み対象のファイル種別を「テキストファイル（*.prn,*.txt,*.vsc）」から「すべてのファイル（*.*）」に変更して「（会期名称）_オンライン申込データ_yymmdd.tsv」を選択し、「インポート」を押す。
              </li>
              <li>データが正しく読み込めていることを確認できたら「読み込み」を押す。</li>
              <li>同様の操作を「（会期名称）_オンライン申込データ[学割専用]_yymmdd.tsv」に対しても行う。</li>
              <li>
                新規にシートを作成し、7.と6.の順でシートを貼り付け、テーブル化する。
                <p>
                  ※「-M」「午前11時」「1569」などデータ型に注意する必要があるサークル名・ペンネームが正しく貼り付けられているか直接目視で確認すること。
                </p>
              </li>
              <li>セルの幅を調整し、「（kaiki）_tsvマスタデータ.xlsx」と名前を付けて保存。</li>

              <textarea id="csv-window" name="" cols="30" rows="10"></textarea>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list :items="items" link="/fix/new-sakuhin-code" width="350" next="新規作品コード追加へ" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { usePlaceAssignMaster } from '~/store'
import OSpaceLabelData from '~/components/organisms/OSpaceLabelData.vue'

useHead({
  title: 'スペースシールデータ作成',
})

const placeAssignMasterStore = usePlaceAssignMaster()
const { fetchPlaceAssignMaster } = placeAssignMasterStore
await fetchPlaceAssignMaster()
</script>

<template>
  <o-article-template title="スペースシールデータ作成">
    <m-article-window head="作成手順">
      <template #head>
        <ol>
          <li>
            予めサクカ画像をPC内にダウンロードしておき、「流し込みデータ」フォルダ内に格納する。また、「desk-one.svgz」「desk-two.svgz」「desk_jiko.svgz」も同フォルダ内に格納する。
          </li>
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
          <li>「"kaiki"_space-label_"version".xlsx」を作成し、「流し込み元データ」フォルダ内に格納する。</li>
          <li>
            以下のボタンを押し、5.のxlsxに値のみ貼り付ける。
            <ul>
              <li><b>貼り付ける前に、セル全体のデータ型を「標準」から「文字列」に変更しておくこと</b>。</li>
              <li>貼り付けた後、「カット番号」「机」の前に「'@」をつけること。</li>
            </ul>
            <a-html-copy-button id="digiAna-label" name="デジアナサークルの表" width="300px" />
            <a-html-copy-button id="normal-label" name="通常サークルの表" width="250px" />
          </li>
          <li>6.のxlsxを保存した上で、「流し込みデータ」フォルダ内に.csvで保存する。</li>
          <li>Indesignを起動して前回の.inddファイルを開き、今期に名前を変更して別名保存。</li>
          <li>上部メニューの「ウィンドウ」>「ユーティリティ」>「データ結合」より「データ結合」ウィンドウを開く。</li>
          <li>ウィンドウ右側のメニュー（三本線）から「データソースを選択」を押す。</li>
          <li>
            「新しいデータソースを～再度挿入しなければならない場合があります。」のウィザードが出てきたら「OK」を押して先に進む。
          </li>
          <li>8.の.csvを選択する。</li>
          <li>データが紐づいていることを確認し、ウィンドウ右側のメニュー（三本線）から「プレビュー」を押す。</li>
          <li>問題なく流し込めていたら、ウィンドウ右側のメニュー（三本線）から「結合ドキュメントを作成」を押す。</li>
          <li>
            設定が以下になっていることを確認し、「複数レコードレイアウトをプレビュー」にチェックを入れる。
            <ul>
              <li>
                <ul>
                  <li>結合するレコード：すべてのレコード</li>
                  <li>ドキュメントページあたりのレコード：複数レコード</li>
                  <li>ドキュメントの作成時にオーバーセットテキストレポートを生成：チェックあり</li>
                  <li>画像が見つからないときに警告：チェックあり</li>
                </ul>
              </li>
              <li>
                複数レコードレイアウト
                <ul>
                  <li>マージン：上23mm, 下21.2mm, 左21mm, 右18.6mm</li>
                  <li>配置方法：「左から右」</li>
                  <li>間隔：列間3mm, 行間2.7mm</li>
                </ul>
              </li>
              <li>
                オプション
                <ul>
                  <li>サイズ調整：画像の縦横比率を保持</li>
                  <li>フレーム中央：チェックあり</li>
                  <li>画像をリンク：チェックあり</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>レイアウトが問題なかったら、「OK」を押す。</li>
          <li>オーバーセットテキストが生成されたら、該当箇所を探してフォントサイズを小さくする。</li>
          <li>pdfで書きだす。</li>
        </ol>
        <o-space-label-data />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

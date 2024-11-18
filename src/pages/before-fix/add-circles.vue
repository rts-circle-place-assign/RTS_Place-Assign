<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '差し込みサークル追加',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const kaikiJa = state.value.kaikiJa
const kaikiEn = state.value.kaikiEn
const smallKaikiEn = kaikiEn.toLowerCase()

const items = [
  {
    text: '統合マスタのverは「1」以上になっていますか？',
    itemValue: '統合マスタver',
  },
  {
    text: 'サクカのファイル名は「（3001以上の数）.png」になっていますか？',
    itemValue: 'サクカファイル名',
  },
  {
    text: 'サクカは社務所サーバーにアップロードされていますか？',
    itemValue: 'サクカサーバーアップロード',
  },
  {
    text: 'サクカはGoogleドライブにアップロードされていますか？',
    itemValue: 'サクカググドラアップロード',
  },
  {
    text: '追加サークルの情報は統合マスタに入力されていますか？',
    itemValue: '統合マスタ反映',
  },
  {
    text: '追加サークルの情報は黄色で塗られていますか？',
    itemValue: '黄色マーカー',
  },
]
</script>

<template>
  <o-article-template title="差し込みサークル追加">
    <m-article-window head="作業概要">
      <template #head> Circle.msを経由して申し込まないサークルの申込情報を追加する。</template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                データ修正作業前日までに、ガルーンで差し込みで申し込む（.msを経由しない）サークルがいないことを確認しておく。<br />追加で申し込むサークルがあった場合は、以下のファイルに入力してもらうようお願いする。
                <a-download-button
                  fileName="ARTS11_circle-application_v1.xlsx"
                  name="サークル参加申込テンプレート"
                  width="350px"
                />
              </li>
              <li>
                「{{ kaikiEn }}_データインポート前_統合マスタ_t0.xlsx」をコピーし、「{{
                  kaikiEn
                }}_データインポート前_統合マスタ_t1.xlsx」と名前を付けて保存する。
              </li>
              <p>追加サークルがいる場合は以下の作業を行う。</p>
              <li>
                サークルカットを.pngに変換して「30001」から連番でリネームする。<br />※上海アリス幻樂団の場合は以下のサークルカットを利用する。ファイル名はそのまま。
                <a-download-button fileName="40001.png" name="上海アリス幻樂団のサークルカット" width="400px" />
              </li>
              <li>
                「\\192.168.11.6\020.rts個人情報作業領域\{{ kaikiEn }}\マスタ作業領域\納品_yymmdd」を開き、「{{
                  kaikiJa
                }}_Cut1|2」のうち対応するSP数のフォルダ内にアップロードする。
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1gX8Jk6HutEtAxBp_7eAPrmQLaX6hxcnY"
                  target="blank"
                  rel="noopener"
                  >サクカを格納するフォルダ</a
                >を開き、「{{ smallKaikiEn }}」内にもアップロードしておく。
              </li>
              <li>
                最終行の次にデータを入力して行全体を黄色で塗る。
                <ul>
                  <li>「サークル参加申込テンプレート」にない項目は入力しなくてよい。</li>
                  <li>「仮ID」は「{{ kaikiEn }}3001」から連番で入力する。</li>
                  <li>カット番号は3.でリネームした番号を入力する。</li>
                </ul>
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list :items="items" link="/before-fix/tsv-to-sheet" next="申込情報スプシ格納" />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

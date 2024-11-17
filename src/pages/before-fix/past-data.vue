<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '過去会期データ格納',
})

const items = [
  {
    text: '「サークル参加申込情報」の移植・更新は終わりましたか？',
    itemValue: 'サークル参加申込情報',
  },
  {
    text: '「外周・島中SP数調整」の移植・更新は終わりましたか？',
    itemValue: '外周・島中SP数調整',
  },
  {
    text: '「図面SP数カウント」の移植・更新は終わりましたか？',
    itemValue: '図面SP数カウント',
  },
  {
    text: '「配置マスタ」の移植・更新は終わりましたか？',
    itemValue: '配置マスタ',
  },
  {
    text: '「外周抜き評価データ」の移植・更新は終わりましたか？',
    itemValue: '外周抜き評価データ',
  },
]
</script>

<template>
  <o-article-template title="過去会期データ格納">
    <m-article-window head="作業概要">
      <template #head>
        <p>過去会期の情報を格納するスプシに前回の情報を格納する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1OlBhlndoJBG7WW-zCYI-yr9ceJAOYpK9D66pHdsatK8/edit"
                  target="_blank"
                  rel="noopener"
                  >前回のサークル参加申込情報が格納されているスプシ</a
                >を開く。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1b8umVFq-6bRjZNRL-7UIFQp942WZFXKRn5jUBmAiNvk/edit"
                  target="_blank"
                  rel="noopener"
                  >過去のサークル参加申込情報が格納されているスプシ</a
                >を開く。
              </li>
              <li>1.のスプシの各シートを2.へコピーして、コピー先のシート名から「のコピー」を削除する。</li>
              <li>
                1.のスプシの各シートの会期英略称を今期のものに変更して、1行目以外の情報を削除し塗りつぶしを解除する。
              </li>

              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit"
                  target="_blank"
                  rel="noopener"
                  >前回の外周・島中SP数調整が格納されているスプシ</a
                >を開く。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/12HI9mGX86XXPjgwRp04Is8wZvZzYrDOY9AVKf_dJd58/edit"
                  target="_blank"
                  rel="noopener"
                  >過去の外周・島中SP数調整が格納されているスプシ</a
                >を開く。
              </li>
              <li>5.のスプシの各シートを6.へコピーして、コピー先のシート名から「のコピー」を削除する。</li>
              <li>5.のスプシの各シートの会期英略称を今期のものに変更して、太枠内の数値を削除する。</li>

              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1UDpmuGZZ48mbyWko2OZAqUUURB-2Gx5jj2kvaMGoMo4/edit"
                  target="_blank"
                  rel="noopener"
                  >前回の図面SP数カウント</a
                >を開く。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/14yDV9ECGiM69vj6pSV_92O6aKC_xZKUXb7m-oKEB9sk/edit"
                  target="_blank"
                  rel="noopener"
                  >過去の図面SP数カウント</a
                >を開く。
              </li>
              <li>9.のスプシの各シートを10.へコピーして、コピー先のシート名から「のコピー」を削除する。</li>
              <li>9.のスプシの各シートの会期英略称を今期のものに変更して、「code」シートの太枠内の数値を削除する。</li>

              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1g4PI3fDTWVkhuZvoBQDn1XkGenl9ebfb-pSLCQZTnaA/edit"
                  target="_blank"
                  rel="noopener"
                  >前回の配置マスタ</a
                >を開く。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1EjplIS0O6XFrNcrx8CigDNKTfXhLAI2YpVybAB5JSy8/edit"
                  target="_blank"
                  rel="noopener"
                  >過去の配置マスタ</a
                >を開く。
              </li>
              <li>13.のスプシのシートを14.へコピーして、コピー先のシート名から「のコピー」を削除する。</li>
              <li>13.のスプシのシートの会期英略称を今期のものに変更して、1行目以外の情報を削除する。</li>

              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1E3IJQQ4BfxB2aP8A5zAqxWhofwOLUGFtJjwiHpKgPYA/edit"
                  target="_blank"
                  rel="noopener"
                  >前回の外周抜き評価データ</a
                >を開く。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1lImBpRpe-rRcUvWcuU7z05HiEEHB62ie3yqW_6vmjME/edit"
                  target="_blank"
                  rel="noopener"
                  >過去の外周抜き評価データ</a
                >を開く。
              </li>
              <li>17.のスプシの各シートを18.へコピーして、コピー先のシート名から「のコピー」を削除する。</li>
              <li>
                17.のスプシの各シートの会期英略称を今期のものに変更して、非表示にされている列を表示させフィルタを解除した上で1行目以外の情報を削除する。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-check-list
          :items="items"
          link="/befpre-fix/student-discount-application"
          width="300"
          next="学割申請データ入力へ"
        />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

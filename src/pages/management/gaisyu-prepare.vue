<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '外周抜きデータ準備',
})
</script>

<template>
  <o-article-template title="外周抜きデータ準備">
    <m-article-window head="作業概要">
      <template #head>
        外周抜きスプシに貼り付けるデータを用意します。前会期の混雑評価・実績をシートにまとめて今会期のシートを作成してください。
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1E3IJQQ4BfxB2aP8A5zAqxWhofwOLUGFtJjwiHpKgPYA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener"
                  >外周抜き評価スプシ</a
                >に、「（前会期）_（今会期）」（例：「ARTS10_forRtS21」）というシートを作成してください。
              </li>
              <li>
                同スプシの前会期シートからサークル名と最高評価の列をコピーし、1.で作成したシートに貼り付けてください。
              </li>
              <li>
                館内ldrsのDiscordから、前会期の混雑対応記録表をまとめたもの（ARTS10であれば<a
                  href="https://docs.google.com/spreadsheets/d/1XCPJCXidR5cG-IDCf7tarYDh70XpFjvGcsgGMtoK0_k/edit#gid=2100299264"
                  target="_blank"
                  rel="noopener"
                  >これ</a
                >）を探し、2.で作成したシートに手入力で反映してください。
              </li>
              <li>
                外周抜きデータ格納GASを開き、シート名を1.のシート名に変更してデプロイし、.envのGAS_BEFORE_CROWD_URLに貼り付けてください。
              </li>
              <li>同スプシに「（今会期）」のシートを作成してください。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <a-link-button link="/management/gaisyu-master">外周抜きスプシ作成へ</a-link-button>
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style scoped lang="scss"></style>

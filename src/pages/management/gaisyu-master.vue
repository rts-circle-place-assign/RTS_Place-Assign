<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '配置マスタデータ・外周抜き',
})
</script>

<template>
  <o-article-template title="配置マスタデータ・外周抜き">
    <m-article-window head="作業概要">
      <template #head> </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ul>
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
              <li>同スプシに「（今会期）」のシートを作成してください。</li>
              <li>二次募集を含めてデータ修正が終わったら、以下の表を4.で作成したシートにコピペしてください。</li>
            </ul>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-article-window head="配置マスタデータ">
      <template #head>
        <m-master-table />
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}
th,
td {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
  max-width: 60px;
  text-overflow: ellipsis;
  // font-size: .9rem;
}
.name {
  width: 200px;
  max-width: 100%;
}
.amount {
  &-mid {
    background-color: #ffff00;
  }
  &-many {
    background-color: #ffc000;
  }
}
</style>

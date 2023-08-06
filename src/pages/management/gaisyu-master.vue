<script setup lang="ts"></script>

<template>
  <o-article-template title="配置マスタデータ・外周抜き">
    <m-article-window head="作業概要">
      <template #head>
        <p>
          配置帳票に印刷するデータです。印刷のため、1SPは1つ、2SPは2つのデータが作成されています。
        </p>
        <p>
          外周抜きのために、以下のデータを
          <a
            href="https://docs.google.com/spreadsheets/d/1E3IJQQ4BfxB2aP8A5zAqxWhofwOLUGFtJjwiHpKgPYA/edit?usp=sharingf"
            target="_blank"
            rel="noopener"
            >スプシf</a
          >にコピペしてください。
        </p>
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

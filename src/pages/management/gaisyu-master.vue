<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useBeforeResultStore } from '~/store'

useHead({
  title: '配置マスタデータ・外周抜き',
})

const beforeResultStore = useBeforeResultStore()
const { fetchBeforeResult } = beforeResultStore
await fetchBeforeResult()
</script>

<template>
  <o-article-template title="配置マスタデータ・外周抜き">
    <m-article-window head="作業概要">
      <template #head
        >二次募集を含めてデータ修正が終わったら、以下の表を4.で作成したシートにコピペしてください。</template
      >
    </m-article-window>
    <m-article-window head="配置マスタデータ">
      <template #head>
        <a-html-copy-button id="gaisyu-master-table" name="表" />
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

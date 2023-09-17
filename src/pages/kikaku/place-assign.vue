<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'サークル配置',
})
</script>

<template>
  <o-article-template title="サークル配置">
    <m-article-window head="ページ作成手順">
      <template #head>
        <ol>
          <li>
            配置WEBマスタが出たら、<a
              href="https://docs.google.com/spreadsheets/d/1PDRtF0oHosaxSi0ad67KG6kyRL7F7Y5-6IWZjCMoe2M/edit"
              >配置発表データスプシ</a
            >に貼り付ける。
          </li>
          <li>
            <a
              href="https://script.google.com/u/0/home/projects/1QpfkNFbxJzBDqViQp5xAhJ5_axDFLCVQvvlLGHtPMvkZIgh37LdP4h6D/edit"
              >配置データ取得GAS</a
            >のシート名を変更して、デプロイする。
          </li>
          <li>2.でデプロイしたGASのURLを.envのthisPlaceAssignに貼り付ける。</li>
        </ol>
      </template>
    </m-article-window>
    <o-place-assign-table />
  </o-article-template>
</template>

<style scoped lang="scss"></style>

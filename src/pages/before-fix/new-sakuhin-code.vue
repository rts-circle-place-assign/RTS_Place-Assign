<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SakuhinList from '~/assets/data/sakuhincode.json'

useHead({
  title: '新規作品コード追加',
})

const items = [
  {
    text: '直近の東方原作書籍および原作ゲームで新しいキャラクターは登場していませんか？',
    itemValue: '新キャラ登場なし',
  },
]
</script>

<template>
  <o-article-template title="新規作品コード追加">
    <m-article-window head="作業概要">
      <template #head>
        新たな作品コードが追加された会期のみ、リポジトリ内の作品コード.jsonに新規作品コードのデータを追加する。
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>その会期のCircleEntryFormatを開く。</li>
              <li>
                「作品コード」シートに変更が加えられていた場合は、~/assets/data内のsakuhincode.jsonとsakuhinchara.jsonに新規作品コードのデータを追加する。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="現在の作品コード表">
          <template #secondhead>
            <table class="check-table mt-10">
              <thead>
                <tr>
                  <th>作品コード</th>
                  <th>作品</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sakuhin, i) in SakuhinList" :key="i">
                  <td>{{ sakuhin.code }}</td>
                  <td>{{ sakuhin.sakuhin }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-check-list :items="items" link="/before-fix/mongodb-collection" width="250" next="mongoDB Collection作成へ" />
  </o-article-template>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useKaikiStore } from '~/composables/useKaikiStore'

useHead({
  title: '会期情報変更',
})

const kaikiStore = useKaikiStore()
const { state } = kaikiStore

const items = [
  {
    text: '「store格納情報」の表の内容は今期のものになっていますか？',
    itemValue: 'store格納情報',
  },
  {
    text: '/server/model/todo.model.tsの会期英略称は今期のものになっていますか？',
    itemValue: '/server/model/todo.model.ts',
  },
]
</script>

<template>
  <o-article-template title="会期情報変更">
    <m-article-window head="作業概要">
      <template #head>
        <p>リポジトリ内の会期特有の情報（当日の日付、会期名など）を今会期のものに更新する。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>composables/useKaikiStore.tsを開く。</li>
              <li>11行目のkaikiJaの値を（会期日本語年度なし表記）に変更する。</li>
              <li>12行目のkaikiEnの値を（会期英略称大文字）に変更する。</li>
              <li>13行目のtoujitsuの値を（当日の日付）に変更する。（ダブルクオーテーション不要・YYYYMMDD形式）</li>
              <li>server/models/todo.model.tsを開く。</li>
              <li>27行目の(kaiki)を今期の英略称（小文字）に変更する。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="store格納情報">
          <template #secondhead>
            <table class="check-table mt-10">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>kaikiJa</td>
                  <td>{{ state.kaikiJa }}</td>
                </tr>
                <tr>
                  <td>kaikiEn</td>
                  <td>{{ state.kaikiEn }}</td>
                </tr>
                <tr>
                  <td>theDay</td>
                  <td>{{ state.theDay }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-check-list
      :items="items"
      link="/before-fix/student-discount-application"
      width="300"
      next="処理④ー学割申請データ入力へ"
    />
  </o-article-template>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

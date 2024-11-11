<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '学割申請チェック',
})
const items = [
  {
    text: '付与した照合用コードと使用した照合用コードは一致していますか？',
    itemValue: 'セクション空',
  },
  {
    text: '処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
</script>

<template>
  <o-article-template title="学割申請チェック">
    <m-article-window head="作業概要">
      <template #head>
        <p>学割を申請者本人が正しく適用しているかチェックします。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>下の表で色のついている箇所を確認します。</li>
              <li>
                色のついている箇所があれば、「申込時照合用コード」が学割申請時にどのサークルに付与されたか、サークル参加申込時にどのサークルに使われたかを調べます。<br />※このセクションでの以降の確認作業は学割申請確認者（2024.1時点ではながた）が行ってください。
              </li>
              <li>
                学割申請時の申請者氏名と申込代表者氏名が一致していない場合、申込時のサークル名・ペンネーム・メールアドレスと学割申請時のそれらを比較します。氏名のゆれ（特に英字表記の方）やコードのゆれは軽微のミスとして不問とします。
              </li>
              <li>それでも一致していない場合は植村さんに状況を説明して判断を仰いでください。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="学割申請一覧">
          <template #secondhead>
            <m-student-discount-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-check-list
      :items="items"
      link="/fix/friend-code-particular"
      width="300"
      next="処理②ーなかよしコード特殊処理へ"
    />
  </o-article-template>
</template>

<style lang="scss" scoped></style>

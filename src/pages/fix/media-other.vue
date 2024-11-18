<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'メディアコード「その他」処理',
})

const items = [
  {
    text: '「作業」セクションにサークルが残っていませんか？',
    itemValue: 'セクション空',
  },
  {
    text: '作品コード処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
</script>

<template>
  <o-article-template title="メディアコード「その他」処理">
    <m-article-window head="作業概要">
      <template #head>
        <p class="red bold">
          メディアコード「その他」（12, 24, 36,
          90番）に入っているもののうち、他の番号に移動できるものはなるべく移動する。ただし、「配置希望の補足」欄に関係する記述があれば、基本的にはそれに合わせる。
        </p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                下の表にあるサークルのメディアコードを、合体・なかよしコードによる集合配置の有無に注意しつつ「その他」以外のメディアコードに変更してください。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-other-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-other-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="その他サークル">
          <template #secondhead>
            <m-other-other-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-check-list :items="items" link="/fix/result" width="250" next="申込データ集計ページへ" />
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'なかよしコード・合体矛盾解消（作品コード編）',
})

const items = [
  {
    text: '合体・なかよしコード両方に対して作業を行いましたか？',
    itemValue: 'セクション空',
  },
  {
    text: '作品コード処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
</script>

<template>
  <o-article-template title="なかよしコード・合体矛盾解消（作品コード編）">
    <m-article-window head="作業概要">
      <template #head>
        <p class="red bold">
          サークル間で作品コードが異なる合体申込及びなかよしコード連結申込について、作品コードを揃える。揃え方は以下の通り。
        </p>
        <ul>
          <li>「配置希望の補足」欄に関係する記述があれば、基本的にはそれに合わせる</li>
          <li>A（主人公）とA（主人公）以外が含まれている場合はA（主人公）以外に寄せた方がよい</li>
          <li>音楽の作品コードはほぼ意味がないので、Z（その他）に寄せて構わない</li>
          <li>片方が混雑サークルであった場合はそれに寄せる</li>
          <li>それ以外は担当者判断で構わない</li>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>下の表で、色のついている箇所があるか確認してください。</li>
              <li>色がついているサークルは、スプシの"sakuhincode"の値を変更してください。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-sakuhin-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-sakuhin-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>

    <m-check-list :items="items" link="/fix/cosplay-correct" width="350" next="処理⑦ーコスプレメディアコード修正へ" />
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

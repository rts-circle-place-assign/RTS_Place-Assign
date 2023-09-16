<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'なかよしコード・合体矛盾解消（メディアコード編）',
})

const items = [
  {
    text: '合体・なかよしコード両方に対して作業を行いましたか？',
    itemValue: 'セクション空',
  },
  {
    text: 'メディアコード処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
const selectItems = ref([])
</script>

<template>
  <o-article-template title="なかよしコード・合体矛盾解消（メディアコード編）">
    <m-article-window head="作業概要">
      <template #head>
        <p class="red bold">
          サークル間でメディアコードが異なる合体申込及びなかよしコード連結申込について、メディアコードを揃える。揃え方は以下の通り。
        </p>
        <ul>
          <li>「配置希望の補足」欄に関係する記述があれば、基本的にはそれに合わせる</li>
          <li>
            デジタル（20番台）を含む場合はデジタルに寄せる（
            <span class="bold">特にコスプレROMなどの実写ものを含む場合</span>）
          </li>
          <li>その他（99番）を含む場合はもう片方に寄せる</li>
          <li>グッズ（30番台）を含む場合はグッズ側に寄せる</li>
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
              <li>色がついているサークルは、スプシの"mediacode"の値を変更してください。</li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-media-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-media-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>

    <m-article-window head="作業チェックリスト">
      <template #head>
        <div v-for="(item, i) in items" :key="i">
          <label :for="'item' + i" class="label">
            <input :id="'item' + i" v-model="selectItems" type="checkbox" :value="item.itemValue" class="input" />
            <span class="mark"></span>
            <span class="text">{{ item.text }}</span>
          </label>
        </div>
        <a-link-button
          v-show="items.length === selectItems.length"
          link="/fix/joint-sakuhin-different"
          width="350px"
          class="mt-12"
          >処理⑥ー合体矛盾解消（作品コード編）へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

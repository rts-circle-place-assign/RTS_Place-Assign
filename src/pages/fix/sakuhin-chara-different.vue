<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: '作品コード・キャラ矛盾処理',
})

const items = [
  {
    text: 'キャラクター・カップリングと作品コードが異なるサークルはありませんか？',
    itemValue: 'セクション空',
  },
  {
    text: '作品コード処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
const selectItems = ref([])
</script>

<template>
  <o-article-template title="作品コード・キャラ矛盾処理">
    <m-article-window head="作業概要">
      <template #head>
        <p class="red bold">
          「主要キャラ・カップリング」欄の入力内容が作品コードと全く一致していないものを検索して、作品コードを修正する。
        </p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                下の表で、「主要キャラ・カップリング」欄の入力内容が作品コードと全く一致していないサークルを目視で探して、都度作品コードを修正してください。（補助的に、作品コードに関連づくキャラ・CPと一致していないサークルを抽出して色で塗っています）
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-sakuhin-chara-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-sakuhin-chara-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="その他サークル">
          <template #secondhead>
            <m-other-sakuhin-chara-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>

    <m-article-window head="作業チェックリスト">
      <template #head>
        <div v-for="(item, i) in items" :key="i">
          <label :for="'item' + i" class="label">
            <input
              :id="'item' + i"
              v-model="selectItems"
              type="checkbox"
              :value="item.itemValue"
              class="input"
            />
            <span class="mark"></span>
            <span class="text">{{ item.text }}</span>
          </label>
        </div>
        <a-link-button
          v-show="items.length === selectItems.length"
          link="/fix/goods-different"
          width="250px"
          class="mt-12"
          >⑧グッズ矛盾解消へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

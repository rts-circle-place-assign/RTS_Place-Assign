<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'グッズ矛盾処理',
})

const items = [
  {
    text: '矛盾は全て解消していますか？',
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
  <o-article-template title="グッズ矛盾処理">
    <m-article-window head="作業概要">
      <template #head>
        <ul>
          <li>
            グッズ（30番台）のメディアコードとメイングッズ・配置補足欄が全く一致していないものを探し、メディアコードを修正する。
          </li>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                下の表で、グッズのメディアコードとメイングッズ・配置補足欄が全く一致していないサークルを目視で探して、都度メディアコードを修正してください。（補助的に、メイングッズ欄と候補が一致しないサークルを色で塗って抽出しています）<br />
                ※この後の作業で「その他」をそれ以外に寄せるので、
                <u
                  >メディアコードを変更するときはできるだけ36（その他）以外に寄せるように</u
                >してください。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-goods-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-goods-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="その他サークル">
          <template #secondhead>
            <m-other-goods-table />
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
          link="/fix/media-other"
          width="350px"
          class="mt-12"
          >処理⑩ーメディアコード「その他」処理へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

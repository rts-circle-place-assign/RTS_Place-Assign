<script setup lang="ts">
import { ref } from 'vue'
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
const selectItems = ref([])
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
        <p>これにてデータ修正は終了です！</p>
        <a-link-button
          v-show="items.length === selectItems.length"
          link="/fix/reslut"
          width="250px"
          class="mt-12"
          >申込データ集計ページへ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

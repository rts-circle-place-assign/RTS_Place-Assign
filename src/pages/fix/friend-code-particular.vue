<script setup lang="ts">
useHead({
  title: 'なかよしコード申込大分類確認',
})

const items = [
  {
    text: '同一なかよしコード利用サークルの申込プラン大分類は揃っていますか？',
    itemValue: 'セクション空',
  },
  {
    text: 'なかよしコード大分類確認をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
const selectItems = ref([])
</script>

<template>
  <o-article-template title="なかよしコード申込大分類確認">
    <m-article-window head="作業概要">
      <template #head>
        <p>
          アナログ・デジタル・通常の各申込を跨る形でのなかよしコードの申請は、各申込プランごとになかよしコードを作成して連結する。<br />※ただし、事前に相談があった場合はこの限りではない（植村さんの判断を仰ぐ）。
        </p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="なかよしコード一覧">
          <template #secondhead>
            <m-friend-code-circle-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>
                上の表で、「申込プラン」の種類が異なるなかよしコードがあるか確認します。<br />
                ①通常1/2スペース、②アナログゲームプラン、③デジタルゲームプランのうち、同一のなかよしコードに2種類以上存在しているケースを探してください。
              </li>
              <li>
                該当するなかよしコードがあれば、①～③ごとに新たになかよしコードを設定してください。<br />
                <span class="bold"
                  >この段階では、同一のなかよしコードを利用しているサークルが1・2サークルになっても、なかよしコードを削除するなどの処理をしないでください。</span
                >次の「処理③」で行います。
              </li>
            </ol>
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
          link="/fix/two-circles-friend-code"
          width="300px"
          class="mt-12"
          >処理③ー2サークルなかよしコード処理へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

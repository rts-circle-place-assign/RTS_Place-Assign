<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '配置事前集会前作業',
})

// const beforeItems = [
//   {
//     text: '理論SP数/短冊カウント比較・外周抜きのExcelファイルに今期の数値を入力しましたか？',
//     itemValue: 'Excelファイル数値入力',
//   },
//   {
//     text: '短冊は印刷されていますか？',
//     itemValue: '短冊印刷',
//   },
// ]
const items = [
  {
    text: 'オブジェクト図面は印刷（A3・1枚）されていますか？',
    itemValue: 'オブジェクト図面印刷',
  },
  {
    text: '採番済配置図面は印刷（A3・1枚）されていますか？',
    itemValue: '採番済配置図面印刷',
  },
  {
    text: 'ゼムクリップ・ダブルクリップ（大中小）・ホチキス・シャーペン・付箋・カゴは用意されていますか？',
    itemValue: '備品準備',
  },
]

const selectItems = ref([])
</script>

<template>
  <o-article-template title="配置事前集会前作業">
    <m-article-window head="作業チェックリスト">
      <template #head>
        <m-article-paragraph secondhead="事前作業">
          <template #secondhead>
            <a-checkbox
              itemValue="外周・島中SP数調整スプシ数値入力"
              text="外周・島中SP数調整のスプシに今期の数値を入力しましたか？"
            >
              <a-link-button link="/management/gaisyu-adjust-excel" class="m-10"
                >詳しくはこちら</a-link-button
              >
            </a-checkbox>
            <a-checkbox
              itemValue="図面スプシ転記"
              text="採番済図面を図面SP数カウントのスプシに転記しましたか？"
            >
              <a-link-button
                link="https://docs.google.com/spreadsheets/d/14yDV9ECGiM69vj6pSV_92O6aKC_xZKUXb7m-oKEB9sk/edit?usp=sharing"
                class="m-10"
                width="250px"
                >図面SP数カウントスプシ</a-link-button
              >
            </a-checkbox>
            <a-checkbox
              itemValue="短冊印刷"
              text="短冊は印刷されていますか？"
            />
            <!-- <label
              v-for="(item, i) in beforeItems"
              :key="'before' + i"
              :for="item.itemValue"
              class="label"
            >
              <input
                :id="item.itemValue"
                v-model="selectItems"
                type="checkbox"
                :value="item.itemValue"
                class="input"
              />
              <span class="mark"></span>
              <span class="text" v-html="item.text"></span>
            </label> -->
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="配置準備日当日の事前作業">
          <template #secondhead>
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
                <span class="text" v-html="item.text"></span>
              </label>
            </div>
          </template>
        </m-article-paragraph>
        <a-link-button
          v-show="items.length === selectItems.length"
          link="/management/media"
          >1紙作業へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

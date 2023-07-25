<script setup lang="ts">
import { shuffle } from '../../lib/utils/array-utils';

interface Emits {
(e: 'changekeyword'): void
}
const emits = defineEmits<Emits>()

const category = ['オンライン', '学術', 'カルチャー', 'パフォーマンス', '飲食']
const keywordSelection = [
  'ステージ',
  'ツアー',
  '子供向け',
  'グッズ',
  '謎解き',
  '物販',
  '受験',
  '実験',
  'オーケストラ',
  'ダンス',
  '音楽',
  'カフェ',
  '酒',
  'スイーツ',
  '軽食',
  '講演会',
  'めいちゃん',
  'ラリー',
  '公式',
  'おすすめ企画',
  '中高生向け',
  '展示',
  '体験',
  '学部',
];
const keyword = ref(shuffle(keywordSelection).slice(0, 6));
onMounted(() => {
  keyword.value = shuffle(keywordSelection).slice(0, 6);
});
const word = ref('検索');
const input = (i: string) => {
  word.value = i;
  emits('changekeyword');
};
</script>

<template>
  <div class="box flex direction-column align-center">
    <a-search-box
      :keyword="word"
      class="mb-10"
      pcyoko="60%"
      spyoko="80%"
      :tate="40"
      barcolor="white"
      buttonkado="20px 0px 0px 20px"
      barkado="0px 20px 20px 0px"
      :defaultword="word"
    />
    <!-- <div>
      <div class="category mt-16">
        <a-search-button
          v-for="i in category"
          :key="i"
          :filterName="i"
          backc="#dce697"
          class="m-5"
          @input="input(i)"
        />
      </div>
      <div class="category mt-16">
        <a-search-button
          v-for="i in keyword"
          :key="i"
          :filterName="i"
          backc="#dce697"
          class="m-5"
          @input="input(i)"
        />
      </div>
    </div> -->
    <div class="bottom" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  @include mq(until-pc) {
    margin: 10px auto;
  }
}
.category {
  flex-wrap: wrap;
  @media screen and (max-width: 580px) {
    width: 80vw;
  }
}
.bottom {
  height: 40px;
}
</style>

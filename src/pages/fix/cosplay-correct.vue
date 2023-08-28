<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'コスプレメディアコード修正',
})

const items = [
  {
    text: '矛盾は全て解消していますか？',
    itemValue: 'セクション空',
  },
  {
    text: '処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
const selectItems = ref([])
</script>

<template>
  <o-article-template title="コスプレメディアコード修正">
    <m-article-window head="作業概要">
      <template #head>
        <ul>
          <li>
            配置希望の補足欄あるいは頒布物一覧にコスプレROMが含まれているサークルのメディアコードを23にする。
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
                下の表で、配置希望の補足欄あるいは頒布物一覧にコスプレROMが含まれているサークルを目視で探して、都度メディアコードを23（コスプレROMの場合）に修正してください（補助的に、それらのサークルを色で塗って抽出しています）。<br />
                ※合体サークル・なかよしコード利用サークルである場合は、連結申請されているサークル全てのメディアコードを23に寄せてください。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-cosplay-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-cosplay-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="その他サークル">
          <template #secondhead>
            <m-other-cosplay-table />
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
          link="/fix/sakuhin-chara-different"
          width="350px"
          class="mt-12"
          >処理⑨ー作品コード・キャラ矛盾処理へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/fix.scss';
</style>

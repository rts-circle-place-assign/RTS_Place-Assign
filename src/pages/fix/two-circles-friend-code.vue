<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2サークルなかよしコード処理',
})

const items = [
  {
    text: '「作業」セクションの「利用サークル数」が2になっているコードはありませんか？（色の塗られているセルはありませんか？）',
    itemValue: 'セクション空',
  },
  {
    text: '2サークルなかよしコード処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]

const selectItems = ref([])
</script>

<template>
  <o-article-template title="なかよしコード特殊処理">
    <m-article-window head="作業概要">
      <template #head>
        <ul>
          <li class="red bold">
            ※二次募集を行っている場合、一次募集データ修正の段階ではこの作業を行わずに
            <nuxt-link to="/fix/joint-adult-different"
              >「④ーなかよしコード・合体矛盾処理（成年向け有無編）」</nuxt-link
            >へ進む。
          </li>
          <li>
            正しいなかよしコードが入力されているか確認する（文字制限は無視）。表記ゆれがあるものは植村さんの判断を仰ぐ（異なるなかよしコードの可能性がある）。
          </li>
          <li>
            2サークルのみで連結しているなかよしコードを削除し、通常の合体処理に変更する（変則合体になっても構わない）。
          </li>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="なかよしコード一覧">
          <template #secondhead>
            <m-friend-code-num-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>上の表で、色のついている箇所があるか確認してください。</li>
              <li>
                色がついているサークルは、スプシの"friendCode"の値を削除してください。
              </li>
              <li>
                2.
                で削除したなかよしコードが2サークル間のものだった場合は、通常の合体処理に変更します。スプシの"gattainum"に合体相手の"msnum"を入れてください。
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
          link="/fix/joint-adult-different"
          width="450px"
          class="mt-12"
          >処理④ーなかよしコード・合体矛盾処理（成年向け有無編）へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

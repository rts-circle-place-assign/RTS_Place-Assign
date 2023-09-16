<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'なかよしコード・合体矛盾解消（成年向け有無編）',
})

const items = [
  {
    text: '合体・なかよしコード両方に対して作業を行いましたか？',
    itemValue: 'セクション空',
  },
  {
    text: '成年向け有無処理をスプシに転記しましたか？',
    itemValue: 'スプシ転記',
  },
]
const selectItems = ref([])
</script>

<template>
  <o-article-template title="なかよしコード・合体矛盾解消（成年向け有無編）">
    <m-article-window head="作業概要">
      <template #head>
        <ul>
          <li class="red bold">
            サークル間で成年向け有無が異なる合体申込及びなかよしコード連結申込について、成年向け有無を揃える。揃え方は以下の通り。
          </li>
          <ul>
            <li>基本的に全て成年向け有りに寄せる。</li>
            <li>
              なかよしコードを利用していて成年向け頒布物有無に関わらず集合配置を希望していた場合は植村さんに確認の上そのままにする。
            </li>
          </ul>
        </ul>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>下の表で、色のついている箇所があるか確認してください。</li>
              <li>
                色がついているサークルは、「作業概要」に書かれている通りに成年向け頒布物有無を変更してください。基本的には0から1に変更することが多いはずです。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="合体サークル">
          <template #secondhead>
            <m-joint-adult-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコードサークル">
          <template #secondhead>
            <m-friend-code-adult-table />
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
          link="/fix/joint-media-different"
          width="350px"
          class="mt-12"
          >処理⑤ー合体矛盾解消（メディアコード編）へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

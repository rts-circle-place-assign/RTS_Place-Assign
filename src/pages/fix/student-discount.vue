<script setup lang="ts">
useHead({
  title: '学割申請チェック',
})
const items = [
  {
    text: '付与した照合用コードと使用した照合用コードは一致していますか？',
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
  <o-article-template title="学割申請チェック">
    <m-article-window head="作業概要">
      <template #head>
        <p>学割を申請者本人が正しく適用しているかチェックします。</p>
      </template>
    </m-article-window>
    <m-article-window head="作業">
      <template #head>
        <m-article-paragraph secondhead="学割申請一覧">
          <template #secondhead>
            <m-student-discount-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="作業手順">
          <template #secondhead>
            <ol>
              <li>上の表で色のついている箇所を確認します。</li>
              <li>
                色のついている箇所があれば、「申込時照合用コード」が学割申請時にどのサークルに付与されたか調べます。<br />※このセクションでの以降の確認作業は学割申請確認者（2023.7時点ではながた）が行ってください。
              </li>
              <li>
                付与されたサークル名と申込サークル名が一致していない場合、申込代表者氏名・メールアドレスと学割申請時の申請者氏名・メールアドレスを比較します。この際、申請後にサークル名やメールアドレスが変更されていないか細心の注意を払って確認してください。
              </li>
              <li>
                氏名・メールアドレスが一致していない場合は植村さんに状況を説明して判断を仰いでください。
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
          link="/fix/friend-code-particular"
          width="300px"
          class="mt-12"
          >処理②ーなかよしコード特殊処理へ</a-link-button
        >
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
.label {
  padding: 12px 8px 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > .mark {
    background: #dddddd !important;
    border: solid 2px #008eff;
  }
  .input {
    margin: 0;
    width: 0;
    opacity: 0;
  }

  .input:focus + .mark {
    background: #dddddd !important;
    border: solid 2px #008eff;
  }

  .input:checked + .mark {
    border: solid 2px #008eff;
    background: #ffffff;
  }

  .input:checked + .mark::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 80%;
    height: 80%;
    background: url('http://reitaisai.com/arts9/wp-content/uploads/sites/30/2022/06/check-1.svg')
      no-repeat center;
    background-size: contain;
  }

  .mark {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 32px;
    height: 32px;
    border: solid 2px #93cfff;
    background: #ffffff;
    border-radius: 4px;
  }

  .text {
    margin-left: 12px;
    display: block;
    width: calc(100% - 44px); // .textのmargin-left(12px) + .inputのwidth(32px)
  }
}
.texts {
  margin-left: 52px;
}
</style>

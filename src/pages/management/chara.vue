<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'ホチキス/クリップチェック・キャラ分け・キャラソート',
})
</script>

<template>
  <o-article-template title="ホチキス/クリップチェック・キャラ分け・キャラソート">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>2SP/合体ホチキス留めが正しいか確認する。</li>
          <li>
            なかよしコードのクリップ留めが正しいか確認する。ここまで確認出来たら「ホチキス・クリップ留め」欄に署名。
          </li>
          <li>2.5紙の短冊を、その作品のキャラクターごとに分ける。分けたら「キャラ分け」欄に署名。</li>
          <li>
            分け終えたらチェッカー（森川さん、片岡さんなど）に持っていき確認してもらう。OKが出たら「キャラ分けチェック」欄に署名。
          </li>
          <li>
            2.5紙の短冊を、その作品でのキャラクターの登場順に並べる。その際、キャラ単体とカップリングは以下のように並べるのがよいとされる。なお、東方でのカップリング名は語感が優先され左右の区別は問題になりづらいことから、いわゆる「逆カプ」は同一カップリングとして扱い、原則分離配置しない。ソートしたら「キャラソート」欄に署名。<br />
            <m-article-paragraph secondhead="A（主人公）の場合">
              <template #secondhead>
                <ol type="i">
                  <li>霊夢</li>
                  <li>霊夢その他カップリング</li>
                  <li>レイマリ（マリレイ）</li>
                  <li>魔理沙その他カップリング</li>
                  <li>魔理沙</li>
                </ol>
              </template>
            </m-article-paragraph>
          </li>
          <li>
            ソートし終えたらチェッカーに持っていき確認してもらう。OKが出たら「キャラソート」欄に署名し、「4.ブロック流し込み」へ。
            <a-link-button link="/management/block" class="m-10">4.ブロック流し込み</a-link-button>
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

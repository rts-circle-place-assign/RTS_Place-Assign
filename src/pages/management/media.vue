<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'メディアコードソート・短冊カウント',
})
</script>

<template>
  <o-article-template title="メディアコードソート・短冊カウント">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            <nuxt-link to="/management/media-records">1紙</nuxt-link
            >を印刷する。
            <a-link-button link="/management/media-records" class="m-10"
              >1紙印刷</a-link-button
            >
          </li>
          <li>
            短冊の束を、1紙の「メディア」にしたがい分類してカゴに入れる。分類の仕方は以下の通り。なお、この段階では、メディアコード10番のサークル以外は成年向け頒布物有無によるソートを行わない。
            <ul>
              <li>落選</li>
              <li>なかよしコード</li>
              <li>その他通常の短冊（メディアコード順に分類）</li>
            </ul>
          </li>
          <li>
            それぞれのカゴに入っている短冊の枚数を数えて1紙に書き、「理論SP数」と一致するか確認する。一致しなければ再カウントし、それでも一致しなければながたへ。
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

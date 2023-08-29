<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '作品コード/成年向け有無ソート・短冊カウント',
})
</script>

<template>
  <o-article-template title="作品コード/成年向け有無ソート・短冊カウント">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            <nuxt-link to="/management/sakuhin-records">2.5紙</nuxt-link
            >を印刷する。
            <a-link-button link="/management/sakuhin-records" class="m-10"
              >2.5紙印刷</a-link-button
            >
          </li>
          <li>
            短冊の束を、2.5紙の「作品」にしたがい分類してカゴに入れる。分類の仕方は以下の通り。
            <ul>
              <li>作品/作品コード</li>
              <li>成年向け頒布物有無</li>
            </ul>
          </li>
          <li>
            「なかよしコード」有無別に、それぞれのカゴに入っている短冊の枚数を数えて2.5紙に書き、「なかよしありSP」「なかよしなしSP」と一致するか確認する。一致しなければ再カウントし、それでも一致しなければながたへ。
          </li>
          <li>
            ここまで無事に終了したら「2. 作品コードソート」へ
            <a-link-button link="/management/sakuhin" class="m-10"
              >2. 作品コードソート</a-link-button
            >
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

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
        <m-article-paragraph secondhead="作品コード内短冊総数カウント">
          <template #secondhead>
            <ol>
              <li>
                <nuxt-link to="/management/sakuhin-records">2.5紙</nuxt-link
                >を印刷する。印刷時、四辺の余白を0.3インチで設定するとピッタリ印刷できる。
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
                2SP・合体のホチキスとなかよしコードのクリップ留めがされているか再度確認し、確認できたら「ホチキス・クリップチェック」欄に署名。
              </li>
              <li>
                「なかよしコード」有無別に、それぞれのカゴに入っている短冊の枚数を数えて2.5紙に書き、「なかよしありSP」「なかよしなしSP」と一致するか確認する。一致しなければ再カウントし、それでも一致しなければながたへ。確認できたら「なかよし有無別カウント」欄に署名。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="付箋色別短冊枚数カウント">
          <template #secondhead>
            <ol>
              <li>
                それぞれのカゴにつき、付箋の色別に短冊の枚数をカウントして2.5紙の「該当SP数」欄に記入してもらう。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit#gid=0"
                  target="_blank"
                  rel="noopener"
                  >外周・島中SP数調整スプシ</a
                >を開く。
                <a-link-button
                  link="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit#gid=0"
                  class="m-10"
                  >外周・島中SP数調整スプシ</a-link-button
                >
              </li>
              <li>
                4.でカウントした数を、カウント担当者からながたに言ってもらい、ながたは1.で開いたスプシの該当セルに入力していく。その際、言ってもらう事項は次の通り。言い終えたら「付箋付きカウント」欄に署名。
                <ul>
                  <li>2.5紙の「確認用」の文字列（例：「10/0/A」）</li>
                  <li>
                    2.5紙の「ピンク」「オレンジ」「イエロー」「なし」の数値（例：「3/5/2/29）」
                  </li>
                </ul>
              </li>
              <li>
                ここまで無事に終了したら「外周・島中SP数調整・外周抜き」へ
                <a-link-button
                  link="/management/gaisyu-adjust"
                  class="m-10"
                  width="300px"
                  >外周・島中SP数調整・外周抜き</a-link-button
                >
              </li>
            </ol>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

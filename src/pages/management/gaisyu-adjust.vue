<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '外周/島中SP数調整・外周抜き',
})
</script>

<template>
  <o-article-template title="外周/島中SP数調整・外周抜き">
    <m-article-window head="作業の流れ">
      <template #head>
        <m-article-paragraph secondhead="外周/島中SP数調整">
          <template #secondhead>
            <ol>
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
                  width="250px"
                  >外周・島中SP数調整スプシ</a-link-button
                >
              </li>
              <li>
                成年向け有無それぞれについて、スプシを見て「外周優先SP数」（ピンク・オレンジのついている短冊の枚数）の合計と、「外周SP枠数」（図面上外周として確保されているSP数）の合計を比較し、両者が一致するように「調整SP数」に入力する。なお、
                <u
                  >以下の調整方法はあくまで一例であり、会期ごとに異なる。植村さんや森川さんの指示を仰ぐこと</u
                >。
                <ol type="a">
                  <li>
                    外周優先SP数 &gt; 外周SP枠数の場合
                    <p>
                      外周として用意されているSP数よりも外周に抜いたほうがいいSP数の方が多い場合である。外周の少ない東ホール開催はこのパターンになることが多い。
                    </p>
                    <ol class="small-list">
                      <li>
                        図面を見て、音楽サークルに割り振る外周枠SP数（y）を先に決める。
                      </li>
                      <li>
                        メディアコード20番の「外周優先SP数（x）」を確認し、いくつ島中に戻すか（x-y）を決める。20番の「調整SP数」に、-(x-y)を入力する（「調整SP数」は「何SP分追加で外周に出すか」なので、「島中に戻す」SP数はマイナス値をとることに注意）。
                      </li>
                      <li>
                        それでもまだ外周優先SP数 &gt;
                        外周SP枠数である場合は、グッズサークル（30番台）、本（10番）以外で島中に戻せるサークルがいないか検討して、戻せるなら都度「調整SP数」に入力する。
                      </li>
                      <li>
                        それでもまだ外周優先SP数 &gt;
                        外周SP枠数である場合は、本（10番）の中で島中に戻すサークルを考える。その際、「そのサークルは外周に出さないといけない（=島中にいないほうがいい）のか（必要性）」「そのサークルはジャンルのブーストがなくても（=島中にいなくても）大丈夫か（十分性・許容性）」を想像するとよいかも。
                      </li>
                    </ol>
                  </li>
                  <li>
                    外周優先SP数 &lt; 外周SP枠数の場合
                    <p>
                      外周に抜いたほうがいいSP数よりも外周として用意されているSP数の方が多い場合である。外周の多い西ホール開催はこのパターンになることが多い。
                    </p>
                    <ol class="small-list">
                      <li>
                        音楽サークルに割り振る外周枠SP数（y）を先に決める。
                      </li>
                      <li>
                        メディアコード20番の「外周優先SP数（x）」を確認し、いくつ島中に戻すか（x-y）を決める。20番の「調整SP数」に、-(x-y)を入力する（「調整SP数」は「何SP分追加で外周に出すか」なので、「島中に戻す」SP数はマイナス値をとることに注意）。
                      </li>
                      <li>
                        それでもまだ外周優先SP数 &lt;
                        外周SP枠数である場合は、ジャンルごとまとめて外周に出せるコードがないか検討して（例：ARTS9では10/0/Cをジャンルごと外周に出した）、出せるなら都度「調整SP数」に入力する。その際、コスプレ系（12番、25番）を外周に出さないよう注意すること。
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </template>
        </m-article-paragraph>

        <m-article-paragraph secondhead="外周抜き">
          <template #secondhead>
            <ol>
              <li>
                外周の頭紙を印刷する。
                <a-link-button link="/management/gaisyu" class="m-10"
                  >2.9. 外周頭紙</a-link-button
                >
              </li>
              <li>
                外周に抜くサークルが決まったら、「成年向けなし・外周」「成年向けあり・外周」のカゴを新たに用意し、そのカゴに1.で印刷した頭紙と外周に抜く短冊を入れる。入れたら2.9紙の「短冊抜き」に署名。
              </li>
              <li>
                2.でカゴに入れた短冊の枚数を数え、頭紙の「理論SP数」と一致するか確認。確認出来たら2.9紙の「短冊カウント」に署名。
              </li>
              <li>
                それ以外の（島中に残す）短冊について、再度付箋色別にカウントし、2.5紙の「外周抜きSP数」に記入する。記入したらカウントした数をながたに言ってもらう。言ってもらう事項は次の通り。言ったら「外周抜き後カウント」に署名。
                <ul>
                  <li>2.5紙の「確認用」の文字列（例：「10/0/A」）</li>
                  <li>
                    2.5紙の「ピンク」「オレンジ」「イエロー」「なし」の数値（例：「3/5/2/29）」
                  </li>
                </ul>
              </li>
              <li>
                ここまで無事に終了したら「配置図面引き」へ
                <a-link-button link="/management/map" class="m-10"
                  >配置図面引き</a-link-button
                >
              </li>
            </ol>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

<style lang="scss" scoped>
.small-list {
  list-style-type: lower-roman;
}
</style>

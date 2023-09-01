<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '配置図面引き',
})
</script>

<template>
  <o-article-template title="配置図面引き">
    <m-article-window head="作業の流れ">
      <template #head>
        <m-article-paragraph secondhead="大ジャンル図面">
          <template #secondhead>
            <ol>
              <li>採番済図面を5枚程度印刷する。</li>
              <li>
                大まかに、本、音楽、デジタル、グッズをどの順番に配置するかを決める。これは植村さん（・森川さん）と相談。
              </li>

              <li>
                大ジャンルごとのSP数に基づき、大ジャンル図面を引く。大ジャンルの区分は会期ごとに異なるが、大抵は10番、11・12番、20番、21~26番、30番台、90番。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit#gid=0"
                  target="_blank"
                  rel="noopener"
                  >外周・島中SP数調整スプシ</a
                >を参照しながら、大ジャンルごとのSP数を出す。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/14yDV9ECGiM69vj6pSV_92O6aKC_xZKUXb7m-oKEB9sk/edit#gid=1449444416"
                  target="_blank"
                  rel="noopener"
                  >図面SP数カウントスプシ</a
                >を開く。大ジャンルの区分がわかったら「code」シートの「nonAdultBigMap（成年向けなし大図面）」の表に転記。
              </li>
              <li>
                大ジャンル図面が確定したら、「nonAdultBigMap」シートのセルに塗り、塗り終えたらメニューの「coloredCellCount」>「nonAdultBigMap」をクリックしてそれぞれのSP数を算出する。「code」シートの「nonAdultBigMap（成年向けなし大図面）」内の数値が4.の数値と一致したら先に進む。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="小ジャンル図面">
          <template #secondhead>
            <ol>
              <li>
                小ジャンル区分を決める。小ジャンルの区分は、大抵は10番A~Zそれぞれで1枚とそれ以外で1枚。区分が決まったら「code」シートの「nonAdult10Map（メディアコード10図面）」と「adultMap（成年向けあり図面）」に転記。
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit#gid=0"
                  target="_blank"
                  rel="noopener"
                  >外周・島中SP数調整スプシ</a
                >を参照しながら、小ジャンルごとのSP数を出す。
              </li>
              <li>大ジャンル内それぞれについて、小ジャンル図面を引く。</li>
              <li>
                小ジャンル図面が確定したら、「ARTS10_nonAdult10Map」シートと「ARTS10_adultMap」シートのセルに塗り、塗り終えたらメニューの「coloredCellCount」>「nonAdult10Map」「adultMap」をクリックしてそれぞれのSP数を算出する。2.で出した数値と一致したら先に進む。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

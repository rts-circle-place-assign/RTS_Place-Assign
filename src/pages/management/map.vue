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
                <a
                  href="https://docs.google.com/spreadsheets/d/1cgBMyeQjeHHPZsQY3AtnzaFmQ0fo3jG9uBD0Wwr_AEI/edit#gid=0"
                  target="_blank"
                  rel="noopener"
                  >スプシ</a
                >を参照しながら、大ジャンルごとのSP数を出す。
              </li>
            </ol>
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>

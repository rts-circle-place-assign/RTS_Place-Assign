<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: '外周・島中SP数調整・外周抜き',
})
</script>

<template>
  <o-article-template title="外周・島中SP数調整・外周抜き">
    <m-article-window head="作業の流れ">
      <template #head>
        <ol>
          <li>
            ここまで無事に終了したら「3. 理論SP数・短冊カウント比較」へ
            <a-link-button
              link="/management/gaisyu-adjust"
              class="m-10"
              width="250px"
              >3. 理論SP数・短冊カウント比較</a-link-button
            >
          </li>
        </ol>
      </template>
    </m-article-window>
  </o-article-template>
</template>

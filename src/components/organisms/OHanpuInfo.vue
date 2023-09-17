<script setup lang="ts">
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <m-article-window>
    <template #head>
      <m-article-paragraph secondhead="頒布物情報">
        <template #secondhead>
          <m-hanpu-info-table :kikaku="kikaku" />
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
</template>

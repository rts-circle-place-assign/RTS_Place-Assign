<script setup lang="ts">
import { Circle } from '~/lib/hooks'

interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <m-article-window>
    <template #head>
      <m-article-paragraph secondhead="過去配置">
        <template #secondhead>
          <m-past-place-assign-table :kikaku="kikaku" />
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
}

table th {
  border-bottom: solid 2px $main-dull;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px $main-soft;
  text-align: center;
  padding: 10px 0;
}
</style>

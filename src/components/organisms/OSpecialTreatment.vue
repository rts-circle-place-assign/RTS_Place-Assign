<script setup lang="ts">
interface Props {
  id: number
}
defineProps<Props>()
</script>

<template>
  <m-article-window>
    <template #head>
      <m-article-paragraph secondhead="変更・特殊対応履歴">
        <template #secondhead>
          <a-text-area :id="id" />
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
</template>

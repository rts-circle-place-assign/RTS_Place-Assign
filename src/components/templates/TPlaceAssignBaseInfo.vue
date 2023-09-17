<script setup lang="ts">
import { Circle } from '~/type'
interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <o-kikaku-info title="サークル基本情報" class="mt-20">
    <a-article-small-heading title="スペース数情報" />
    <a-space-num-info :kikaku="kikaku" />
    <a-article-small-heading title="合体・連結情報" />
    <a-joint-info :kikaku="kikaku" />
    <a-article-small-heading title="SNSリンク" />
    <a-sns :kikaku="kikaku" />
  </o-kikaku-info>
</template>

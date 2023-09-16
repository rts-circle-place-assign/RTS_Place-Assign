<script setup lang="ts">
import { MediaRecord } from '~/type/'

interface Props {
  recordNum: number
  kaikiEn: string
  media: MediaRecord
}
defineProps<Props>()
</script>

<template>
  <div class="carte text-center">
    <m-management-head :recordNum="recordNum" :kaikiEn="kaikiEn" number="1" name="メディア別頭紙" />
    <m-media-count-table :media="media" />
    <m-media-check-table :media="media" />
    <m-management-special-table />
    <!-- <a-management-logo /> -->
    <div class="break"></div>
    <!-- <a-link-button link="/management/sakuhin" width="250px" class="print-none"
      >2.5紙（作品別頭紙）印刷へ</a-link-button
    > -->
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

<script setup lang="ts">
import { BlockNumber } from '~/type'

interface Props {
  recordNum: number
  kaikiEn: string
  block: BlockNumber
}
defineProps<Props>()
</script>

<template>
  <div class="carte text-center">
    <m-management-head :recordNum="recordNum" :kaikiEn="kaikiEn" number="4" name="ブロック別頭紙" />
    <m-block-info-table :block="block" />
    <div class="flex space-between">
      <m-block-count-table />
      <m-block-check-table />
    </div>
    <m-management-special-table />
    <!--    <a-management-logo height="8vh" />-->
    <div class="break"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

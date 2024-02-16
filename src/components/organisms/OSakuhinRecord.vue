<script setup lang="ts">
import { SakuhinRecord } from '~/type/'

interface Props {
  recordNum: number
  kaikiEn: string
  sakuhin: SakuhinRecord
}
defineProps<Props>()
</script>

<template>
  <div class="sakuhin-carte text-center">
    <m-management-head :recordNum="recordNum" :kaikiEn="kaikiEn" number="2.5" name="作品別頭紙" />
    <m-sakuhin-info-table :sakuhin="sakuhin" />
    <div class="flex space-between" style="gap: 10px">
      <div class="flex direction-column">
        <m-sakuhin-count-table />
        <m-management-special-table />
      </div>
      <m-sakuhin-check-table />
    </div>

    <!-- <a-management-logo /> -->
    <div class="break"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

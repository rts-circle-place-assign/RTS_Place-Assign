<script setup lang="ts">
import { GaisyuNumberResult } from '~/type'

interface Props {
  recordNum: number
  kaikiEn: string
  gaisyu: GaisyuNumberResult
}
defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <m-management-head :recordNum="recordNum" :kaikiEn="kaikiEn" number="2.9" name="外周頭紙" />
    <m-gaisyu-count-table :gaisyu="gaisyu" />
    <m-gaisyu-check-table />
    <a-management-logo height="20vh" />
    <div class="break"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

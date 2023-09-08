<script setup lang="ts">
import { MediaRecord } from '~/type/'

interface Props {
  media: MediaRecord
}
defineProps<Props>()
</script>

<template>
  <table>
    <tr>
      <th colspan="2">担当者サイン</th>
    </tr>
    <tr>
      <th>短冊カウント</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>特殊対応</th>
      <td class="input name"></td>
      <th>特殊対応後<br />短冊カウント</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <!-- <td class="input gaisyu-end" rowspan="2"></td> -->
      <th>2SPホチキス</th>
      <td class="input name"></td>
      <th>合体ホチキス</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>2SPホチキス<br />チェック</th>
      <td class="input name"></td>
      <th>合体ホチキス<br />チェック</th>
      <td class="input name"></td>
    </tr>
    <tr v-if="media.code === 1">
      <th>なかよし<br />クリップ</th>
      <td class="input name"></td>
      <th>なかよし<br />クリップチェック</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>補足欄確認</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>付箋貼り</th>
      <td class="input name"></td>
      <th>付箋チェック</th>
      <td class="input name"></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

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
      <th>短冊カウント<br />（連番チェック）</th>
      <td class="input name"></td>
      <td v-if="media.code < 1 && media.spNum !== 0" colspan="2" style="line-height: 1.4">
        デジタル・アナログプランは<br />以降の作業をスキップ
      </td>
      <td v-if="media.spNum === 0" colspan="2">以降の作業を行わない</td>
    </tr>
    <tr>
      <th>申込情報変更<br />落選等反映<br /></th>
      <td class="input name"></td>
      <th>特殊対応後<br />短冊カウント</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <!-- <td class="input gaisyu-end" rowspan="2"></td> -->
      <th>2SPホチキス</th>
      <td class="input name"></td>
      <th>2SPホチキス<br />CK</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>合体ホチキス</th>
      <td class="input name"></td>
      <th>合体ホチキス<br />CK</th>
      <td class="input name"></td>
    </tr>
    <tr v-if="media.code === 1">
      <th>なかよし<br />クリップ</th>
      <td class="input name"></td>
      <th>なかよし<br />クリップCK</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>補足欄確認</th>
      <td class="input name"></td>
      <th>補足欄確認<br />CK</th>
      <td class="input name"></td>
    </tr>
    <tr>
      <th>付箋貼り</th>
      <td class="input name"></td>
      <th>付箋CK</th>
      <td class="input name"></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

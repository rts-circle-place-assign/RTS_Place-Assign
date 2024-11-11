<script setup lang="ts">
import { BlockNumber } from '~/type'

interface Props {
  block: BlockNumber
}
defineProps<Props>()
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th>ブロック</th>
        <td>{{ block.block }}</td>
        <th>SP数</th>
        <td>{{ block.spNum }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

<script setup lang="ts">
import { GaisyuNumberResult } from '~/type'

interface Props {
  gaisyu: GaisyuNumberResult
}
defineProps<Props>()
</script>

<template>
  <table>
    <tr>
      <th>成年向け</th>
      <td class="code bold adult">{{ gaisyu.adultNum }}</td>
      <td class="adult">{{ gaisyu.adult }}</td>
    </tr>
    <tr>
      <th>理論SP数</th>
      <td class="code adult">{{ gaisyu.spNum }}</td>
      <td class="adult input"></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

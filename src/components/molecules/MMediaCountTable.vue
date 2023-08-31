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
      <th>メディア</th>
      <td class="code">{{ media.code }}</td>
      <td class="media">{{ media.media }}</td>
      <th>区分</th>
      <td colspan="2">{{ media.class }}</td>
    </tr>
    <tr>
      <th>理論SP数</th>
      <td class="adult code">{{ media.spNum }}</td>
      <td class="input adult"></td>
      <th>成年向け</th>
      <td class="code adult">{{ media.adultNum }}</td>
      <td class="adult">{{ media.adult }}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
.code {
  font-size: 1.2rem;
  padding: 0.5rem;
}
.media {
  width: 20vw;
  white-space: nowrap;
}
</style>

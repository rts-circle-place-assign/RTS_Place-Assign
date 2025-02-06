<script lang="ts" setup>
import { MediaRecord } from '~/type/'

interface Props {
  media?: MediaRecord
  isMediaRecord?: boolean
}
withDefaults(defineProps<Props>(), {
  media: {},
  isMediaRecord: false,
})
</script>

<template>
  <table>
    <tr>
      <th>特殊対応履歴記入欄</th>
    </tr>
    <tr>
      <td
        v-if="isMediaRecord"
        class="input special-history"
        :class="{ 'special-history-friend-code': media.isFriendCode }"
      ></td>
      <td v-else class="input special-history"><p class="emoji">🙇</p></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
.emoji {
  opacity: 0.1;
  font-size: 4rem;
}
</style>

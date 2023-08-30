<script setup lang="ts">
import { SakuhinRecord } from '~/type/'

interface Props {
  sakuhin: SakuhinRecord
}
defineProps<Props>()
</script>

<template>
  <table>
    <tr>
      <th>メディア</th>
      <td class="code bold">{{ sakuhin.mediacode }}</td>
      <td class="media text-ellipsis">{{ sakuhin.media }}</td>
      <th>成年向け</th>
      <td class="code bold adult">{{ sakuhin.adultNum }}</td>
      <td class="adult">{{ sakuhin.adult }}</td>
      <th>確認用</th>
      <td class="code">
        {{ sakuhin.mediacode }}/{{ sakuhin.adultNum }}/{{ sakuhin.sakuhincode }}
      </td>
    </tr>
    <tr>
      <th>作品</th>
      <td class="code bold">{{ sakuhin.sakuhincode }}</td>
      <td class="media text-ellipsis">{{ sakuhin.sakuhin }}</td>
      <th>なかよし<br />ありSP</th>
      <td class="code">{{ sakuhin.friendSpNum }}</td>
      <td class="code input"></td>
      <th>なかよし<br />なしSP</th>
      <td class="code">{{ sakuhin.notFriendSpNum }}</td>
      <td class="code input"></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
th {
  width: 10rem;
}
.code {
  font-size: 1.2rem;
  width: 5rem;
  @media print {
    height: 4vh;
  }
}
.adult {
  width: 10vw;
}
.media {
  max-width: 5rem;
  white-space: nowrap;
}
</style>

<script setup lang="ts">
import { SakuhinRecord } from '~/type'

interface Props {
  sakuhinArr: SakuhinRecord[]
}
defineProps<Props>()
</script>

<template>
  <table class="check-table mt-16">
    <thead>
      <tr>
        <th>メディアコード</th>
        <th>成年向け有無コード</th>
        <th>作品コード</th>
        <th>メディア</th>
        <th>成年向け有無</th>
        <th>作品</th>
        <th>理論SP数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(set, i) in sakuhinArr" :key="i">
        <td>{{ set.mediacode }}</td>
        <td>{{ set.adultNum }}</td>
        <td>{{ set.sakuhincode }}</td>
        <td>{{ set.media }}</td>
        <td>{{ set.adult }}</td>
        <td>{{ set.sakuhin }}</td>
        <td>{{ set.friendSpNum + set.notFriendSpNum }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

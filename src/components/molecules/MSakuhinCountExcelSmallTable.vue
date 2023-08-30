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
        <th>理論SP数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(set, i) in sakuhinArr" :key="i">
        <td>{{ set.friendSpNum + set.notFriendSpNum }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

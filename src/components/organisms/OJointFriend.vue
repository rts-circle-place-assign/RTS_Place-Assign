<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store'
import { getJointCircle, useCircles } from '~/lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

const all = kikakuAll.value
const friendsCircle = useCircles(all, 'friendCode')
console.log(friendsCircle)
</script>

<template>
  <table class="check-table mt-20">
    <thead>
      <tr>
        <th>なかよしコード</th>
        <th>id</th>
        <th>サークル名</th>
        <th>合体有無</th>
        <th>なかよしコード内合体成立</th>
      </tr>
    </thead>
    <tbody>
      <m-joint-friend-table :friendsCircle="friendsCircle" />
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { planDifferenet, getSpNum } from '~/lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const friendsCircle = planDifferenet(kikakuAll.value)
</script>

<template>
  <table class="check-table mt-20">
    <thead>
      <tr>
        <th>なかよしコード</th>
        <th>サークル数</th>
        <th>スペース数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fcode, i) in friendsCircle" :key="i">
        <td>{{ fcode.code }}</td>
        <td :class="{ different: fcode.circles.length === 2 }">
          {{ fcode.circles.length }}
        </td>
        <td>{{ getSpNum(fcode.circles) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

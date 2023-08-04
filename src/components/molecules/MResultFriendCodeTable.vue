<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Circle, planDifferenet, getSpNum } from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircle = planDifferenet(allData)
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

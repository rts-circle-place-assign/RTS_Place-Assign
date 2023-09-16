<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { Circle, useCircles } from '~/lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircle = useCircles(allData, 'friendCode')
</script>

<template>
  <table class="check-table mt-20">
    <thead>
      <tr>
        <th>なかよしコード</th>
        <th>利用サークル数</th>
        <th>id</th>
        <th>サークル名</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="fcode in friendsCircle">
        <tr v-for="(circle, i) in fcode.circles" :key="i" :class="{ different: fcode.count <= 2 }">
          <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
          <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.count }}</td>
          <td>
            <nuxt-link :to="'/kikaku/' + circle.id" rel="noopener">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

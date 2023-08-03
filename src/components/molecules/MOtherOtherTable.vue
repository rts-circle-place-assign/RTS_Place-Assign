<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  Circle,
  getMedia,
  breakNewLine,
  isOtherMedia,
  switchGenre,
} from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const others = allData.filter(
  circle => circle.gattainum === '' && circle.friendCode === ''
)
const otherCircle = others.filter(circle => isOtherMedia(circle.mediacode))
</script>

<template>
  <div class="mt-20">
    <table class="check-table">
      <thead>
        <tr>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>ジャンル</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(circle, i) in otherCircle" :key="i">
          <td class="other">
            <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <td>{{ getMedia(circle.mediacode) }}</td>
          <td>{{ switchGenre(circle) }}</td>
          <td class="hosoku" v-html="breakNewLine(circle)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.hosoku {
  // max-width: 20vw;
}
.other {
  min-width: 50px;
}
</style>

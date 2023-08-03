<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  Circle,
  BothCircle,
  getMedia,
  jointJudgeArr,
  breakNewLine,
  isOtherMedia,
  switchGenre,
} from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const jointCircles = jointJudgeArr(allData, 'mediacode') as BothCircle[]
const filteredJointCircles = jointCircles.filter(set =>
  isOtherMedia(set.thisCircle.mediacode)
)
</script>

<template>
  <div class="mt-20">
    <table class="check-table mt-12">
      <thead>
        <tr>
          <!-- <th>id</th> -->
          <th>サークル名</th>
          <th>メディア</th>
          <th>ジャンル</th>
          <!-- <th>合体先id</th> -->
          <th>合体先サークル名</th>
          <th>合体先メディア</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in filteredJointCircles" :key="'joint-' + i">
          <!-- <td class="id"></td> -->
          <td>
            {{ set.thisCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.thisCircle.id">{{
              set.thisCircle.id
            }}</nuxt-link>
          </td>
          <td v-html="getMedia(set.thisCircle.mediacode, true)"></td>
          <!-- <td class="id">
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{
              set.jointCircle.id
            }}</nuxt-link>
          </td> -->
          <td>{{ switchGenre(set.thisCircle) }}</td>
          <td>
            {{ set.jointCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{
              set.jointCircle.id
            }}</nuxt-link>
          </td>
          <td v-html="getMedia(set.jointCircle.mediacode, true)"></td>
          <td class="hosoku" v-html="breakNewLine(set.jointCircle)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.hosoku {
  max-width: 20vw;
}
.other {
  max-width: 100px;
}
</style>

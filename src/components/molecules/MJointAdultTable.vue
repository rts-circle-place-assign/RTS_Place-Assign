<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Circle,
  JointCircle,
  isAdultString,
  codeDifferent,
  jointJudgeArr,
} from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('all')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const jointCircles = jointJudgeArr(allData, 'seijin') as JointCircle[]
const filteredJointCircles = jointCircles.filter(
  circle => circle.seijin !== circle.jointSeijin
)
const showJointArr = computed(() => {
  if (orderMode.value === 'filtered') {
    return filteredJointCircles
  } else {
    return jointCircles
  }
})
</script>

<template>
  <div class="mt-20">
    <a-kikaku-radio-button
      :isChosen="orderMode === 'all'"
      content="全合体サークル"
      @click="switchOption('all')"
    />
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="異なるサークルのみ"
      @click="switchOption('filtered')"
    />
    <table class="check-table mt-12">
      <thead>
        <tr>
          <th>id</th>
          <th>サークル名</th>
          <th>成年向け</th>
          <th>合体先サークルid</th>
          <th>合体先サークル名</th>
          <th>合体先成年向け</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(circle, i) in showJointArr"
          :key="'joint-' + i"
          :class="{ different: circle.seijin !== circle.jointSeijin }"
        >
          <td>
            <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <td :class="{ 'red bold': circle.seijin === 1 }">
            {{ isAdultString(circle) }}
          </td>
          <td>
            <nuxt-link :to="'/kikaku/' + circle.jointId">{{
              circle.jointId
            }}</nuxt-link>
          </td>
          <td>{{ circle.jointCircleName }}</td>
          <td :class="{ 'red bold': circle.jointSeijin === 1 }">
            {{ circle.jointSeijinStr }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

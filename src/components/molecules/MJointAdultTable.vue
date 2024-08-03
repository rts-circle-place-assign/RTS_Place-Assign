<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { BothCircle, isAdultString, jointJudgeArr } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('all')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const jointCircles = jointJudgeArr(kikakuAll.value, 'seijin') as BothCircle[]
const filteredJointCircles = jointCircles.filter(set => set.thisCircle.seijin !== set.jointCircle.seijin)
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
    <a-kikaku-radio-button :isChosen="orderMode === 'all'" content="全合体サークル" @click="switchOption('all')" />
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
          <th>合体先id</th>
          <th>合体先サークル名</th>
          <th>合体先成年向け</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in showJointArr" :key="'joint-' + i" :class="{ different: !set.different }">
          <td>
            <nuxt-link :to="'/kikaku/' + set.thisCircle.id">{{ set.thisCircle.id }}</nuxt-link>
          </td>
          <td>{{ set.thisCircle.circlename }}</td>
          <td :class="{ 'red bold': Number(set.thisCircle.seijin) === 1 }">
            {{ isAdultString(set.thisCircle.seijin) }}
          </td>
          <td>
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{ set.jointCircle.id }}</nuxt-link>
          </td>
          <td>{{ set.jointCircle.circlename }}</td>
          <td :class="{ 'red bold': Number(set.jointCircle.seijin) === 1 }">
            {{ isAdultString(set.jointCircle.seijin) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { BothCircle, getSakuhin, jointJudgeArr, breakNewLine } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const jointCircles = jointJudgeArr(kikakuAll.value, 'sakuhincode') as BothCircle[]
const filteredJointCircles = jointCircles.filter(set => !set.different)
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
          <!-- <th>id</th> -->
          <th>サークル名</th>
          <th>作品</th>
          <!-- <th>合体先id</th> -->
          <th>合体先サークル名</th>
          <th>合体先作品</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in showJointArr" :key="'joint-' + i" :class="{ different: !set.different }">
          <!-- <td class="id"></td> -->
          <td>
            {{ set.thisCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.thisCircle.id">{{ set.thisCircle.id }}</nuxt-link>
          </td>
          <td v-html="getSakuhin(set.thisCircle.sakuhincode, true)"></td>
          <!-- <td class="id">
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{
              set.jointCircle.id
            }}</nuxt-link>
          </td> -->
          <td>
            {{ set.jointCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{ set.jointCircle.id }}</nuxt-link>
          </td>
          <td v-html="getSakuhin(set.jointCircle.sakuhincode, true)"></td>
          <td class="hosoku" v-html="breakNewLine(set.thisCircle)"></td>
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

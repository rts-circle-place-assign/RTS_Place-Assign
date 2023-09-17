<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { getMedia, breakNewLine, BothCircle, jointJudgeArr, isMatchGoods } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const jointCircles = jointJudgeArr(kikakuAll.value, 'mediacode') as BothCircle[]
const goodsCircle = jointCircles.filter(set => set.thisCircle.mediacode >= 30 && set.thisCircle.mediacode < 40)
const useData = goodsCircle.filter(set => set.thisCircle.goodsgenre !== '')
const useJointCircles = useData.filter(circle => circle.thisCircle.goodsgenre !== '')
const filteredJointCircles = useJointCircles.filter(set => isMatchGoods(set.thisCircle))
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
      content="「グッズジャンル」欄に入力のあるすべてのサークル"
      @click="switchOption('all')"
    />
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="候補と一致しないサークルのみ"
      @click="switchOption('filtered')"
    />
    <table class="check-table mt-12">
      <thead>
        <tr>
          <!-- <th>id</th> -->
          <th>サークル名</th>
          <th>メディア</th>
          <!-- <th>合体先id</th> -->
          <th>グッズジャンル</th>
          <!-- <th>合体先サークル名</th> -->
          <th>合体先メディア</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(set, i) in showJointArr" :key="'joint-' + i" :class="{ different: isMatchGoods(set.thisCircle) }">
          <!-- <td class="id"></td> -->
          <td>
            {{ set.thisCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.thisCircle.id">{{ set.thisCircle.id }}</nuxt-link>
          </td>
          <td v-html="getMedia(set.thisCircle.mediacode, true)"></td>
          <!-- <td class="id">
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{
              set.jointCircle.id
            }}</nuxt-link>
          </td> -->
          <td>{{ set.thisCircle.goodsgenre }}</td>
          <!-- <td>
            {{ set.jointCircle.circlename }}
            <br />
            <nuxt-link :to="'/kikaku/' + set.jointCircle.id">{{
              set.jointCircle.id
            }}</nuxt-link>
          </td> -->
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
  min-width: 15vw;
  max-width: 30vw;
}
.other {
  max-width: 100px;
}
</style>

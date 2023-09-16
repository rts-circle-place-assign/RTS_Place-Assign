<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { Circle, codeDifferent, getMedia, breakNewLine, isMatchGoods } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircles = codeDifferent(allData, 'mediacode')
const goodsCircles = friendsCircles.filter(set => {
  const isGoods = set.circles.filter(circle => circle.mediacode >= 30 && circle.mediacode < 40)
  return isGoods.length !== 0
})

const differentFriendCircles = goodsCircles.filter(set => {
  const notMatchCircle = set.circles.filter(circle => isMatchGoods(circle))
  return notMatchCircle.length !== 0
})
const showFriendCodeData = computed(() => {
  if (orderMode.value === 'filtered') {
    return differentFriendCircles
  } else {
    return goodsCircles
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
          <th>なかよしコード</th>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>グッズジャンル</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(fcode, k) in showFriendCodeData" :key="k">
          <tr
            v-for="(circle, i) in fcode.circles"
            :key="'friend-' + i"
            :class="{
              different: circle.mediacode >= 30 && circle.mediacode < 40 && isMatchGoods(circle),
            }"
          >
            <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
            <td>
              <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
            </td>
            <td>{{ circle.circlename }}</td>
            <td class="code" v-html="getMedia(circle.mediacode, true)"></td>
            <td>{{ circle.goodsgenre }}</td>
            <td class="hosoku" v-html="breakNewLine(circle)"></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.hosoku {
  max-width: 25vw;
}
.code {
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>

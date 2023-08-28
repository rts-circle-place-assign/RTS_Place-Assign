<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { Circle, getMedia, breakNewLine, isMatchGoods } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const others = allData.filter(
  circle => circle.gattainum === '' && circle.friendCode === ''
)
const goodsCircle = others.filter(
  circle =>
    circle.mediacode >= 30 && circle.mediacode < 40 && circle.goodsgenre !== ''
)
const filteredOthers = goodsCircle.filter(circle => isMatchGoods(circle))
const showFriendCodeData = computed(() => {
  if (orderMode.value === 'filtered') {
    return filteredOthers
  } else {
    return goodsCircle
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
    <table class="check-table">
      <thead>
        <tr>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>グッズジャンル</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(circle, i) in showFriendCodeData"
          :key="i"
          :class="{ different: isMatchGoods(circle) }"
        >
          <td class="other">
            <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <td>{{ getMedia(circle.mediacode) }}</td>
          <td>{{ circle.goodsgenre }}</td>
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

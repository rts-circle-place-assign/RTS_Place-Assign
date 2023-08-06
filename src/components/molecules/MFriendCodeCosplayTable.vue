<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Circle,
  codeDifferent,
  getMedia,
  breakNewLine,
  isCircleMatchCosplay,
} from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircles = codeDifferent(allData, 'mediacode')

const differentFriendCircles = friendsCircles.filter(set => {
  const notMatchCircle = set.circles.filter(circle =>
    isCircleMatchCosplay(circle)
  )
  return notMatchCircle.length !== 0
})
const showFriendCodeData = computed(() => {
  if (orderMode.value === 'filtered') {
    return differentFriendCircles
  } else {
    return friendsCircles
  }
})
</script>

<template>
  <div class="mt-20">
    <a-kikaku-radio-button
      :isChosen="orderMode === 'all'"
      content="全てのなかよしコード利用サークル"
      @click="switchOption('all')"
    />
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="「コスプレ」に関連する補足内容・頒布物名があるサークルを含むなかよしコード"
      @click="switchOption('filtered')"
    />
    <table class="check-table mt-12">
      <thead>
        <tr>
          <th>なかよしコード</th>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(fcode, k) in showFriendCodeData" :key="k">
          <tr
            v-for="(circle, i) in fcode.circles"
            :key="'friend-' + i"
            :class="{
              different:
                circle.mediacode >= 30 &&
                circle.mediacode < 40 &&
                isCircleMatchCosplay(circle),
            }"
          >
            <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
            <td>
              <nuxt-link :to="'/kikaku/' + circle.id">{{
                circle.id
              }}</nuxt-link>
            </td>
            <td>{{ circle.circlename }}</td>
            <td class="code" v-html="getMedia(circle.mediacode, true)"></td>
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

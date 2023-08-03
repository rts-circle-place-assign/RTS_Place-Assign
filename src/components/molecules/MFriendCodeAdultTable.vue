<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Circle, isAdultString, codeDifferent } from '../../lib/hooks'
import { useKikakuAllStore } from '../../store/'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('all')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircles = codeDifferent(allData, 'seijin')
const differentFriendCircles = friendsCircles.filter(
  circle => circle.codeDifferent === true
)
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
      content="全なかよしコードサークル"
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
          <th>なかよしコード</th>
          <th>id</th>
          <th>サークル名</th>
          <th>成年向け</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="fcode in showFriendCodeData">
          <tr
            v-for="(circle, i) in fcode.circles"
            :key="'friend-' + i"
            :class="{ different: fcode.codeDifferent }"
          >
            <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
            <td>
              <nuxt-link :to="'/circle/carte/' + circle.id">{{
                circle.id
              }}</nuxt-link>
            </td>
            <td>{{ circle.circlename }}</td>
            <td :class="{ 'red bold': circle.seijin === 1 }">
              {{ isAdultString(circle) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
</style>

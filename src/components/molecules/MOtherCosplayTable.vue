<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { getMedia, breakNewLine, isCircleMatchCosplay } from '~/lib/hooks'

type Mode = 'all' | 'filtered'
const orderMode = ref<Mode>('filtered')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const others = kikakuAll.value.filter(circle => circle.gattainum === '' && circle.friendCode === '')

const filteredOthers = others.filter(circle => isCircleMatchCosplay(circle))
const showData = computed(() => {
  if (orderMode.value === 'filtered') {
    return filteredOthers
  } else {
    return others
  }
})
</script>

<template>
  <div class="mt-20">
    <a-kikaku-radio-button
      :isChosen="orderMode === 'all'"
      content="合体・なかよしコード以外の全てのサークル"
      @click="switchOption('all')"
    />
    <a-kikaku-radio-button
      :isChosen="orderMode === 'filtered'"
      content="「コスプレ」に関連する補足内容・頒布物名があるサークル"
      @click="switchOption('filtered')"
    />
    <table class="check-table">
      <thead>
        <tr>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(circle, i) in showData" :key="i" :class="{ different: isCircleMatchCosplay(circle) }">
          <td class="other">
            <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <td>{{ getMedia(circle.mediacode) }}</td>
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

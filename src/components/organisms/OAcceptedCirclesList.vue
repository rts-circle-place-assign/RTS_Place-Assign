<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useBeforeFixStore } from '~/store/beforeFix'
import { sortBykey } from '~/lib/hooks'
import { zeroPadding } from '~/lib/utils/string-utils'
import { AcceptedCirclesList } from '~/type/CircleType'

const beforeFixStore = useBeforeFixStore()
const { fetchBeforeFixData } = beforeFixStore
await fetchBeforeFixData()
const { beforeFixData } = storeToRefs(beforeFixStore)

const sortByCircleName = sortBykey(beforeFixData.value, 'circlenamekana')
const sortByPenName = sortBykey(beforeFixData.value, 'pennamekana')
const data: AcceptedCirclesList[] = beforeFixData.value.map(circle => {
  const circleNameIndex = sortByCircleName.findIndex(({ circlename }) => circlename === circle.circlename)
  const penNameIndex = sortByPenName.findIndex(({ penname }) => penname === circle.penname)
  return {
    id: circle.id,
    circlename: circle.circlename,
    circlenamekana: circle.circlenamekana,
    circlenameId: zeroPadding(circleNameIndex),
    penname: circle.penname,
    pennamekana: circle.pennamekana,
    pennameId: zeroPadding(penNameIndex),
    mediacode: circle.mediacode,
    seijin: circle.seijin,
  } as AcceptedCirclesList
})
const sortedData = data.sort((a, b) => (a.circlenameId > b.circlenameId ? 1 : -1))

type Mode = 'show' | 'paste'
const orderMode = ref<Mode>('paste')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}
</script>

<template>
  <m-article-window head="一次募集受付サークル一覧">
    <template #head>
      <div class="flex space-around">
        <a-html-copy-button id="place-assign-table" name="表" />
        <a-json-copy-button id="place-assign-table" name="表" />
      </div>
      <a-kikaku-radio-button :isChosen="orderMode === 'show'" content="表示用" @click="switchOption('paste')" />
      <a-kikaku-radio-button
        :isChosen="orderMode === 'paste'"
        content="データペースト用"
        @click="switchOption('show')"
      />
      <!--      <lazy-m-accepted-circles-table v-show="orderMode === 'show'" :data="sortedData" />-->
      <lazy-m-accepted-circles-paste-table v-show="orderMode === 'paste'" id="place-assign-table" :data="sortedData" />
    </template>
  </m-article-window>
</template>

<style scoped lang="scss"></style>

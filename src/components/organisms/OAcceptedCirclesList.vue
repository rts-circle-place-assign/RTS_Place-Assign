<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useBeforeFixStore } from '~/store/beforeFix'
import { sortBykey } from '~/lib/hooks'
import { zeroPadding } from '~/lib/utils/string-utils'
import { AcceptedCirclesList } from '~/type'

interface Props {
  isSecond: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isSecond: false,
})

const beforeFixStore = useBeforeFixStore()
const { fetchBeforeFixData } = beforeFixStore
await fetchBeforeFixData()
const { beforeFixData } = storeToRefs(beforeFixStore)

const useData: AcceptedCirclesList[] = beforeFixData.value.filter(circle => circle.isSecond)

const sortByCircleName = sortBykey(useData, 'circlenamekana')
const sortByPenName = sortBykey(useData, 'pennamekana')
const data: AcceptedCirclesList[] = useData.map(circle => {
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
      <div class="flex space-around"></div>
      <a-kikaku-radio-button :isChosen="orderMode === 'show'" content="表示用" @click="switchOption('paste')" />
      <a-kikaku-radio-button
        :isChosen="orderMode === 'paste'"
        content="データペースト用"
        @click="switchOption('show')"
      />
      <lazy-m-accepted-circles-table v-show="orderMode === 'show'" :data="sortedData" />
      <lazy-m-accepted-circles-paste-table
        v-show="orderMode === 'paste'"
        id="accepted-circles-list-table"
        :data="sortedData"
      />
    </template>
  </m-article-window>
</template>

<style scoped lang="scss"></style>

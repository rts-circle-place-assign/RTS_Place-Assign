<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { usePlaceAssignMaster, useKikakuAllStore } from '~/store/'
import { webURL, sortBySpace, sortBykey } from '~/lib/hooks'
import { zeroPadding } from '~/lib/utils/string-utils'
import { SortedThisPlaceAssign } from '~/type'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
// console.log(kikakuAll.value)

const placeAssignMasterStore = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(placeAssignMasterStore)

const circleData = placeAssignMaster.value.filter(data => data.rtsId)
const baseData = circleData.map(data => {
  const space = data.block + ('00' + data.number).slice(-2) + data.ab
  return {
    rtsId: data.rtsId,
    space,
  }
})
// console.log(baseData)

const sortByPenName = sortBykey(kikakuAll.value, 'pennamekana')
const sortByCircleName = sortBykey(kikakuAll.value, 'circlenamekana')

const data = baseData.map(thisCircle => {
  const findCircle = kikakuAll.value.find(circle => circle.rtsId === thisCircle.rtsId)!
  const circleNameIndex = sortByCircleName.findIndex(e => e.rtsId === thisCircle.rtsId)
  const penNameIndex = sortByPenName.findIndex(e => e.rtsId === thisCircle.rtsId)
  return {
    id: findCircle.id,
    space: thisCircle.space,
    spaceId: sortBySpace(thisCircle.space),
    circlename: findCircle.circlename,
    circlenamekana: findCircle.circlenamekana,
    circlenameId: zeroPadding(circleNameIndex),
    penname: findCircle.penname,
    pennamekana: findCircle.pennamekana,
    pennameId: zeroPadding(penNameIndex),
    web: webURL(findCircle.web),
    pixiv: findCircle.pixiv,
    twitter: findCircle.twitter,
    x: findCircle.twitter,
  } as SortedThisPlaceAssign
})
const sortedData = data.sort((a, b) => (a.spaceId > b.spaceId ? 1 : -1))

type Mode = 'show' | 'paste'
const orderMode = ref<Mode>('show')
const switchOption = (mode: Mode) => {
  orderMode.value = mode
}
</script>

<template>
  <m-article-window head="配置発表">
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
      <lazy-m-place-assign-table v-show="orderMode === 'show'" :data="sortedData" />
      <lazy-m-place-assign-paste-table v-show="orderMode === 'paste'" id="place-assign-table" :data="sortedData" />
    </template>
  </m-article-window>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useThisPlaceAssignStore, useKikakuAllStore } from '~/store/'
import { webURL, sortBySpace, sortBykey } from '~/lib/hooks'
import { zeroPadding } from '~/lib/utils/string-utils'
import { SortedThisPlaceAssign } from '~/type'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)

const thisPlaceAssignStore = useThisPlaceAssignStore()
const { fetchThisPlaceAssign } = thisPlaceAssignStore
await fetchThisPlaceAssign()

const { thisPlaceAssign } = storeToRefs(thisPlaceAssignStore)
const sortByCircleName = sortBykey(thisPlaceAssign.value, 'circlenamekana')
const sortByPenName = sortBykey(thisPlaceAssign.value, 'pennamekana')
const data = thisPlaceAssign.value.map(thisCircle => {
  const findCircle = kikakuAll.value.find(circle => circle.circlename === thisCircle.circlename)!
  const circleNameIndex = sortByCircleName.findIndex(e => e.circlename === thisCircle.circlename)
  const penNameIndex = sortByPenName.findIndex(e => e.penname === thisCircle.penname)
  return {
    id: findCircle.id,
    space: thisCircle.space,
    spaceId: sortBySpace(thisCircle.space),
    circlename: thisCircle.circlename,
    circlenamekana: thisCircle.circlenamekana,
    circlenameId: zeroPadding(circleNameIndex),
    penname: thisCircle.penname,
    pennamekana: thisCircle.pennamekana,
    pennameId: zeroPadding(penNameIndex),
    web: webURL(thisCircle.web),
    pixiv: thisCircle.pixiv,
    twitter: thisCircle.twitter,
    x: thisCircle.twitter,
  } as SortedThisPlaceAssign
})
const sortedData = data.sort((a, b) => (a.spaceId > b.spaceId ? 1 : -1))

type Mode = 'show' | 'paste'
const orderMode = ref<Mode>('paste')
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

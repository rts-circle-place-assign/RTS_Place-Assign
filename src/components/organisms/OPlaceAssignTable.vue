<script setup lang="ts">
import { storeToRefs } from 'pinia'
// import { ref } from 'vue'
import { usePlaceAssignMaster, useKikakuAllStore } from '~/store/'
import { webURL, sortBySpace, sortBykey, SpaceNumber, blockKind } from '~/lib/hooks'
import { zeroPadding } from '~/lib/utils/string-utils'
import { SortedThisPlaceAssign } from '~/type'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)

const kikakuStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuStore)

const rtsIdArr = placeAssignMaster.value.map(space => space.rtsId) // 全データのrtsId配列
const doubleIdArr = rtsIdArr.filter((x, i, self) => self.indexOf(x) === i && i !== self.lastIndexOf(x) && x !== '') // 重複している（＝2SPの）rtsId配列
const notJiko = placeAssignMaster.value.filter(circle => circle.rtsId) // 事故スペースでないスペースを抽出
const uniqueArr = notJiko.filter((item, index, self) => {
  const rtsIdList = self.map(item => item.rtsId)
  if (rtsIdList.indexOf(item.rtsId) === index) {
    return item
  }
})

const sortByPenName = sortBykey(kikakuAll.value, 'pennamekana')
const sortByCircleName = sortBykey(kikakuAll.value, 'circlenamekana')

const data = uniqueArr.map(thisCircle => {
  const findCircle = kikakuAll.value.find(circle => circle.rtsId === thisCircle.rtsId)!
  const circleNameIndex = sortByCircleName.findIndex(e => e.rtsId === thisCircle.rtsId)
  const penNameIndex = sortByPenName.findIndex(e => e.rtsId === thisCircle.rtsId)
  const number = SpaceNumber(thisCircle.number) // 0埋め
  const isTwoSp = doubleIdArr.includes(thisCircle.rtsId) || blockKind(thisCircle.block) <= 1 // 通常2SPまたはデジアナならtrue
  const ab = isTwoSp ? 'ab' : thisCircle.ab
  const space = thisCircle.block + number + ab
  const web = findCircle.webok === 1 ? webURL(findCircle.web) : ''
  const pixiv = findCircle.pixivok === 1 ? findCircle.pixiv : ''
  const twitter = findCircle.twitterok === 1 ? findCircle.twitter : ''
  return {
    id: findCircle.id,
    space,
    spaceId: sortBySpace(space),
    circlename: findCircle.circlename,
    circlenamekana: findCircle.circlenamekana,
    circlenameId: zeroPadding(circleNameIndex),
    penname: findCircle.penname,
    pennamekana: findCircle.pennamekana,
    pennameId: zeroPadding(penNameIndex),
    web,
    pixiv,
    twitter,
  } as SortedThisPlaceAssign
})
const sortedData = data.sort((a, b) => (a.spaceId > b.spaceId ? 1 : -1))

// type Mode = 'show' | 'paste'
// const orderMode = ref<Mode>('paste')
// const switchOption = (mode: Mode) => {
//   orderMode.value = mode
// }
</script>

<template>
  <m-article-window head="配置発表">
    <template #head>
      <div class="flex space-around">
        <a-html-copy-button id="place-assign-table" name="表" />
        <a-json-copy-button id="place-assign-table" name="表" />
      </div>
      <!--      <a-kikaku-radio-button :isChosen="orderMode === 'show'" content="表示用" @click="switchOption('paste')" />-->
      <!--      <a-kikaku-radio-button-->
      <!--        :isChosen="orderMode === 'paste'"-->
      <!--        content="データペースト用"-->
      <!--        @click="switchOption('show')"-->
      <!--      />-->
      <!--      <lazy-m-place-assign-table v-show="orderMode === 'show'" id="web-master-table" :data="sortedData" />-->
      <lazy-m-place-assign-paste-table id="place-assign-table" :data="sortedData" />
    </template>
  </m-article-window>
</template>

<style scoped lang="scss"></style>

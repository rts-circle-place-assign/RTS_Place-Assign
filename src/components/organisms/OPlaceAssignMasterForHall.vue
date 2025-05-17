<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaceAssignMaster, useKikakuAllStore } from '~/store'
import { blockKind, SpaceNumber } from '~/lib/hooks'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)

const rtsIdArr = placeAssignMaster.value.map(space => space.rtsId) // 全データのrtsId配列
const doubleIdArr = rtsIdArr.filter((x, i, self) => self.indexOf(x) === i && i !== self.lastIndexOf(x) && x !== '') // 重複している（＝2SPの）rtsId配列

const data = placeAssignMaster.value.map(space => {
  const findData = kikakuAll.value.find(c => c.rtsId === space.rtsId)!
  const number = SpaceNumber(space.number) // 0埋め
  const isTwoSp = doubleIdArr.includes(space.rtsId) || blockKind(space.block) <= 1 // 通常2SPまたはデジアナならtrue
  const isJiko = !space.rtsId
  const ab = isTwoSp ? 'ab' : space.ab
  const sp = space.block + number + ab
  const forSort = blockKind(space.block) + sp
  return {
    block: space.block,
    number: space.number,
    ab: space.ab,
    sp,
    isTwoSp,
    isJiko,
    circlename: findData.circlename,
    circlenamekana: findData.circlenamekana,
    penname: findData.penname,
    pennamekana: findData.pennamekana,
    web: findData.web,
    pixiv: findData.pixiv,
    twitter: findData.twitter,
    forSort,
  }
})

const sortedArr = data.sort((a, b) => {
  const smalla = a.forSort.toString().toLowerCase()
  const smallb = b.forSort.toString().toLowerCase()
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})

const twoSpArr = sortedArr.filter(circle => circle.isTwoSp)
const jikoArr = sortedArr.filter(circle => circle.isJiko)
</script>

<template>
  <div>
    <m-article-paragraph secondhead="ホール向け配置マスタ">
      <template #secondhead>
        <m-place-assign-master-for-hall id="hall-master" :arr="sortedArr" />
      </template>
    </m-article-paragraph>
    <m-article-paragraph secondhead="2SPサークル">
      <template #secondhead>
        <m-place-assign-master-for-hall id="twoSp-master" :arr="twoSpArr" />
      </template>
    </m-article-paragraph>
    <m-article-paragraph secondhead="事故SP">
      <template #secondhead>
        <m-place-assign-master-for-hall id="jiko-master" :arr="jikoArr" />
      </template>
    </m-article-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>

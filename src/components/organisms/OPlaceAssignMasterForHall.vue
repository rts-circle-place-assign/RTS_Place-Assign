<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaceAssignMaster } from '~/store'
import { blockKind, SpaceNumber } from '~/lib/hooks'
import hallBlock from '~/assets/data/hall.json'
import gaisyuData from '~/assets/data/gaisyu.json'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { HallData, HallBlock, HallDataForSort } from '~/type'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)

const rtsIdArr = placeAssignMaster.value.map(space => space.rtsId) // 全データのrtsId配列
const doubleIdArr = rtsIdArr.filter((x, i, self) => self.indexOf(x) === i && i !== self.lastIndexOf(x) && x !== '') // 重複している（＝2SPの）rtsId配列

const kaikiStore = useKaikiStore()
const thisGaisyu = gaisyuData.find(kaiki => kaiki.kaiki === kaikiStore.state.value.kaikiEn)!.kabeBlock

const data = placeAssignMaster.value.map(space => {
  const number = SpaceNumber(space.number) // 0埋め
  const isTwoSp = doubleIdArr.includes(space.rtsId) || blockKind(space.block) <= 1 // 通常2SPまたはデジアナならtrue
  const isJiko = !space.circlename.includes('事故スペース')
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
    circlename: space.circlename,
    circlenamekana: space.circlenamekana,
    penname: space.penname,
    pennamekana: space.pennamekana,
    web: space.web,
    pixiv: space.pixiv,
    twitter: space.twitter,
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
const whichHall = (space: HallDataForSort, hallData: HallBlock[]) => {
  const alpha = hallBlock.find(hall => hall.hall === 'αホール')!
  const beta = hallBlock.find(hall => hall.hall === 'βホール')!
  if (thisGaisyu.includes(space.block)) {
  }
}
const eastFiveArr = sortedArr.filter(circle => {
  const eastFive = hallBlock.find(hall => hall.hall === 'αホール')!
  const eastSix = hallBlock.find(hall => hall.hall === '東6')!
  const isEastFive = eastFive.block.includes(circle.block)
  const isEastSix = eastSix.block.includes(circle.block)
})
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

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaceAssignMaster } from '~/store'
import { blockKind, cutName, deskKind, shortenBlock } from '~/lib/hooks'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)
const rtsIdArr = placeAssignMaster.value.map(space => space.rtsId) // 全データのrtsId配列
const doubleIdArr = rtsIdArr.filter((x, i, self) => self.indexOf(x) === i && i !== self.lastIndexOf(x) && x !== '') // 重複している（＝2SPの）rtsId配列
const notJiko = placeAssignMaster.value.filter(
  circle => !circle.circlename.includes('事故スペース') && circle.circlename
) // 事故スペースでないスペースを抽出
const uniqueArr = notJiko.filter((item, index, self) => {
  const rtsIdList = self.map(item => item.rtsId)
  if (rtsIdList.indexOf(item.rtsId) === index) {
    return item
  }
})

const data = uniqueArr.map(circle => {
  const number = ('00' + String(circle.number)).slice(-2) // 0埋め
  const isTwoSp = doubleIdArr.includes(circle.rtsId) || blockKind(circle.block) <= 1 // 通常2SPまたはデジアナならtrue
  const ab = isTwoSp ? 'ab' : circle.ab
  const space = circle.block + number + ab
  const forSort = blockKind(circle.block) + space
  return {
    space,
    circlename: circle.circlename,
    circlenamekana: circle.circlenamekana,
    penname: circle.penname,
    pennamekana: circle.pennamekana,
    web: circle.web,
    pixiv: circle.pixiv,
    twitter: circle.twitter,
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
</script>

<template>
  <m-article-paragraph secondhead="WEBマスタ">
    <template #secondhead>
      <m-web-master-table id="web-master" :arr="sortedArr" />
    </template>
  </m-article-paragraph>
</template>

<style scoped lang="scss"></style>

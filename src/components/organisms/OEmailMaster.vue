<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useEmailStore, useKikakuAllStore, usePlaceAssignMaster } from '~/store/'
import { blockKind, SpaceNumber } from '~/lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

const emailStore = useEmailStore()
const { emailList } = storeToRefs(emailStore)

const placeAssignStore = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(placeAssignStore)

const notJiko = placeAssignMaster.value.filter(circle => circle.rtsId) // 事故スペースでないスペースを抽出
const uniqueArr = notJiko.filter((item, index, self) => {
  const rtsIdList = self.map(item => item.rtsId)
  if (rtsIdList.indexOf(item.rtsId) === index) {
    return item
  }
})

const beforeSortData = uniqueArr.map(circle => {
  const findData = kikakuAll.value.find(c => c.rtsId === circle.rtsId)!
  const findEmailData = emailList.value.find(c => c.rtsId === circle.rtsId)!

  const number = SpaceNumber(circle.number) // 0埋め
  const isTwoSp = findData.spnum > 1 // 通常2SPまたはデジアナならtrue
  const ab = isTwoSp ? 'ab' : circle.ab
  const space = circle.block + number + ab
  const forSort = blockKind(circle.block) + space
  return {
    space,
    circlename: findData.circlename,
    penname: findData.circlenamekana,
    name: findEmailData.name,
    spKind: findData.spnum < 2,
    email: findEmailData.email,
    forSort,
  }
})
const data = beforeSortData.sort((a, b) => {
  const smalla = a.forSort.toString().toLowerCase()
  const smallb = b.forSort.toString().toLowerCase()
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})
</script>

<template>
  <m-email-master-table :data="data" />
</template>

<style scoped lang="scss"></style>

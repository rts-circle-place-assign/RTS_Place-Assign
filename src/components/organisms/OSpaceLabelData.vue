<script setup lang="ts">
import { ref, Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlaceAssignMaster } from '~/store'
import { blockKind, cutName, deskKind, shortenBlock } from '~/lib/hooks'
import { SpaceLabelData } from '~/type'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)
const rtsIdArr = placeAssignMaster.value.map(space => space.rtsId) // 全データのrtsId配列
const doubleIdArr = rtsIdArr.filter((x, i, self) => self.indexOf(x) === i && i !== self.lastIndexOf(x) && x !== '') // 重複している（＝2SPの）rtsId配列
const blockArr = placeAssignMaster.value.map(space => space.block) // 全データのブロック配列
const uniqueBlockArr = [...new Set(blockArr)] // 一意なブロック配列 = ブロック名の配列

const data = placeAssignMaster.value.map(circle => {
  const block = shortenBlock(circle.block)
  const number = ('00' + String(circle.number)).slice(-2)
  const isTwoSp = doubleIdArr.includes(circle.rtsId) || blockKind(circle.block) <= 1 // 通常2SPまたはデジアナならtrue
  const ab = blockKind(circle.block) <= 1 ? 'a' : circle.ab
  const space = block + number + ab
  const circlename = String(circle.circlename).replace('社務証用事故スペース', '社務所スペース')
  const cutId = cutName(circlename, circle.cutId)
  const forSort = blockKind(circle.block) + space
  const desk = deskKind(isTwoSp, circlename)
  return {
    block,
    number,
    ab,
    forSort,
    circlename,
    cutId,
    desk,
  }
})
const digiAnaArr = data.filter(circle => blockKind(circle.block) <= 1) // デジアナサークルのデータを抽出
const digiAnaAddArr = digiAnaArr.map(circle => {
  return {
    block: circle.block,
    number: circle.number,
    ab: 'b',
    forSort: blockKind(circle.block) + circle.block + circle.number + 'b',
    circlename: circle.circlename,
    cutId: circle.cutId,
    desk: circle.desk,
  }
}) // マスタ段階ではデジアナは2SPで1データなので、もう1SP分のデータを用意
const beforeNullArr = data.concat(digiAnaAddArr)

const addBaseArr = ref([]) as Ref<SpaceLabelData[]>
uniqueBlockArr.forEach(block => {
  const blockSpNum = beforeNullArr.filter(space => space.block === block).length // ブロックごとのシールデータ件数
  const roundupNum = Math.ceil(blockSpNum / 12) * 12 // シール台紙は12シール/枚なので、blockSpNum以上の12の倍数を出す
  const addArr = {
    block,
    number: ' ',
    ab: ' ',
    forSort: blockKind(block) + block + '99',
    circlename: ' ',
    cutId: ' ',
    desk: ' ',
  }
  for (let step = 0; step <= roundupNum - blockSpNum - 1; step++) {
    addBaseArr.value.push(addArr)
  }
}) // ブロックごとに改ページするために、ブロックごとの要素数を数えてそれ以上の12nになるよう空白データを挿入
const beforeSortArr = beforeNullArr.concat(addBaseArr.value)

const sortedArr = beforeSortArr.sort((a, b) => {
  const smalla = a.forSort.toString().toLowerCase()
  const smallb = b.forSort.toString().toLowerCase()
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})
const digiAnaCircle = sortedArr.filter(circle => blockKind(circle.block) <= 1)
const normalCircle = sortedArr.filter(circle => blockKind(circle.block) >= 2)
</script>

<template>
  <m-article-paragraph secondhead="スペースシールデータ">
    <template #secondhead>
      <m-space-label-table id="digiAna-label" :arr="digiAnaCircle" />
      <m-space-label-table id="normal-label" :arr="normalCircle" />
    </template>
  </m-article-paragraph>
</template>

<style scoped lang="scss"></style>

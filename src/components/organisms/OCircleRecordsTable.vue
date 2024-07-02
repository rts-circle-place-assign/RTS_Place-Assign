<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getJointCircle, getSpNum, spNum, spaceKind } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store'
import { Circle } from '~/type'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const friendCodeArr = kikakuAll.value.map(circle => circle.friendCode) // 全サークルのなかよしコードの配列
const uniqueFriendCodeArr = Array.from(new Set(friendCodeArr)) // 重複分を削除したなかよしコードの配列

const data = kikakuAll.value.map(circle => {
  const friendCodeId = () => {
    if (circle.friendCode) {
      const id = uniqueFriendCodeArr.indexOf(circle.friendCode)
      return String(('00' + id).slice(-2))
    } else {
      return '99'
    }
  } // なかよしコード利用あり；コードごとに01から採番、利用なし：99
  const spaceNumCode = () => {
    if (circle.gattainum) {
      const jointCircle = getJointCircle(kikakuAll.value, circle)! as Circle // 合体先サークルの情報
      const spSum = getSpNum([circle, jointCircle])
      switch (spSum) {
        case 4: // 2SP+2SPの場合
          return 'A'
        case 3: // 2SP+1SPの場合
          return 'B'
        case 2: // 1SP+1SPの場合
          return 'C'
      }
    } else {
      const spaceNum = spNum(circle.spnum)
      return spaceNum === 2 ? 'X' : 'Y' // 2SPならX、1SPならY
    }
  } // 合体あり：合計SP数が4ならA、3ならB、2ならC  合体なし：SP数が2ならX、1ならY
  const kId =
    spaceKind(circle.spnum) + friendCodeId() + circle.mediacode + circle.seijin + circle.sakuhincode + spaceNumCode()
  // 'A99310AX0001'のような館内統一IDを作成
  return {
    kId,
  }
})
</script>

<template>
  <m-circle-record-table />
</template>

<style scoped lang="scss"></style>

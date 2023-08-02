<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Circle, CirclePAData, PlaceAssign, Gaisyu } from '../../lib/hooks'
import { usePastStore } from '~/store/'
import pastGaisyu from '~/assets/data/gaisyu.json'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()
const circle = props.kikaku

const store = usePastStore()
const { past } = storeToRefs(store)

const pastArr = reactive([]) as CirclePAData[]
const gaisyuArr = pastGaisyu as Gaisyu[]

const kaikiArr = Object.keys(past.value)
kaikiArr.forEach(k => {
  // k = kaikiEn（例：ARTS8, RTS19）
  const kaikiData: PlaceAssign[] = past.value[k]
  // console.log(kaikiData)
  const circlename = circle.circlename
  const findResult = kaikiData.find(circle => circle.circlename === circlename)
  const kaikiPlaceAssign = findResult !== undefined ? findResult.space : '' // その会期のスペースが見つかったら、そのスペースを返す。見つからなかったら''を返す。例：「あ15ab」「う04a」
  const isGaisyu = ref('')
  if (findResult !== undefined) {
    const block = kaikiPlaceAssign.substring(0, 1) // 例：「あ」「う」
    const kaikiGaisyuData = gaisyuArr.find(l => l.kaiki === k)! // その会期の外周データ（誕生日席情報も含む）
    const isKabe = kaikiGaisyuData.kabeBlock.includes(block) // blockがその会期の壁ブロック配列に存在するかをbooleanで返す。
    if (isKabe !== true) {
      // そのスペースが壁になかったら：誕生日席であるかどうかを調べる。
      const spaceNum = Number(kaikiPlaceAssign.substring(1, 3)) // スペースの先頭から2~3文字目（スペース番号）を切り出す。例：「15」「04」
      kaikiGaisyuData.tanseki.forEach(data => {
        if (
          data.block.includes(block) === true &&
          data.num.includes(spaceNum) === true
        ) {
          // そのブロックがblock配列にあり、spaceNumがnum配列にあったら、isGaisyuを「誕生日席」にする。
          isGaisyu.value = '誕生日席'
        }
      })
    } else {
      isGaisyu.value = '壁'
    }
  }
  pastArr.push({
    kaiki: k,
    space: kaikiPlaceAssign,
    gaisyu: isGaisyu.value,
  })
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>会期</th>
        <th>スペース</th>
        <th>外周</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in pastArr" :key="i">
        <td>{{ item.kaiki }}</td>
        <td>{{ item.space }}</td>
        <td>{{ item.gaisyu }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
}

table th {
  border-bottom: solid 2px $main-dull;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px $main-soft;
  text-align: center;
  padding: 10px 0;
}
</style>

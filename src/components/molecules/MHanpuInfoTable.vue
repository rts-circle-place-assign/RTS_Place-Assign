<script setup lang="ts">
import { Circle, HanpuData } from '../../lib/hooks'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const arr: HanpuData[] = reactive([])
// const toujitu: number = state.value.theDay
const toujitu: number = 20230507
const hanpuArr = computed(() => {
  for (let i = 1; i <= 5; i++) {
    const data = props.kikaku
    const keyname = 'hanpu' + i + 'name'
    const keydate = 'hanpu' + i + 'date'
    const keyprice = 'hanpu' + i + 'price'
    const keyamount = 'hanpu' + i + 'amount'
    const name = String(data[keyname as keyof typeof data])
    const date: number = Number(data[keydate as keyof typeof data])
    const ProcessedDate = date === 0 ? '' : date
    const price: number = Number(data[keyprice as keyof typeof data])
    const ProcessedPrice = price === 0 ? '' : price
    const amount: number = Number(data[keyamount as keyof typeof data])
    const ProcessedAmount = amount === 0 ? '' : amount
    arr.push({
      name,
      ProcessedDate,
      ProcessedPrice,
      ProcessedAmount,
    })
  }
  return arr
})
</script>

<template>
  <table class="mt-12">
    <thead>
      <tr>
        <th>#</th>
        <th>頒布物名</th>
        <th>発行日</th>
        <th>頒布価格</th>
        <th>持ち込み数</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in hanpuArr"
        :key="i"
        :class="{ shinkan: item.ProcessedDate == toujitu }"
      >
        <td>{{ i + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.ProcessedDate }}</td>
        <td>{{ item.ProcessedPrice }}</td>
        <td>{{ item.ProcessedAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.shinkan {
  background-color: $main-soft;
}
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

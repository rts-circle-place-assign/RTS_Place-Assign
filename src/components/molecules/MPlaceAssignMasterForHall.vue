<script setup lang="ts">
import { HallData } from '~/type'

interface Props {
  arr: HallData[]
}
defineProps<Props>()

const maru = (item: boolean) => (item ? '○' : '')
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>島列</th>
        <th>島番</th>
        <th>島スペース</th>
        <th>スペ連結</th>
        <th>2SP</th>
        <th>事故</th>
        <th>サークル名</th>
        <th>サークル名カナ</th>
        <th>ペンネーム</th>
        <th>ペンネームカナ</th>
        <th>Web</th>
        <th>Pixiv</th>
        <th>Twitter</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in arr" :key="i">
        <td>{{ circle.block }}</td>
        <td>{{ circle.number }}</td>
        <td>{{ circle.ab }}</td>
        <td>{{ circle.sp }}</td>
        <td>{{ maru(circle.isTwoSp) }}</td>
        <td>{{ maru(circle.isJiko) }}</td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.circlenamekana }}</td>
        <td>{{ circle.penname }}</td>
        <td>{{ circle.pennamekana }}</td>
        <td>{{ circle.web }}</td>
        <td>{{ circle.pixiv }}</td>
        <td>{{ circle.twitter }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

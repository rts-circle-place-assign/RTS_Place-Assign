<script setup lang="ts">
import { ThisPlaceAssign } from '~/type'

interface Props {
  arr: ThisPlaceAssign[]
}
defineProps<Props>()
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>space</th>
        <th>circlename</th>
        <th>circlenamekana</th>
        <th>penname</th>
        <th>pennamekana</th>
        <th>web</th>
        <th>pixiv</th>
        <th>twitter</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in arr" :key="i">
        <td>{{ circle.space }}</td>
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

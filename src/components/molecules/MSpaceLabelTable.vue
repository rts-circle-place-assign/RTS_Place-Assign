<script setup lang="ts">
import { SpaceLabelData } from '~/type'

interface Props {
  arr: SpaceLabelData[]
  id: string
}
defineProps<Props>()
</script>

<template>
  <table :id="id" class="check-table">
    <thead>
      <tr>
        <th>スペース</th>
        <th>サークル名</th>
        <th>カット番号</th>
        <th>机</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(space, i) in arr" :key="i">
        <td>{{ space.block }}{{ space.number }}{{ space.ab }}</td>
        <td>{{ space.circlename }}</td>
        <td>{{ space.cutId }}</td>
        <td>{{ space.desk }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
table {
  margin-top: 10px;
}
</style>

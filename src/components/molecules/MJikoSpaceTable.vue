<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlaceAssignMaster } from '~/store'
import { SpaceNumber } from '~/lib/hooks'

const store = usePlaceAssignMaster()
const { placeAssignMaster } = storeToRefs(store)
const jiko = placeAssignMaster.value.filter(space => !space.rtsId)
</script>

<template>
  <table id="jiko-data-table" class="check-table">
    <thead>
      <tr>
        <th>スペース</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(space, i) in jiko" :key="i">
        <td>{{ space.block + SpaceNumber(space.number) + space.ab }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

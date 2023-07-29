<script setup lang="ts">
import { Circle, getJointCircle } from '../../lib/hooks/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
})
const jointCircle = getJointCircle(thisPlaceAssignData.value, props.kikaku)
</script>

<template>
  <div class="joint mt-20">
    <div>
      なかよしコード
      {{ kikaku.friendCode === '' ? '（なし）' : kikaku.friendCode }}
    </div>
    <div>
      合体先サークル
      <nuxt-link :to="'/kikaku/' + jointCircle.id">{{
        jointCircle.circlename
      }}</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.joint p {
  margin: 0;
}
</style>

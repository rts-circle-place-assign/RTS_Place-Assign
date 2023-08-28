<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Circle, getJointCircle } from '~/lib/hooks/'
import { useKikakuAllStore } from '~/store/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const jointCircle = getJointCircle(kikakuAll.value, props.kikaku)
const componentName = computed(() =>
  jointCircle?.id !== 9999 ? resolveComponent('nuxt-link') : 'span'
)
</script>

<template>
  <div class="joint mt-12">
    <div>
      なかよしコード：
      {{ kikaku.friendCode === '' ? '（なし）' : kikaku.friendCode }}
    </div>
    <div>
      合体先サークル：
      <component :is="componentName" :to="'/kikaku/' + jointCircle!.id">{{
        jointCircle!.circlename
      }}</component
      >　
      <nuxt-link
        v-if="jointCircle?.id !== 9999"
        :to="'/kikaku/joint-' + kikaku.id"
        >（→合体サークル間比較）</nuxt-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.joint p {
  margin: 0;
}
</style>

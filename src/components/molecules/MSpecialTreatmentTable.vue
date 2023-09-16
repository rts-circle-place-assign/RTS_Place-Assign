<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSpecialTreatmentStore, useKikakuAllStore } from '~/store/'
import { useKikakuCardById } from '~/lib/hooks'

const specialTreatmentStore = useSpecialTreatmentStore()
const { fetchSpecialTreatment } = specialTreatmentStore
await fetchSpecialTreatment()
const { specialTreatment } = storeToRefs(specialTreatmentStore)
const showData = specialTreatment.value.data.sort((a, b) => {
  const smalla = a.kikakuId
  const smallb = b.kikakuId
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
</script>

<template>
  <table class="check-table mt-12">
    <thead>
      <tr>
        <th>企画id</th>
        <th>サークル名</th>
        <th>内容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(comment, i) in showData" :key="i">
        <td class="id">
          <nuxt-link :to="'/kikaku/' + comment.kikakuId">{{ comment.kikakuId }}</nuxt-link>
        </td>
        <td>{{ useKikakuCardById(kikakuAll, comment.kikakuId).circlename }}</td>
        <td class="text-left">{{ comment.item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.id {
  min-width: 4rem;
}
</style>

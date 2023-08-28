<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHead } from '@unhead/vue'
import { useKikakuCardById } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store/'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const route = useRoute()
const kikaku = useKikakuCardById(kikakuAll.value, Number(route.params.id))
useHead({
  title: kikaku?.circlename,
})
</script>

<template>
  <div v-if="kikaku">
    <a-kikaku-img :kikaku="kikaku" />
    <div>
      <o-kikaku-title :kikaku="kikaku" />
      <div class="kabu">
        <t-joint-circles :kikaku="kikaku" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kabu {
  width: 80vw;
  max-width: 1000px;
  margin: auto;
}
</style>

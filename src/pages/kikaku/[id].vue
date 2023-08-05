<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuCardById } from '../../lib/hooks'
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
        <t-place-assign-base-info :kikaku="kikaku" />
        <a-fav-button :id="kikaku.id" />
        <t-place-assign-aspiration :kikaku="kikaku" />
        <o-hanpu-info :kikaku="kikaku" />
        <o-past-place-assign :kikaku="kikaku" />
        <o-special-treatment :id="kikaku.id" />
      </div>
    </div>
    <o-kikaku-sim class="mt-40" :kikaku="kikaku" />
  </div>
  <div v-else>Loading...</div>
</template>

<style lang="scss" scoped>
.kabu {
  width: 80vw;
  max-width: 700px;
  margin: auto;
}
.articles {
  width: 80vw;
  max-width: 700px;
  margin: auto;
}

:deep(.slot) {
  width: 80vw;
  max-width: min(700px, calc(100% - 20px));
}
.go-popup {
  z-index: 20;
}
</style>

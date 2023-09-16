<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useKikakuStore } from '~/composables/useKikakuStore'
import { useKaikiStore } from '~/composables/useKaikiStore'
import { useKikakuCardById, Circle } from '~/lib/hooks'
import { shuffle } from '~/lib/utils/array-utils'
import { useKikakuAllStore } from '~/store/'

useHead({
  title: 'サークル検索',
})

const start = ref<number>(1)
const end = ref<number>(1)
const currentPage = ref<number>(1)
// const getPaginateCount = computed(() => {
//   return Math.ceil(kikaku.value.length / 12)
// })
// const paginateClickCallback = (pageNum: number) => {
//   currentPage.value = pageNum
// }

const kikakuStore = useKikakuStore()
const { state: kikakuState, setKikaku } = kikakuStore
const kikaku = computed(() => kikakuState.value.kikaku)

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const kikakus = kikakuAll.value as Circle[]

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const favListName = computed(() => state.value.kaikiEn.toLowerCase() + 'fav-list')
const favList = useStorage(favListName.value, [] as number[])
const favKikaku = computed(() => {
  if (favList.value.length === 0) {
    return []
  } else {
    return favList.value.map(id => useKikakuCardById(kikakus, id))
  }
})
const isFavorite = ref(false)
const switchOption = (mode: boolean) => {
  if (mode) {
    // mode = true、つまりisFavoriteがfalseだった（お気に入り企画を表示させよという）とき
    setKikaku(favKikaku.value)
  } else {
    setKikaku(shuffle(kikakus).slice(0, 12))
  }
  isFavorite.value = !isFavorite.value
}
</script>

<template>
  <div class="find-kikaku-area">
    <m-search-kikaku class="find" @changekeyword="currentPage = 1" />
    <div class="wrapper">
      <div class="container">
        <p class="unit">{{ kikaku.length }}件</p>
        <a-favorite-button class="favbutton" @change="switchOption" />
      </div>
      <client-only>
        <div class="flex wrap justify-center">
          <o-kikaku-card v-for="i in kikaku" :key="i" :kikaku="i" class="okikaku"></o-kikaku-card>
        </div>
      </client-only>
    </div>
    <!-- <client-only>
        <paginate
          class="flex justify-center"
          :page-count="getPaginateCount"
          prev-text="<"
          next-text=">"
          :click-handler="paginateClickCallback"
          container-class="pagination"
          page-class="page-item"
          page-link-class="page-link"
          prev-class="page-item"
          prev-link-class="page-link"
          next-class="page-item"
          next-link-class="page-link"
          :first-last-button="true"
          first-button-text="<<"
          last-button-text=">>"
        />
      </client-only> -->
  </div>
</template>

<style lang="scss" scoped>
.find-kikaku-area {
  width: 100vw;
  min-height: 100vh;
  @include mq(until-pc) {
    flex-direction: column;
  }
}
.find {
  margin-top: -60px !important;
  padding-top: 160px;
  background-image: url('/img/search/pc_bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @include mq(until-pc) {
    background-image: url('/img/search/sp_bg.svg');
  }
}
.wrapper {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 350px) {
    width: 100%;
  }
  @media screen and (min-width: 351px) and (max-width: 740px) {
    width: 95%;
  }
}
.container {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
}
.unit {
  margin-right: 40%;
  font-size: 20px;
  font-weight: bold;
}
.favbutton {
  margin-left: 40%;
  cursor: pointer;
  @media screen and (max-width: 340px) {
    margin-left: 10%;
  }
  @media screen and (min-width: 341px) and (max-width: 390px) {
    margin-left: 20%;
  }
  @media screen and (min-width: 391px) and (max-width: 540px) {
    margin-left: 30%;
  }
}
.okikaku {
  text-align: left;
}
.paginate {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
}
:deep(.pagination) {
  list-style: none;
}
:deep(.page-link) {
  color: $main_dull;
  @include mq(from-pc) {
    font-size: 22px !important;
  }
  @include mq(from-tab) {
    font-size: 20px !important;
  }
  @include mq(from-sp) {
    font-size: 18px !important;
  }
}
:deep(.page-item) {
  list-style: none;
  color: $main_dull;
  margin: 10px 8px;
  @include mq(from-pc) {
    font-size: 22px;
  }
  @include mq(from-tab) {
    font-size: 20px;
  }
  @include mq(from-sp) {
    font-size: 18px;
  }
  &.active > a {
    background-color: $main_dull;
    color: white;
    padding: 0 0.5em;
    width: 1.5em;
    height: 1.5em;
    font-weight: 700;
    border-radius: 50%;
  }
}
</style>

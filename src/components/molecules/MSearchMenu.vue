<script setup lang="ts">
import { watch, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFuse } from '@vueuse/integrations/useFuse'
import { Circle } from '../../lib/hooks/kikaku'
import { useKikakuStore } from '../../composables/useKikakuStore'
import { useSearchWordStore } from '../../composables/useSearchWordStore'
import { shuffle } from '@/lib/utils/array-utils'
import mediacodeList from '~/assets/data/mediacode.json'
import sakuhincodeList from '~/assets/data/sakuhincode.json'
import { useKikakuAllStore } from '~/store/'

const options = {
  fuseOptions: {
    threshold: 0.3,
    keys: ['circlename', 'circlenamekana', 'penname', 'pennamekana'],
  },
}

const inputword = ref('')
const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const searchWordStore = useSearchWordStore()
const { state, setWord } = searchWordStore
const kikakuStore = useKikakuStore()
const { setKikaku } = kikakuStore
const router = useRouter()
watch(inputword, (key, _prevkey) => {
  setWord(key)
})
const runSearch = async () => {
  const ddd = kikakuAll as Circle[]
  const { results } = useFuse(inputword, ddd, options)
  const resultArr = results.value.map(i => i.item)
  setKikaku(resultArr)
  router.push('/search')
}
const media = ref(shuffle(mediacodeList).slice(0, 6))
const sakuhin = ref(shuffle(sakuhincodeList).slice(0, 6))
onMounted(() => {
  sakuhin.value = shuffle(sakuhincodeList).slice(0, 6)
  media.value = shuffle(mediacodeList).slice(0, 6)
})
const show = ref(false)
const takasa = ref('270px')
const touch = () => {
  show.value = !show.value
  takasa.value = show.value ? '' : '270px'
}
</script>

<template>
  <div class="wrapper wrap flex fixed r-0">
    <button
      class="left cursor-pointer"
      :style="{ height: takasa }"
      @click="touch"
    >
      <img src="../../assets/img/top/search_main_dull.svg" />
      <p class="se">企画検索</p>
    </button>
    <div v-show="show" class="menu mt-20 mb-20">
      <div class="search-box flex align-center">
        <div class="search-button" />
        <form
          class="search-text-box full-height"
          role="search"
          @submit.prevent="runSearch"
        >
          <input
            v-model="inputword"
            class="search-text fluid full-height"
            type="search"
            placeholder="検索"
            autocomplete="on"
          />
        </form>
      </div>
      <div class="category flex mt-16">
        <client-only>
          <a-search-button
            v-for="i in media"
            :key="i"
            :searchId="i.code"
            :filterName="i.media"
            backc="#c8daad"
            class="mt-5 ml-5 mr-5 mb-5"
          />
        </client-only>
      </div>
      <div class="category flex mt-16">
        <client-only>
          <a-search-button
            v-for="i in sakuhin"
            :key="i"
            :searchId="i.code"
            :filterName="i.sakuhin"
            backc="#c8daad"
            class="mt-5 ml-5 mr-5 mb-5"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0 auto;
  font-size: 20px;
  font-family: 'Zen Maru Gothic', sans-serif;
}
img {
  display: block;
  width: 20px;
  margin: 0 0 20px 10px;
}
.wrapper {
  width: fit-content;
  z-index: 100;
  background-color: $sub2-soft;
  border-radius: 10px;
}
.left {
  align-items: center;
  background-color: $sub2-soft;
  width: 50px;
  border-radius: 10px 0 0 10px;
  border: none !important;
  outline: none !important;
}
.se {
  writing-mode: vertical-rl !important;
  -ms-writing-mode: tb-rl !important;
  -webkit-writing-mode: vertical-rl !important;
}
.menu {
  background-color: $sub2-soft;
  width: 450px;
  flex-grow: 1;
  margin-right: 10px;
}
.search-box {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: $sub3-soft;
}
.search-text-box {
  width: calc(100% - 40px);
}
.search-text {
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none !important;
  background-color: $sub3-soft;
  font-family: 'Zen Maru Gothic', sans-serif !important;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
.search-button {
  width: 20px;
  height: 40px;
  border: none;
  outline: none;
}
.category {
  flex-wrap: wrap;
}
</style>

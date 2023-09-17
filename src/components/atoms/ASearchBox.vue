<script setup lang="ts">
import { watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useFuse } from '@vueuse/integrations/useFuse'
import { useKikakuStore } from '~/composables/useKikakuStore'
import { useSearchWordStore } from '~/composables/useSearchWordStore'
import { Circle } from '~/type'
import { shuffle } from '~/lib/utils/array-utils'
import { useKikakuAllStore } from '~/store/'

interface Props {
  defaultword?: string
  barcolor?: string
  pcyoko?: string
  spyoko?: string
  tate?: number
  buttonkado?: string
  barkado?: string
  keyword?: string
}
withDefaults(defineProps<Props>(), {
  defaultword: '',
  barcolor: '',
  pcyoko: '60%',
  spyoko: '80%',
  tate: 40,
  buttonkado: '20px 0px 0px 20px',
  barkado: '0px 20px 20px 0px',
  keyword: '',
})

const options = {
  fuseOptions: {
    threshold: 0.3,
    keys: ['circlename', 'circlenamekana', 'penname', 'pennamekana', 'id'],
  },
}

const searchWordStore = useSearchWordStore()
const { state, setWord } = searchWordStore
const kikakuStore = useKikakuStore()
const { state: kikakuState, setKikaku } = kikakuStore
const word = ref(state.value.word)
const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

watch(
  () => word.value,
  (key, _prevkey) => {
    if (key === '' && kikakuState.value.kikaku.length === 0) {
      setKikaku(shuffle(kikakuAll.value).slice(0, 12))
    } else {
      word.value = key
      setWord(key)
    }
  },
  { immediate: true }
)
const router = useRouter()
const runSearch = async () => {
  const ddd = kikakuAll.value as Circle[]
  if (word.value === '') {
    setKikaku(shuffle(ddd).slice(0, 12))
  } else {
    const { results } = useFuse(word, ddd, options)
    const resultArr = results.value.map(i => i.item)
    setKikaku(resultArr)
  }
  router.push('/kikaku/search')
}
</script>

<template>
  <div class="search-box flex align-center" :style="{ '--pcyoko': pcyoko, '--spyoko': spyoko, height: tate + 'px' }">
    <!-- <span class="flex justify-center">
      <img
        src="../../assets/img/top/search_main_dull.svg"
        :style="{ width: tate / 2.5 + 'px' }"
      />
    </span> -->
    <button
      class="search-button flex align-center justify-center cursor-pointer full-height"
      :style="{
        'background-color': barcolor,
        '--buttonkado': buttonkado,
        width: tate + 'px',
      }"
      @click="runSearch"
    >
      <span class="flex justify-center">
        <img src="../../assets/img/top/search_main_dull.svg" :style="{ width: tate / 2.5 + 'px' }" />
      </span>
    </button>
    <form class="search-text-box full-height" role="search" @submit.prevent="runSearch">
      <input
        v-model="word"
        class="search-text fluid full-height"
        :style="{ 'background-color': barcolor, '--barkado': barkado }"
        type="search"
        :placeholder="defaultword"
        autocomplete="on"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  width: var(--pcyoko);
  @include mq(sp) {
    width: var(--spyoko);
  }
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
  border-radius: var(--barkado);
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none !important;
  font-family: dnp-shuei-gothic-gin-std, sans-serif !important;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
.search-button {
  border: none;
  border-radius: var(--buttonkado);
  outline: none;
  font-size: 16px;
}
</style>

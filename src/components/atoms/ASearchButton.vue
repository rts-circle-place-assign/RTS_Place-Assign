<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import mediacodeList from '~/assets/data/mediacode.json'
import sakuhincodeList from '~/assets/data/sakuhincode.json'
import { useKikakuAllStore } from '~/store/'

interface Props {
  searchId: number | string
  filterName: string
  backc?: string
}
const props = defineProps<Props>()

interface Emits {
  (e: 'input'): void
}
const emits = defineEmits<Emits>()

const mediaCodeArr = mediacodeList.map(mediaCodeSet => mediaCodeSet.code)
const sakuhinCodeArr = sakuhincodeList.map(sakuhinCodeSet => sakuhinCodeSet.code)
const router = useRouter()
const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)

const kikakuStore = useKikakuStore()
const { setKikaku } = kikakuStore
const search = async () => {
  if (mediaCodeArr.includes(props.searchId)) {
    const mediaCircle = kikakuAll.value.filter(circle => circle.mediacode === props.searchId)
    setKikaku(mediaCircle)
  } else if (sakuhinCodeArr.includes(props.searchId)) {
    const sakuhinCircle = kikakuAll.value.filter(circle => circle.sakuhincode === props.searchId)
    setKikaku(sakuhinCircle)
  } else {
    emits('input')
  }
  router.push('/kikaku/search')
  // emits('input')
}
</script>

<template>
  <button :style="{ '--background': backc }" @click="search">
    <p class="name">{{ filterName }}</p>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-color: white;
  border: none !important;
  outline: none !important;
  border-radius: 100px !important;
  background-color: white;
}
button:hover {
  background-color: var(--background);
}
.name {
  margin: 0.3em 1em;
}
</style>

<script lang="ts" setup>
import { MediaSet, SakuhinSet } from '~/type/CircleType'
import mediacodeList from '~/assets/data/mediacode.json'
import sakuhincodeList from '~/assets/data/sakuhincode.json'

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
const sakuhinCodeArr = sakuhincodeList.map(
  sakuhinCodeSet => sakuhinCodeSet.code
)
// console.log(props.filterName)
const router = useRouter()
const { data: thisPlaceAssignData } = await useFetch('/api/thisPlaceAssign', {
  key: 'thisPlaceAssignData',
})
const kikakuStore = useKikakuStore()
const { setKikaku } = kikakuStore
const search = async () => {
  if (mediaCodeArr.includes(props.searchId)) {
    const mediaCircle = thisPlaceAssignData.value.filter(
      circle => circle.mediacode === props.searchId
    )
    setKikaku(mediaCircle)
  } else if (sakuhinCodeArr.includes(props.searchId)) {
    const sakuhinCircle = thisPlaceAssignData.value.filter(
      circle => circle.sakuhincode === props.searchId
    )
    setKikaku(sakuhinCircle)
  } else {
    emits('input')
  }
  router.push('/search')
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

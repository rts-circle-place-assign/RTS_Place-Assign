<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'

type SpecialTreatment = {
  id: number
  comment: string
}
interface Props {
  id: number
}
const props = defineProps<Props>()

const kaikiStore = useKaikiStore()
const { state } = kaikiStore
const favListName = computed(() => state.value.kaikiEn.toLowerCase() + 'special-treatment-list')
const text = ref('')
const favList = useStorage(favListName.value, [] as SpecialTreatment[])
const search = favList.value.find(kikaku => kikaku.id === props.id)
// const text = computed(() => {
//   const search = favList.value.find(kikaku => kikaku.id === props.id)
//   return search !== undefined ? search.comment : ''
// })
if (search) {
  text.value = search.comment
}
const fav = () => {
  if (search) {
    favList.value = favList.value.filter(i => i.id !== props.id)
    favList.value.push({
      id: props.id,
      comment: text.value,
    })
  } else {
    favList.value.push({
      id: props.id,
      comment: text.value,
    })
  }
}
</script>

<template>
  <div>
    <label for="special-treatment" class="contenteditable mt-20">
      <!-- <div class="contenteditable" contenteditable="true" role="textbox">
        {{ text }}
      </div> -->
      <textarea id="special-treatment" v-model="text" name="" cols="100" rows="10"></textarea>
    </label>
    <button @click="fav">保存</button>
  </div>
</template>

<style lang="scss" scoped>
.contenteditable {
  display: flex;
  align-items: flex-start;
  & .label {
    color: red;
    font-weight: bold;
    width: 64px;
    min-width: 64px;
    padding-top: 4px;
  }
  & .contenteditable {
    width: calc(100% - 64px);
    min-height: 70px;
    padding: 8px 12px;
    border: 2px solid $main-dull;
    &:focus-visible {
      outline: none;
      border-color: $accent;
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import * as Toast from 'vue-toastification'

interface Props {
  kikakuId: number
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'addItem'): void
}>()

const { useToast } = Toast
const toast = useToast()

const itemValue = ref('')
const handleAddItem = async () => {
  if (itemValue.value === '') {
    return toast.error('Field is required.')
  }
  await useFetch('/api/v1/item/add', {
    method: 'POST',
    body: {
      item: itemValue.value,
      kikakuId: props.kikakuId,
    },
    onResponse(context) {
      const { statusCode, statusMessage } = context.response._data
      if (statusCode === 200) {
        useToast().success('New item has been added.')
        itemValue.value = ''
      } else {
        toast.error(statusMessage)
        throw createError({ statusCode, statusMessage, fatal: true })
      }
    },
  })
  emit('addItem')
}
</script>
<template>
  <div>
    <form class="flex" @submit.prevent="handleAddItem">
      <!-- <input
        v-model="itemValue"
        type="text"
        placeholder="コメントを入力してください…"
        class="outline outline-1 outline-slate-300 rounded min-h-[40px] w-full text-sm pl-2 focus:outline-slate-500"
      /> -->
      <textarea
        id=""
        v-model="itemValue"
        name=""
        placeholder="コメントを入力してください…"
        class="outline outline-1 outline-slate-300 rounded w-full text-sm pl-2 focus:outline-slate-500"
      ></textarea>
      <button type="submit" class="min-w-fit bg-blue-700 text-white px-6 py-2 rounded text-sm font-bold uppercase">
        コメント追加
      </button>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/toastification.scss';
form {
  gap: 0.5rem;
}
// input {
//   outline: 1px solid $main-dull;
//   padding-left: 0.5rem;
//   border-radius: 0.25rem;
//   width: 100%;
//   line-height: 1.25rem;
//   min-height: 40px;
//   border: none;
//   height: 60px;
//   &:focus {
//     outline-color: $main-dark;
//   }
// }
textarea {
  line-height: 1.25rem;
  width: 100%;
  height: 4rem;
  min-height: 40px;
  resize: none;
  // font-size: inherit;
  font: inherit;
  border: none;
  outline: 1px solid $main-dull;
  border-radius: 0.25rem;
  &:focus {
    outline-color: $main-dark;
  }
}
button {
  border: none;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  background-color: $main-dark;
  border-radius: 0.25rem;
  min-width: fit-content;
  background-image: none;
  cursor: pointer;
  &:hover {
    background-color: $main-dull;
  }
}
</style>

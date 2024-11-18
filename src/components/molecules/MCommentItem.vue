<script lang="ts" setup>
import { Types } from 'mongoose'
import { ref } from 'vue'
import * as Toast from 'vue-toastification'
import { useFetch } from '#app'
import { ITodo } from '~/server/types/'

const { useToast } = Toast
const toast = useToast()

const props = defineProps<{
  item: ITodo
}>()
const emit = defineEmits<{
  (e: 'delete'): void
  (e: 'update'): void
}>()

const itemRef = ref<HTMLElement | null>(null)

const handleDelete = async (id: Types.ObjectId): Promise<void> => {
  const { error } = await useFetch(`/api/v1/item/${id}`, {
    method: 'DELETE',
    onResponse(context) {
      const { statusCode, statusMessage } = context.response._data
      if (statusCode === 200) {
        toast.info(statusMessage)
      }
    },
  })
  emit('delete')
  if (error.value) {
    toast.error(error.value.statusMessage)
    alert(error.value.statusMessage)
  }
}

const removeEditActiveClasses = (): void => {
  const lists = Array.from(document.querySelectorAll('.list'))
  lists.forEach(el => el.classList.remove('edit-active'))
}

const handleEdit = (): void => {
  removeEditActiveClasses()
  itemRef.value?.classList.add('edit-active')
}

const handleCancel = (): void => {
  removeEditActiveClasses()
  const formInput = itemRef.value?.querySelector('input')
  formInput!.value = props.item.item
}

const handleSaveEdit = async (id: Types.ObjectId): Promise<void> => {
  const formInput = itemRef.value?.querySelector('input')
  await useFetch(`/api/v1/item/${id}`, {
    method: 'PUT',
    body: { item: formInput!.value },
  })
  emit('update')
  toast.info('Comment updated.')
  removeEditActiveClasses()
}
</script>
<template>
  <li :id="item._id.toString()" ref="itemRef" class="list p-2 hover:bg-slate-100 flex gap-2">
    <div class="item-list w-full text-sm text-slate-600">
      <div class="item">
        {{ item.item }}
      </div>
      <div>
        <form class="form-edit flex">
          <input
            type="text"
            :value="item.item"
            class="fix-input outline outline-slate-200 outline-1 bg-white text-sm pl-2 py-1 rounded"
          />
          <!-- Save -->
          <button
            class="save-button bg-blue-700 text-white rounded text-xs px-2 uppercase"
            @click.prevent="handleSaveEdit(item._id)"
          >
            Save
          </button>
          <!-- Cancel -->
          <button
            class="cancel-button bg-slate-300 text-slate-500 rounded text-xs px-2 uppercase"
            @click.prevent="handleCancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
    <div class="w-min-fit flex actions">
      <div>
        <a-edit-icon class="icon edit-icon text-slate-500" @click="handleEdit" />
      </div>
      <div>
        <a-delete-icon class="icon delete-icon cursor-pointer" @click="handleDelete(item._id)" />
      </div>
    </div>
  </li>
</template>
<style scoped lang="scss">
@import '@/assets/scss/toastification.scss';
.icon {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}
.actions {
  gap: 1rem;
  min-width: fit-content;
}
.edit-active {
  & .actions {
    display: none;
  }
  & .item {
    display: none;
  }
  & .form-edit {
    display: flex;
  }
}
.form-edit {
  display: none;
  gap: 0.5rem;
}
.delete-icon {
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity));
}
.item-list {
  width: 100%;
}
.fix-input {
  border: none;
  border-radius: 0.25rem;
  outline: 1px solid $main-soft;
  width: 100%;
  padding: 0.25rem 0.5rem;
  min-height: 28px;
  &:focus {
    outline-color: $main-dull;
  }
}
button {
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
}
.save-button {
  background-color: $main-dull;
  color: $white;
}
.cancel-button {
  background-color: $main-soft;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { useFetch } from '#app'
import type { IAllItems } from '~/type'

interface Props {
  kikakuId: number
}
const props = defineProps<Props>()

const {
  data: items,
  refresh,
  error,
} = await useFetch<IAllItems>('/api/v1/item/all-items')
if (error.value) {
  throw createError(error.value)
}

const filteredItems = computed(() => {
  const getItems = items.value.data
  return getItems.filter(item => item.kikakuId === props.kikakuId)
})
</script>

<template>
  <m-article-window>
    <template #head>
      <m-article-paragraph secondhead="変更・特殊対応履歴">
        <template #secondhead>
          <div class="mt-24">
            <m-comment-form :kikakuId="kikakuId" @add-item="refresh" />
            <ul v-if="filteredItems.length > 0" class="pl-0">
              <m-comment-item
                v-for="(item, i) in filteredItems"
                :key="i"
                :item="item"
                @delete="refresh"
                @update="refresh"
              />
            </ul>
            <div v-else>変更・特殊対応履歴なし</div>
            <NuxtErrorBoundary>
              <!-- ... -->
              <template #error>
                <p>An error occurred: {{ error }}</p>
              </template>
            </NuxtErrorBoundary>
          </div>
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
</template>

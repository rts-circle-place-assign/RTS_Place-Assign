<script setup lang="ts">
import { ref } from 'vue'

interface Fix {
  text: string
  itemValue: string
}

interface Props {
  items: Fix[]
  link: string
  width?: string
  next: string
}

withDefaults(defineProps<Props>(), {
  width: '200',
})

const selectItems = ref([])
</script>

<template>
  <m-article-window head="作業チェックリスト">
    <template #head>
      <div v-for="(item, i) in items" :key="i">
        <label :for="'item' + i" class="label">
          <input :id="'item' + i" v-model="selectItems" type="checkbox" :value="item.itemValue" class="input" />
          <span class="mark"></span>
          <span class="text">{{ item.text }}</span>
        </label>
      </div>
      <a-link-button v-show="items.length === selectItems.length" :link="link" :width="`${width}px`" class="mt-12">{{
        next
      }}</a-link-button>
    </template>
  </m-article-window>
</template>

<style scoped lang="scss">
@import '@/assets/scss/fix.scss';
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toArrayObjects } from '~/lib/utils/array-utils'

interface Props {
  id: string
}
const props = defineProps<Props>()

const text = ref('')
onMounted(() => {
  const data = document.getElementById(props.id)!
  const json = JSON.stringify(toArrayObjects(data))
  text.value = '<script> const data = ' + json + '\<\/script>'
})
</script>

<template>
  <textarea v-model="text"></textarea>
</template>

<style scoped lang="scss">
textarea {
  font-size: 0.9rem;
  height: 150px;
}
</style>

<script setup lang="ts">
import * as Toast from 'vue-toastification'
import { toArrayObjects } from '~/lib/utils/array-utils'

interface Props {
  id: string
  name: string
}
const props = defineProps<Props>()

const { useToast } = Toast
const toast = useToast()

const onClick = async () => {
  const data = document.getElementById(props.id)!
  const json = JSON.stringify(toArrayObjects(data))
  try {
    await navigator.clipboard.writeText(json)
    toast.success('Copied JSON!')
  } catch (e) {
    // toast.error(`${e}`)
    console.log(e)
  }
}
</script>

<template>
  <a-link-button @click="onClick()">{{ name }}のJSONをコピー</a-link-button>
</template>

<style scoped lang="scss"></style>

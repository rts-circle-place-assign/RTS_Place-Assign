<script setup lang="ts">
import * as Toast from 'vue-toastification'

interface Props {
  id: string
  name: string
  width: string
}
const props = defineProps<Props>()

const { useToast } = Toast
const toast = useToast()

const onClick = async () => {
  const data = document.getElementById(props.id)!
  try {
    await navigator.clipboard.writeText(data.innerText)
    toast.success('Copied html!')
  } catch (e) {
    // toast.error(`${e}`)
    console.log(e)
  }
}
</script>

<template>
  <a-link-button :width="width" @click="onClick()">{{ name }}のHTMLをコピー</a-link-button>
</template>

<style scoped lang="scss"></style>

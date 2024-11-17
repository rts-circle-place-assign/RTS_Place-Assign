<script setup lang="ts">
interface Props {
  fileName: string
  downloadName?: string
  name: string
  width: string
}

const props = withDefaults(defineProps<Props>(), {
  downloadName: '',
})

const download = () => {
  const link = document.createElement('a')
  link.href = `/${props.fileName}`
  link.download = props.downloadName ? props.downloadName : props.fileName
  link.target = '_blank'
  link.click()
}
</script>

<template>
  <a-link-button :width="width" class="download-button" @click="download">{{ name }}ダウンロード</a-link-button>
</template>

<style scoped lang="scss">
.download-button {
  cursor: pointer;
}
</style>

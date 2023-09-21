<script setup lang="ts">
import { ref, onMounted } from 'vue'

const toArrayObjects = (table: HTMLElement) => {
  const columns = Array.from(table.querySelectorAll('th')).map(heading => heading.textContent)

  const rows = table.querySelectorAll('tbody > tr')

  return Array.from(rows).map(row => {
    const dataCells = Array.from(row.querySelectorAll('td'))

    return columns.reduce((obj, column, index) => {
      obj[column] = dataCells[index].textContent
      return obj
    }, {})
  })
}
const text = ref('')
onMounted(() => {
  const data = document.getElementById('place-assign-table')!
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

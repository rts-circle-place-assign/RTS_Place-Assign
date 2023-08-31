<script setup lang="ts">
interface Props {
  recordNum: number
  number: string
  name: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex space-between">
    <h1>{{ number }}.{{ name }}</h1>
    <table>
      <tr>
        <th>{{ number }}紙_id</th>
        <td class="id">{{ recordNum + 1 }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
.id {
  padding: 0.4rem 1.8rem;
}
</style>

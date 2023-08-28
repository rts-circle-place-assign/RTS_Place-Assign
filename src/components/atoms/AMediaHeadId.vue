<script setup lang="ts">
interface Props {
  recordNum: number
}

defineProps<Props>()
</script>

<template>
  <div class="flex space-between">
    <h1>1. メディア別頭紙</h1>
    <table>
      <tr>
        <th>1紙_id</th>
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

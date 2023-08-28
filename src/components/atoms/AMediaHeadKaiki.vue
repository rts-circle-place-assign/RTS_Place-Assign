<script setup lang="ts">
interface Props {
  kaikiEn: string
}

defineProps<Props>()
</script>

<template>
  <table>
    <tr>
      <th>会期</th>
      <td>{{ kaikiEn }}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/management.scss';
</style>

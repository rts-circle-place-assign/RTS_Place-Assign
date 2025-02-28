<script setup lang="ts">
type EmailMaster = {
  space: string
  circlename: string
  penname: string
  spKind: boolean
  name: string
  email: string
}

interface Props {
  data: EmailMaster[]
}

defineProps<Props>()
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>配置</th>
        <th>サークル名</th>
        <th>ペンネーム</th>
        <th>2SP</th>
        <th>氏名</th>
        <th>メールアドレス</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in data" :key="i">
        <td>{{ circle.space }}</td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td>{{ circle.spKind ? '' : '○' }}</td>
        <td>{{ circle.name }}</td>
        <td>{{ circle.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
</style>

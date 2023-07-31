<script setup lang="ts">
const text = ref('')
</script>

<template>
  <a-text-area title="変更・特殊対応履歴" @input="text = $event" />
</template>

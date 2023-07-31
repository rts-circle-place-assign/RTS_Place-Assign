<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuCardById } from '../../lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
</script>

<template>
  <p>{{ kikakuAll.value }}</p>
</template>

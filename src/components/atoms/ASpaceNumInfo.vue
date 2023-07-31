<script setup lang="ts">
import { Circle, spaceKind, spNum } from '../../lib/hooks/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const spaceKindOf = spaceKind(props.kikaku)
const spnum = spNum(props.kikaku)
</script>

<template>
  <div class="mt-12">
    <div>
      申込プラン：
      {{ spaceKindOf }}
    </div>
    <div>
      スペース数：
      {{ spnum }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { spKind, spNum } from '~/lib/hooks/'
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const spaceKindOf = spKind(props.kikaku.spnum)
const spnum = spNum(props.kikaku.spnum)
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

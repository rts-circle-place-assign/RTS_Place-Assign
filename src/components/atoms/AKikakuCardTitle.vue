<script setup lang="ts">
import { Circle } from '~/lib/hooks'
interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const kikakuInfo = props.kikaku
const kikakuName = computed(() => {
  const nameInfo = kikakuInfo.circlename
  const nameLength = nameInfo?.length ?? 0
  if (nameLength > 34) {
    return [nameInfo.substring(0, 34), '...'].join('')
  } else if (nameLength > 22) {
    return [nameInfo.substring(0, 22), '...'].join('')
  } else {
    return nameInfo
  }
})
const orgName = kikakuInfo.penname
const orgInfo = computed(() => {
  if ((orgName?.length || 0) > 65) {
    return [orgName.substring(0, 65), '...'].join('')
  } else {
    return orgName
  }
})
</script>

<template>
  <div class="title-wrapper">
    <div class="title border">
      <p class="name">{{ kikakuName }}</p>
    </div>
    <div class="org">
      {{ orgInfo }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  height: 55px;
  width: 160px;
}
.org {
  font-size: 12px;
  margin-top: 2px;
  line-height: 1.2rem;
  height: 33.5px;
}
.border {
  border-bottom: 3px dotted $main-dark;
}
.name {
  width: 175px;
  margin-top: 0;
  line-height: 1.7rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>

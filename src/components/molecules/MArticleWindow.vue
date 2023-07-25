<script setup lang="ts">
interface Props {
  head?: string
  mayFont?: boolean
  fontSize?: number
}
withDefaults(defineProps<Props>(), {
  head: '',
  mayFont: false,
  fontSize: 20,
})
</script>

<template>
  <div class="m-article-window">
    <a-article-head
      v-show="head"
      :head="head"
      :mayFont="mayFont"
      :fontSize="fontSize"
    />
    <br v-show="!head" />
    <div class="slot slot-1">
      <slot name="head" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slot {
  margin-left: 20px;
  width: 80vw;
  @include mq(from-pc) {
    margin-left: 1.5rem;
    width: 80vw;
  }
  @media screen and (min-width: 1130px) {
    // pc版
    width: 980px;
  }
  @media screen and (min-width: 1600px) {
    width: 1000px;
  }
  &-1 {
    margin-bottom: 10px;
  }
}
.komidashi {
  margin-left: 15px;
  font-weight: bold !important;
}
</style>

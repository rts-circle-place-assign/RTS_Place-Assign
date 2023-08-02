<script setup lang="ts">
interface Props {
  content: string
  isChosen: boolean
}
defineProps<Props>()
</script>

<template>
  <div class="flex align-center">
    <div class="radio-button cursor-pointer" @click="$emit('click')">
      <div class="green-circle" :class="{ 'not-choose': !isChosen }" />
    </div>
    <div class="content-wrapper">{{ content }}</div>
  </div>
</template>

<style lang="scss" scoped>
.radio-button {
  width: 20px;
  height: 20px;
  border: solid 3px $main-dark;
  border-radius: 50%;
  background-color: $sub4-soft;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: $sub4-dull;
  }
}
.green-circle {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: $sub2-dull;
  &.not-choose {
    background-color: transparent;
  }
}
.content-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
</style>

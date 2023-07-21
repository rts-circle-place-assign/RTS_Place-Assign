<script setup lang="ts">
import images from '../../lib/images'

interface Props {
  title: string
}
withDefaults(defineProps<Props>(), {
  title: ""
})

const windowWidth = ref<number>(0)
const getWindwWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('load', getWindwWidth)
  window.addEventListener('resize', getWindwWidth)
})
// const img = () => {
//   if (windowWidth.value >= 740) {
//     return require('../../assets/img/template/h1_leaves_pc.svg')
//   } else {
//     return require('../../assets/img/template/h1_leaves.svg')
//   }
// }
const isPC = windowWidth.value >= 740
</script>

<template>
  <div class="flex padding">
    <!-- <img class="image" :src="img()" /> -->
    <img v-if="isPC" src="../../assets/img/template/h1_leaves_pc.svg" alt="" class="image">
    <img v-else src="../../assets/img/template/h1_leaves.svg" alt="" class="image">
    <h1 class="article-title">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.padding {
  padding-top: 60px;
  @include mq(from-tab) {
    padding-top: 80px;
  }
}
.image {
  position: relative;
  z-index: 0;
  width: auto;
  @include mq(from-tab) {
    // tab版
    margin-left: 10px;
    width: 300px;
  }
  @include mq(from-pc) {
    // pc版
    margin-left: 20px;
    width: 474.33px;
  }
}
.article-title {
  position: relative;
  color: $main-dark;
  padding: 0px 0px 0px 15px;
  margin-left: -168px;
  @include mq(from-tab) {
    // tab版
    margin-left: -295px;
    padding-top: 15px;
  }
  @include mq(from-pc) {
    // pc版
    // margin-left: -480px;
    margin-left: -400px;
    padding-top: 22px;
  }
  @media screen and (min-width: 1110px) {
    // pc版
    // margin-left: calc(100vw - 1590px);
    margin-left: -400px;
  }
  @media screen and (min-width: 1190px) {
    // pc版
    margin-left: -400px;
  }
}
</style>

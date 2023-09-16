<script setup lang="ts">
interface Props {
  head: string
  mayFont: boolean
  fontSize: number
}

withDefaults(defineProps<Props>(), {
  head: '',
  mayFont: false,
  fontSize: 20,
})
</script>

<template>
  <div class="aheadwindow-wrapper flex">
    <img src="../../assets/img/template/h2_leaves.svg" class="align-self-start h-20 ouchi" />
    <h2 class="midashi my-0 lh-short" :class="{ mayFont: mayFont }" :style="{ fontSize: fontSize + 'px !important' }">
      {{ head }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.aheadwindow-wrapper {
  margin-top: 40px;
}
.midashi {
  color: $main-dark;
}
.article-title {
  position: relative;
  z-index: 1;
  width: fit-content;
  color: $text1;
  padding: 0px 0px 0px 15px;
  font-size: 36px;
}
.align-self-start {
  align-self: flex-start;
}
.lh-short {
  line-height: 1.5em;
}
.mayFont {
  font-family: 'anzu', sans-serif !important;
  font-size: 140% !important;
}
.ouchi {
  margin-top: -7px;
}
</style>

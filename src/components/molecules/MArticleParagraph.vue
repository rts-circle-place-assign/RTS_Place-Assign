<script setup lang="ts">
interface Props {
  secondhead?: string
  subhead?: string
}

withDefaults(defineProps<Props>(), {
  secondhead: '',
  subhead: '',
})
</script>

<template>
  <div class="m-article-paragraph">
    <div v-if="secondhead">
      <a-article-second-head :secondhead="secondhead" />
      <div class="slot slot-2">
        <slot class="slot slot-2" name="secondhead" />
      </div>
    </div>
    <div>
      <div>
        <h4 class="komidashi">{{ subhead }}</h4>
      </div>
      <div class="slot slot-3">
        <slot name="subhead" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-article-paragraph {
  margin-left: -20px;
  margin-top: -15px;
}
.slot {
  margin-top: -20px;
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
  &-3 {
    margin-top: -15px;
    margin-bottom: 20px;
  }
}
.komidashi {
  margin-left: 20px;
  font-weight: bold !important;
}
</style>

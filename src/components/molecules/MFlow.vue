<script setup lang="ts">
interface Flow {
  title: string
  link: string
}

interface Props {
  flows: Flow[]
  dir?: string
}

withDefaults(defineProps<Props>(), {
  dir: '',
})
</script>

<template>
  <div class="container">
    <a-timeline-box
      v-for="(page, i) in flows"
      :key="i"
      :head="page.title"
      :link="page.link === '' ? '' : `/${dir}/${page.link}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  width: 100%;
  @include mq(from-pc) {
    margin: 0 auto;
  }
  margin: 0 auto;
  @include mq(until-tab) {
    margin-left: 0.5rem;
  }
}
</style>

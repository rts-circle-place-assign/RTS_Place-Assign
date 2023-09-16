<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

interface Props {
  data?: string
  head?: string
  isBold?: boolean
  dateTime?: string
  important?: boolean
  link?: string
}
const props = withDefaults(defineProps<Props>(), {
  data: '',
  head: '',
  isBold: false,
  link: '',
  dateTime: '',
})

const componentName = computed(() => (props.link ? resolveComponent('nuxt-link') : 'span'))
</script>

<template>
  <div class="timeline-item">
    <!-- <div class="date">
      <p :class="[{ bold: isBold }, { 'red bold': important }]">
        {{ dateTime }}
      </p>
    </div> -->
    <div class="content">
      <component :is="componentName" :to="link" class="link">{{ head }}</component>
      <slot name="head" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timeline-item {
  padding: 0.5rem 0 1rem 1rem;
  position: relative;
  // color: rgba(black, .7);
  border-left: 2px solid $black;
  font-size: 1.2rem;
  & .date {
    font-size: 1rem;
    margin-bottom: -0.3rem;
  }

  &::after {
    width: 10px;
    height: 10px;
    display: block;
    top: 1em;
    position: absolute;
    left: -8px;
    border-radius: 10px;
    content: '';
    border: 2px solid $black;
    background: white;
  }

  &:last-child {
    border-image: linear-gradient(to bottom, $black 60%, rgba($black, 0)) 1 100%;
  }
}
.link {
  text-decoration: none;
}
</style>

<script setup lang="ts">
interface Props {
  link?: string
  mayFont?: boolean
  width?: string
  height?: string
  font?: number
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  link: "",
  mayFont: false,
  width: "200px",
  height: "50px",
  font: 15,
  disabled: false
})

const fontSize = computed(() => {
  if (props.font) {
    return props.font
  } else {
    return props.mayFont ? 25 : 15
  }
})
const external = computed(() => (props.link.startsWith('http')))
const componentName = computed(() => {
  if (props.disabled) return 'div'
  return external ? 'a' : 'nuxt-link'
})

const config = computed(() => {
  if (props.disabled) {
    return {}
  }
  if (external) {
    return {
      href: props.link,
      target: '_blank'
    }
  }
  return {
    to: props.link
  }
})
</script>


<template>
  <div
    class="wrap"
    :class="{ disabled }"
  >
    <component
      :is="componentName"
      v-bind="config"
      class="button"
      :class="{ 'may-font': mayFont, disabled }"
      :style="{ 'font-size': fontSize + 'px', 'width': width, 'height': height }"
    >
      <slot />
    </component>
  </div>
</template>


<style lang="scss" scoped>
.wrap {
  width: fit-content;
  &.disabled {
    filter: grayscale(100%) brightness(0.5);
  }
}
.button {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: center/cover url('../../assets/img/template/button_leaves.png');
    z-index: -1;
  }
  position: relative;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  box-shadow: 0 5px 5px 0 #c2c7de;
  opacity: 80%;
  overflow: hidden;
  text-decoration: none;
  color: $main-dull;
  font-weight: 400;
  width: 200px;
  height: 50px;
  border: $main-dull solid 2px;
  &:not(.disabled):hover {
    color: $text2;
    opacity: 70%;
    background-color: $main-dull;
    &::before {
      background-blend-mode: multiply;
      background: center/cover url('../../assets/img/template/button_hover.svg'),
        center/cover url('../../assets/img/template/button_leaves.png');
    }
  }
  &:active::before {
    background: $main-dull;
  }
}
</style>

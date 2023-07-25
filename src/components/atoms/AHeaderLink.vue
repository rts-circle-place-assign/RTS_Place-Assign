<script setup lang="ts">
interface Props {
  to?: string
  link?: string
  infoOpenTab: number
  sentence: string
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  to: '',
  link: '',
  infoOpenTab: -1,
  sentence: '',
  active: false,
})

const componentName = computed(() =>
  props.link ? resolveComponent('nuxt-link') : 'span'
)
</script>

<template>
  <component
    :is="componentName"
    :to="to"
    class="a-header-link"
    :class="{ green: active }"
  >
    <div class="inner-wrapper">
      <img v-show="!active" src="../../assets/img/template/header_leaves.svg" />
      <img
        v-show="active"
        src="../../assets/img/template/header_leaves_hover.svg"
      />
      <span>{{ sentence }}</span>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.a-header-link {
  height: 100%;
  text-decoration: none;
  color: $text1;
  align-items: center;
  display: flex;
  min-width: max-content;
  flex-grow: 1;
}
.a-header-link:hover {
  background-color: $main-dull;
  color: white;
}
.inner-wrapper {
  height: 60%;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.green {
  background-color: $main-dull;
  color: white;
}
</style>

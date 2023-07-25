<script setup lang="ts">
interface Props {
  to: string
  hash?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '',
  hash: '',
  href: '',
})

const kikakuPath = (to: string) => {
  const toArray = [...props.to]
  const normalizedTo = toArray?.[0] !== '/' ? `/${to}` : to
  return normalizedTo
}
</script>

<template>
  <nuxt-link :to="{ path: kikakuPath(to), hash }" class="a-place-link">
    <slot />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.a-place-link {
  text-decoration: none;
  color: black;
}
</style>

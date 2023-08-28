<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useEvent, useListen } from '~/composables/useEventBus'

interface Emits {
  (e: 'headerLogoClick'): void
}
const emits = defineEmits<Emits>()

const scrollY = ref(0)
const first = ref(true)
const headerHidden = ref(false)
const headerLogoClickHandler = () => useEvent('headerLogoClick')
const hamburgerOpen = ref(false)
useListen('hamburgerToggle', (state: boolean) => (hamburgerOpen.value = state))
const handleScroll = () => {
  const currentY = window.scrollY || document.documentElement.scrollTop
  // 上方向かつ60以下だったら
  headerHidden.value = currentY > scrollY.value && currentY > 60
  scrollY.value = currentY
  if (headerHidden.value) first.value = false
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="header relative print-none"
    :class="{ 'scroll-hidden': !first && headerHidden && !hamburgerOpen }"
  >
    <nuxt-link
      to="/"
      class="logo-wrapper d-block cursor-pointer"
      @click="headerLogoClickHandler"
    >
      <img class="place-logo" src="../../assets/img/template/header_logo.svg" />
      <img
        class="place-logotype"
        src="../../assets/img/template/header_logotype_ja.svg"
      />
    </nuxt-link>
    <div class="flex align-center justify-end full-height pc-header-buttons">
      <m-header-menu-pc />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 48px;
  width: 99%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 1%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  @include mq(until-tab) {
    // background-color: $main-soft;
    background-color: transparent;
  }
  @include mq(from-tab) {
    background-color: $sub3-soft;
  }
  top: 0px;
  transition: top 0.3s ease;
  &.scroll-hidden {
    top: -68px;
  }
}
.logo-wrapper {
  height: 65%;
  display: flex;
}
.place-logo {
  height: 100%;
}
.place-logotype {
  height: 100%;
  margin-left: 10px;
}
.links-wrapper {
  margin-right: 2vw;
}
</style>

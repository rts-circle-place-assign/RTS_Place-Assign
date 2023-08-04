<script setup lang="ts">
import { watch, ref } from 'vue'
import { useEvent, useListen } from '../../composables/useEventBus'

const navis = [
  {
    to: '/',
    sentence: 'HOME',
    isOpen: true,
    big: false,
  },
  {
    to: '/kikaku/search',
    sentence: 'SEARCH',
    isOpen: true,
    big: false,
  },
  {
    to: '/map',
    sentence: 'MAP',
    isOpen: true,
    big: true,
  },
  {
    to: '/timetable',
    sentence: 'TIMETABLE',
    isOpen: true,
    big: false,
  },
  {
    to: 'menu',
    sentence: 'MENU',
    isOpen: true,
    big: false,
  },
]

const menuOpen = ref(false)
const setMenuOpen = (state: boolean) => {
  menuOpen.value = state
  useEvent('hamburgerToggle', state)
}
useListen('headerLogoClick', () => setMenuOpen(false))
const route = useRoute()
watch(route, (cur, pre) => {
  if (cur.fullPath.replace('/en', '') !== pre.fullPath.replace('/en', '')) {
    setMenuOpen(false)
  }
})
</script>

<template>
  <nav>
    <div class="wrapper navigation hidden-on-pc">
      <div class="inner-wrapper">
        <!-- <a-banner v-show="may.show" class="banner" /> -->
        <div class="circle-wrapper">
          <div class="circle" />
        </div>
        <div class="links">
          <a-navigation-link
            v-for="(navi, idx) in navis"
            :key="navi.to"
            :ref="`navi${idx}`"
            :to="navi.to"
            :sentence="navi.sentence"
            :open="navi.isOpen"
            :big="navi.big"
            class="link relative"
            @menuOpen="setMenuOpen(true)"
          />
        </div>
      </div>
    </div>
    <m-hamburger-modal :isOpen="menuOpen" @close="setMenuOpen(false)" />
  </nav>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  height: 105px;
  margin-left: 5%;
  margin-right: 5%;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.inner-wrapper {
  position: relative;
}
.circle-wrapper {
  height: 20px;
  width: 100%;
  overflow: hidden; // ちょっと透明なので
}
.circle {
  background-color: rgba(255, 255, 255, 0.95);
  width: 120px;
  height: 150px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}
.links {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 15px;
  bottom: 0;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 35px;
}
.hidden-on-pc {
  @include mq(from-pc) {
    display: none;
  }
}
.banner {
  margin: 0 0 -24.3px 30px;
}
</style>

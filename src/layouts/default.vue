<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: title => {
    return title ? `${title} - 博麗神社例大祭 配置関連ウェブシステム` : '博麗神社例大祭 配置関連ウェブシステム'
  },
})

const route = useRoute()
const hasSearchMenu = computed(() => !route.path.match(/\/search\/?$/))
</script>

<template>
  <div>
    <o-header />
    <div v-show="hasSearchMenu">
      <m-search-menu class="searchmenu" />
    </div>
    <slot />
    <o-footer />
    <o-navigation />
    <!-- <a-virtual-time v-if="onDev" class="fixed parent-fit-right-bottom" /> -->
  </div>
</template>

<style lang="scss" scoped>
.searchmenu {
  position: fixed;
  margin-top: 35vh;
  @include mq(until-pc) {
    display: none;
  }
}
</style>
<style lang="scss">
@media print {
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media print {
      @page {
        size: A4;
      }
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
}
</style>

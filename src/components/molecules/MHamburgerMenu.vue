<script setup lang="ts">
type MenuItem = {
  title: string
  titleEn?: string
  links?: string[]
  link?: string
}
const menuItems: MenuItem[] = [
  {
    title: 'kikaku',
    titleEn: 'Project Info',
    links: [
      'search',
      'accepted-circles-list',
      'accepted-additional-circles-list',
      'place-assign',
    ],
  },
  {
    title: 'fix',
    titleEn: 'Data Fix',
    links: ['fix-top', 'result'],
  },
  {
    title: 'management',
    titleEn: 'Place Assign Management',
    links: ['management-top', 'gaisyu-master'],
  },
]
const changeIndex = (to: string) => {
  return to.includes('top') ? '' : '/' + to
}
interface Emits {
  (e: 'close'): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <ul class="m-hamburger-menu ml-0 pl-0">
    <li v-for="menu in menuItems" :key="menu.title" class="menu-item ml-10">
      <details
        v-if="menu.links"
        class="menu-accordion relative ml--12 pl-0 pt-10"
      >
        <summary class="pl-12 flex space-between align-center no-marker">
          <span class="menu-item-title">{{ $t(menu.title) }}</span>
          <a-arrow class="h-12" direction="b" :weight="2" />
        </summary>
        <div class="link-list px-12">
          <nuxt-link
            v-for="link in menu.links"
            :key="link"
            :to="'/' + menu.title + changeIndex(link)"
            class="link-item flex pt-12 space-between align-center"
            @click="emits('close')"
          >
            <span>{{ $t(link) }}</span>
            <a-arrow class="h-12" :weight="2" />
          </nuxt-link>
        </div>
      </details>
      <nuxt-link
        v-else
        :to="menu.link"
        class="menu-accordion relative ml--12 pl-12 pt-12 d-block text-black"
        @click="emits('close')"
      >
        <span class="menu-item-title">{{ $t(menu.title) }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu-item {
  &::marker {
    color: $main-dull;
  }
  .menu-item-title-en {
    color: $main-dull;
    font-size: 0.75rem;
    margin-left: 10px;
  }
  &:nth-child(even) {
    &::marker {
      color: $sub2-dull;
    }
    .menu-item-title-en {
      color: $sub2-dull;
    }
  }
  > summary {
    list-style: none;
  }
}
.menu-item-title {
  display: flex;
  align-items: center;
}
.menu-accordion {
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~../../assets/img/template/menu-dotted-border.svg');
    background-repeat: repeat-x;
  }
  &[open]::after {
    background: none;
  }
  font-size: 18px;
}
.link-list {
  background-color: $sub3-dull;
  border-top: 0.5px solid black;
}
.link-item {
  color: $text1;
  text-decoration: none;
  border-top: 0.5px solid black;
  font-size: 16px;
  &:first-child {
    border: none;
  }
}
.text-black {
  color: $text1;
}
.no-marker::-webkit-details-marker {
  display: none;
}
</style>

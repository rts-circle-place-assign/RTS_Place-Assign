<script setup lang="ts">
useHead({
  title: "トップページ"
})
const popupOpen = ref(false)
const setPopupOpen = (state: boolean) => (popupOpen.value = state)
</script>

<template>
<o-article-template title="博麗神社例大祭　配置関連web">
  <a-link-button link="https://zenn.dev/t_keshi/scraps/9ddb388bc6975d"></a-link-button>
  <m-article-window head="見出し1">
    <template #head>
      <m-article-paragraph secondhead="見出し2">
        <template #secondhead>
          <p>あああ</p>
          <img src="https://reitaisai.com/arts10/wp-content/uploads/sites/32/2023/05/circle-newcomer-1.png" alt="" class="access-map cursor-zoomin" @click="setPopupOpen(true)">
        </template>
      </m-article-paragraph>
    </template>
  </m-article-window>
  <p v-show="popupOpen">あああ</p>
  <a-popup :isOpen="popupOpen" @close="setPopupOpen(false)">
    <img src="https://reitaisai.com/arts10/wp-content/uploads/sites/32/2023/05/circle-newcomer-1.png" alt="">
  </a-popup>
</o-article-template>
</template>

<style lang="scss">
.access-map {
  width: 80vw;
  @include mq(from-tab) {
    width: 40%;
  }
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Circle, twitterURL, pixivURL, webURL } from '../../lib/hooks'

interface Props {
  kikaku: Circle
}
interface Sns {
  sns: string
  url: string
}
const props = defineProps<Props>()

const out = computed(() => {
  const snsArr = ref<Sns[]>([])
  snsArr.value.push({
    sns: props.kikaku.web?.includes('youtube') ? 'YouTube' : 'Web',
    url: webURL(props.kikaku),
  })
  snsArr.value.push({
    sns: 'Twitter',
    url: twitterURL(props.kikaku),
  })
  snsArr.value.push({
    sns: 'Pixiv',
    url: pixivURL(props.kikaku),
  })
  return snsArr
})
const disabled = (url: string) => {
  if (url === 'https://' || url === 'http://') {
    return true
  } else {
    return false
  }
}
</script>

<template>
  <div class="mt-20">
    <div class="flex wrap justify-center">
      <p>{{ out }}</p>
      <div v-for="link in out" :key="link.url" class="mt-20 out_div mx-5">
        <!-- <a
          :href="link.url"
          target="_blank"
          class="flex out_tag"
          :disable="disabled(link.url)"
          :class="{ 'item-inactive': disabled(link.url) }"
        >
          <img class="image" src="~/assets/img/kikaku/details/link.svg" />
          <div>{{ link.sns }}</div>
        </a> -->
        <p>{{ link }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 20px;
  margin-right: 5px;
}
.out_div {
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 9999px;
  padding: 0 10px;
  width: 100px;
}
.out_tag {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.item-inactive {
  background-color: gray;
  border-radius: 9999px;
  pointer-events: none;
}
</style>

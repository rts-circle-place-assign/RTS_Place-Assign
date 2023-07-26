<script setup lang="ts">
import { shuffle } from '../../lib/utils/array-utils'
import mediacodeList from '~/assets/data/mediacode.json'
import sakuhincodeList from '~/assets/data/sakuhincode.json'

interface Emits {
  (e: 'changekeyword'): void
}
const emits = defineEmits<Emits>()

const media = ref(shuffle(mediacodeList).slice(0, 6))
const sakuhin = ref(shuffle(sakuhincodeList).slice(0, 6))
onMounted(() => {
  sakuhin.value = shuffle(sakuhincodeList).slice(0, 6)
  media.value = shuffle(mediacodeList).slice(0, 6)
})
const word = ref('検索')
const input = (i: string) => {
  word.value = i
  emits('changekeyword')
}
</script>

<template>
  <div class="box flex direction-column align-center">
    <a-search-box
      :keyword="word"
      class="mb-10"
      pcyoko="60%"
      spyoko="80%"
      :tate="40"
      barcolor="white"
      buttonkado="20px 0px 0px 20px"
      barkado="0px 20px 20px 0px"
      :defaultword="word"
    />
    <div>
      <div class="category mt-16">
        <client-only>
          <a-search-button
            v-for="i in media"
            :key="i"
            :searchId="i.code"
            :filterName="i.media"
            backc="#dce697"
            class="m-5"
            @input="input(i)"
          />
        </client-only>
      </div>
      <div class="category mt-16">
        <client-only>
          <a-search-button
            v-for="i in sakuhin"
            :key="i"
            :searchId="i.code"
            :filterName="i.sakuhin"
            backc="#dce697"
            class="m-5"
            @input="input(i)"
          />
        </client-only>
      </div>
    </div>
    <div class="bottom" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  @include mq(until-pc) {
    margin: 10px auto;
  }
}
.category {
  flex-wrap: wrap;
  @media screen and (max-width: 580px) {
    width: 80vw;
  }
}
.bottom {
  height: 40px;
}
</style>

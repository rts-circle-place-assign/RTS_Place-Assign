<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { Circle, calculate } from '../../lib/hooks'
import { shuffle } from '../../lib/utils/array-utils'
import { useKikakuAllStore } from '~/store/'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const kikakuAllArr = kikakuAll.value as Circle[]
const simKikakuArr = kikakuAllArr.map(circle => {
  const adult = circle.seijin === props.kikaku.seijin ? 0 : -1000 // 成年向け頒布物の有無。一致していれば+-0、していなければ-1000。
  const friend = circle.friendCode === props.kikaku.friendCode ? 130 : 0
  const media = circle.mediacode === props.kikaku.mediacode ? 150 : 0 // メディアコードの一致判定。
  const bookSakuhin = computed(() => {
    if (props.kikaku.mediacode < 12 && circle.mediacode < 12) {
      return circle.sakuhincode === props.kikaku.sakuhincode ? 80 : 0
    } else {
      return circle.sakuhincode === props.kikaku.sakuhincode ? 10 : 0
    }
  })
  const bookCharacter =
    circle.bookcharacter === '' || props.kikaku.bookcharacter === ''
      ? 0
      : calculate(circle.bookcharacter, props.kikaku.bookcharacter) * 130
  const bookGenre = circle.bookgenre === props.kikaku.bookgenre ? 50 : 0
  const musicGenre =
    circle.musicgenre === '' || props.kikaku.musicgenre === ''
      ? 0
      : calculate(circle.musicgenre, props.kikaku.musicgenre) * 100
  const bookSeijinGenre =
    circle.bookseijingenre === props.kikaku.bookseijingenre ? 10 : 0
  const goodsGenre =
    circle.goodsgenre === '' || props.kikaku.goodsgenre === ''
      ? 0
      : calculate(circle.goodsgenre, props.kikaku.goodsgenre) * 100
  //  0 <= caluculate <= 1。半分一致で0.5。
  const simSum =
    adult +
    friend +
    media +
    bookSakuhin.value +
    bookCharacter +
    bookGenre +
    musicGenre +
    bookSeijinGenre +
    goodsGenre
  // 類似度を算出、配列に入れる。
  return {
    id: circle.id,
    circlename: circle.circlename,
    penname: circle.penname,
    mediacode: circle.mediacode,
    sakuhincode: circle.sakuhincode,
    seijin: circle.seijin,
    sim: simSum,
    cutId: circle.cutId,
  }
})
const threshold = props.kikaku.mediacode < 12 ? 330 : 200
const sortSimKikaku = simKikakuArr
  .filter(a => a.sim > threshold)
  .sort((a, b) => b.sim - a.sim) // 類似度が1120以上のサークルをsimでソート
const simKikaku = shuffle(sortSimKikaku).slice(1, 5) // sortSimKikakuにはそのサークル自身が先頭にいるはずなので、2番目（1）から4つ取り出す
</script>

<template>
  <div class="w-80vw">
    <p class="underlined sim-midashi">他の企画も見る</p>
    <div class="sim-wrapper flex wrap justify-center">
      <o-kikaku-card v-for="card in simKikaku" :key="card" :kikaku="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w-80vw {
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  @include mq(from-tab) {
    margin-bottom: 40px;
  }
  @include mq(from-pc) {
    width: 800px;
  }
}
.underlined {
  border-bottom: 2px solid $main-dark;
}
.sim-midashi {
  font-size: 16px;
  font-weight: bold;
}
.sim-wrapper {
  width: 80vw;
  max-width: 800px;
}
.header {
  border-bottom: 2px solid $main-dark;
  width: 80vw;
  padding-left: 30px;
}
.card-size {
  flex-basis: 30%;
  flex-grow: 1;
  min-width: 300px;
  @include mq(until-tab) {
    width: 100%;
  }
  & :deep(a) {
    width: 100%;
  }
}
.last-row-left {
  gap: 20px;
  /* 最後のコンテンツを左寄せにする指定 */
  &:after {
    content: '';
    display: block;
    flex-basis: 30%;
    flex-grow: 1;
    min-width: 300px;
    height: 0;
  }
  &:before {
    content: '';
    order: 2;
    display: block;
    flex-basis: 30%;
    flex-grow: 1;
    min-width: 300px;
    height: 0;
  }
}
</style>

<script setup lang="ts">
import { breakNewLine } from '~/lib/hooks/'
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
defineProps<Props>()
</script>

<template>
  <div>
    <a-article-small-heading title="補足" />
    <div v-if="kikaku.mediacode < 20">
      <div>
        メイン・CP：
        {{ kikaku.bookcharacter }}
      </div>
      <div>
        作品傾向：
        {{ kikaku.bookgenre }}
      </div>
      <div>
        タイプ：
        {{ kikaku.bookseijingenre }}
      </div>
    </div>
    <div v-if="kikaku.mediacode === 20">
      <div>
        音楽ジャンル：
        {{ kikaku.musicgenre }}
      </div>
    </div>
    <div v-if="kikaku.mediacode >= 30 && kikaku.mediacode < 40">
      <div>
        グッズ詳細：
        {{ kikaku.goodsgenre }}
      </div>
    </div>
    <div>
      補足説明：
      <span v-html="breakNewLine(kikaku)"></span>
    </div>
  </div>
</template>

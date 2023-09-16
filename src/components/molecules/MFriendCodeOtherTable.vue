<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore } from '~/store/'
import { Circle, codeDifferent, getMedia, breakNewLine, isOtherMedia, switchGenre } from '~/lib/hooks'

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const friendsCircles = codeDifferent(allData, 'sakuhincode')
const differentFriendCircles = friendsCircles.filter(set => {
  const otherCircle = set.circles.filter(circle => isOtherMedia(circle.mediacode))
  return otherCircle.length !== 0
})
</script>

<template>
  <div class="mt-20">
    <table class="check-table mt-12">
      <thead>
        <tr>
          <th>なかよしコード</th>
          <th>id</th>
          <th>サークル名</th>
          <th>メディア</th>
          <th>ジャンル</th>
          <th>補足欄内容</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(fcode, k) in differentFriendCircles" :key="k">
          <tr v-for="(circle, i) in fcode.circles" :key="'friend-' + i" :class="{ different: fcode.codeDifferent }">
            <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
            <td>
              <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
            </td>
            <td>{{ circle.circlename }}</td>
            <td class="code" v-html="getMedia(circle.mediacode, true)"></td>
            <td>{{ switchGenre(circle) }}</td>
            <td class="hosoku" v-html="breakNewLine(circle)"></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.hosoku {
  max-width: 25vw;
}
.code {
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>

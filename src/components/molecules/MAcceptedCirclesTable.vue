<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { Circle } from '~/type/'
import { getMedia, cutURL, sortBykey, sortBySpace, webURL } from '~/lib/hooks'
import { useKikakuAllStore } from '~/store'
import { zeroPadding } from '~/lib/utils/string-utils'

// interface Props {
//   data: AcceptedCirclesList[]
// }
// defineProps<Props>()
const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)
const sortByMedia = sortBykey(kikakuAll.value, 'mediacode')
const data = sortByMedia.map(circle => {
  return {
    id: circle.id,
    circlename: circle.circlename,
    circlenamekana: circle.circlenamekana,
    penname: circle.penname,
    pennamekana: circle.pennamekana,
    cutId: circle.cutId,
  }
})
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>id</th>
        <th>サークルカット</th>
        <th>サークル名</th>
        <th>ペンネーム</th>
        <th>お気に入り企画</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in data" :key="i">
        <td>
          <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
        </td>
        <td>
          <img
            :src="cutURL(circle.cutId)"
            :alt="circle.circlename + 'のサークルカット'"
            class="thumbnail cursor-zoomin"
          />
        </td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td>
          <a-fav-button :id="circle.id" margin="10px 10px" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.check-table td {
  padding: 0;
}
.thumbnail {
  max-width: 30vw;
}
</style>

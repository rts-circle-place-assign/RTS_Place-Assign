<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Circle } from '../../lib/hooks'
import { useKikakuAllStore } from '~/store/'

interface Props {
  isSecond: boolean
}
const props = defineProps<Props>()

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const allData = kikakuAll.value as Circle[]
const reassigned = allData.map(circle => {
  const str_base = ''
  const zero_padding_id = ('0000' + circle.id).slice(-4)
  const twitter =
    circle.twitter === '' ? '' : 'https://twitter.com/' + circle.twitter
  const web = circle.web === 'http://' ? '' : circle.web
  const pixiv =
    circle.pixiv === '' ? '' : 'https://www.pixiv.net/users/' + circle.pixiv
  const forSort = str_base.concat(
    String(circle.seijin),
    String(circle.mediacode),
    circle.sakuhincode,
    String(zero_padding_id)
  )
  return {
    id: circle.id,
    // msnum: circle.msnum,
    circlename: circle.circlename,
    penname: circle.penname,
    // sakuhincode: circle.sakuhincode,
    // mediacode: circle.mediacode,
    // seijin: circle.seijin,
    // amount:
    //   Number(circle.hanpu1amount) +
    //   Number(circle.hanpu2amount) +
    //   Number(circle.hanpu3amount) +
    //   Number(circle.hanpu4amount) +
    //   Number(circle.hanpu5amount),
    web,
    pixiv,
    twitter,
    isSecond: circle.isSecond,
    // spnum: circle.spnum,
    forSort,
    // paId: 0,
  }
})
const sortData = reassigned.sort((a, b) => {
  const smalla = a.forSort.toString().toLowerCase()
  const smallb = b.forSort.toString().toLowerCase()
  if (smalla < smallb) return -1
  else if (smalla > smallb) return 1
  return 0
})
const firstKikaku = sortData.filter(circle => !circle.isSecond)
const secondKikaku = sortData.filter(circle => circle.isSecond)
const showKikakus = props.isSecond ? secondKikaku : firstKikaku
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>id</th>
        <th>サークル名</th>
        <th>ペンネーム</th>
        <th>Twitter</th>
        <th>Pixiv</th>
        <th>Web</th>
        <th>お気に入り企画</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in showKikakus" :key="i">
        <td>
          <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
        </td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td>
          <a
            v-if="circle.twitter"
            :href="circle.twitter"
            target="_blank"
            rel="noopener"
          >
            <img
              src="~/assets/img/kikaku/details/twitter.png"
              alt=""
              class="sns-logo"
            />
          </a>
        </td>
        <td>
          <a
            v-if="circle.pixiv"
            :href="circle.pixiv"
            target="_blank"
            rel="noopener"
          >
            <img
              src="~/assets/img/kikaku/details/pixiv.png"
              alt=""
              class="sns-logo"
            />
          </a>
        </td>
        <td>
          <a
            v-if="circle.web"
            :href="circle.web"
            target="_blank"
            rel="noopener"
          >
            <img
              v-if="circle.web?.includes('youtube')"
              src="~/assets/img/kikaku/details/youtube.png"
              alt="YouTube Logo"
              class="sns-logo"
            />
            <img
              v-else
              src="~/assets/img/kikaku/details/web.png"
              alt="YouTube Logo"
              class="sns-logo"
            />
          </a>
        </td>
        <td>
          <a-fav-button :id="circle.id" margin="0 10px" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
.sns-logo {
  width: 40px;
  margin: 0.5rem;
}
.check-table td {
  padding: 0;
}
</style>

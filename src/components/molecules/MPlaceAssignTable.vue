<script setup lang="ts">
import { SortedThisPlaceAssign } from '~/type'
import { twitterURL, pixivURL, webURL } from '~/lib/hooks'

interface Props {
  data: SortedThisPlaceAssign[]
}
defineProps<Props>()
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <!--        <th>id</th>-->
        <th>スペース</th>
        <th>サークル名</th>
        <th>ペンネーム</th>
        <th>Twitter</th>
        <!--        <th>X</th>-->
        <th>Pixiv</th>
        <th>Web</th>
        <!--        <th>お気に入り企画</th>-->
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in data" :key="i">
        <!--        <td>-->
        <!--          <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>-->
        <!--        </td>-->
        <td>{{ circle.space }}</td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td>
          <a v-if="circle.twitter" :href="twitterURL(circle.twitter)" target="_blank" rel="noopener">
            <!--            <img src="~/assets/img/kikaku/details/twitter.png" alt="" class="sns-logo" />-->[X]
          </a>
        </td>
        <td>
          <a v-if="circle.pixiv" :href="pixivURL(circle.pixiv)" target="_blank" rel="noopener">
            <!--            <img src="~/assets/img/kikaku/details/pixiv.png" alt="" class="sns-logo" />-->[Pixiv]
          </a>
        </td>
        <td>
          <a v-if="circle.web" :href="webURL(circle.web)" target="_blank" rel="noopener"
            >[web]
            <!--            <img-->
            <!--              v-if="circle.web?.includes('youtube')"-->
            <!--              src="~/assets/img/kikaku/details/youtube.png"-->
            <!--              alt="YouTube Logo"-->
            <!--              class="sns-logo"-->
            <!--            />-->
            <!--            <img v-else src="~/assets/img/kikaku/details/web.png" alt="YouTube Logo" class="sns-logo" />-->
          </a>
        </td>
        <!--        <td>-->
        <!--          <a-fav-button :id="circle.id" margin="10px 10px" />-->
        <!--        </td>-->
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@use '~/assets/scss/fix.scss';
.sns-logo {
  width: 30px;
  margin: 0.5rem;
}
.check-table td {
  padding: 0;
}
</style>

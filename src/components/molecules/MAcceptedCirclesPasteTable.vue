<script setup lang="ts">
import { AcceptedCirclesList } from '~/type/CircleType'
import { kataToHira } from '~/lib/utils/string-utils'
import { getMedia } from '~/lib/hooks'

interface Props {
  data: AcceptedCirclesList[]
}
defineProps<Props>()
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>circlenamekana</th>
        <th>circlename</th>
        <th>pennamekana</th>
        <th>penname</th>
        <th>media</th>
        <th>seijin</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in data" :key="i">
        <td>{{ kataToHira(circle.circlenamekana) }}</td>
        <td class="text-left">
          &lt;span class='is-hidden'&gt;{{ circle.circlenameId }}&lt;/span&gt;{{ circle.circlename }}
        </td>
        <td>{{ kataToHira(circle.pennamekana) }}</td>
        <td>&lt;span class='is-hidden'&gt;{{ circle.pennameId }}&lt;/span&gt;{{ circle.penname }}</td>
        <td>{{ getMedia(circle.mediacode) }}</td>
        <td>{{ Number(circle.seijin) === 0 ? 'なし' : 'あり' }}</td>
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
td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 40px;
}
</style>

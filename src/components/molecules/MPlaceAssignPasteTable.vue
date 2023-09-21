<script setup lang="ts">
import { SortedThisPlaceAssign } from '~/type'
import { kataToHira } from '~/lib/utils/string-utils'

interface Props {
  data: SortedThisPlaceAssign[]
}
defineProps<Props>()
</script>

<template>
  <table class="check-table">
    <thead>
      <tr>
        <th>space</th>
        <th>circlenamekana</th>
        <th>circlename</th>
        <th>pennamekana</th>
        <th>penname</th>
        <th>twitter</th>
        <!--        <th>X</th>-->
        <th>pixiv</th>
        <th>web</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in data" :key="i">
        <td class="text-left">&lt;span class='is-hidden'&gt;{{ circle.spaceId }}&lt;/span&gt;{{ circle.space }}</td>
        <td>{{ kataToHira(circle.circlenamekana) }}</td>
        <td class="text-left">
          &lt;span class='is-hidden'&gt;{{ circle.circlenameId }}&lt;/span&gt;{{ circle.circlename }}
        </td>
        <td>{{ kataToHira(circle.pennamekana) }}</td>
        <td>&lt;span class='is-hidden'&gt;{{ circle.pennameId }}&lt;/span&gt;{{ circle.penname }}</td>
        <td>{{ circle.twitter }}</td>
        <td>{{ circle.pixiv }}</td>
        <td>{{ circle.web }}</td>
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

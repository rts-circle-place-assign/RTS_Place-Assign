<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKikakuAllStore, useBeforeResultStore } from '~/store/'
import { placeAssignMaster } from '~/lib/hooks'
import { PlaceAssignBaseInfo } from '~/type'

const kikakuAllStore = useKikakuAllStore()
const { kikakuAll } = storeToRefs(kikakuAllStore)

const beforeResultStore = useBeforeResultStore()
const { beforeResult } = storeToRefs(beforeResultStore)

const jointedList = placeAssignMaster(kikakuAll.value, beforeResult.value) as PlaceAssignBaseInfo[]
</script>

<template>
  <table id="gaisyu-master-table" class="check-table mt-12">
    <thead>
      <tr>
        <th>配置id</th>
        <th>申込データid</th>
        <th>内部ID</th>
        <th>メディアコード</th>
        <th>成年向け有無</th>
        <th>作品コード</th>
        <th class="name">サークル名</th>
        <th class="name">ペンネーム</th>
        <th>総搬入量</th>
        <!--        <th>前回外周抜き最高値</th>-->
        <th>前回混雑有</th>
        <th>web</th>
        <th>Pixiv</th>
        <th>Twitter</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(circle, i) in jointedList" :key="i">
        <td>{{ i + 1 }}</td>
        <td>
          <nuxt-link :to="'/kikaku/' + circle.id">{{ circle.id }}</nuxt-link>
        </td>
        <td>{{ circle.forSort }}</td>
        <td>{{ circle.mediacode }}</td>
        <td>{{ circle.seijin }}</td>
        <td>{{ circle.sakuhincode }}</td>
        <td>{{ circle.circlename }}</td>
        <td>{{ circle.penname }}</td>
        <td
          :class="{
            'amount-mid': circle.amount >= 500 && circle.amount < 1000,
            'amount-many': circle.amount >= 1000,
          }"
        >
          {{ circle.amount }}
        </td>
        <!--        <td>-->
        <!--          {{ circle.best }}-->
        <!--        </td>-->
        <td>
          {{ circle.konzatsu }}
        </td>
        <td>
          <a :href="circle.web" target="_blank" rel="noopener">{{ circle.web }}</a>
        </td>
        <td>
          <a :href="circle.pixiv" target="_blank" rel="noopener">{{ circle.pixiv }}</a>
        </td>
        <td>
          <a :href="circle.twitter" target="_blank" rel="noopener">{{ circle.twitter }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/fix.scss';
table {
  table-layout: fixed;
}
th,
td {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
  max-width: 60px;
  text-overflow: ellipsis;
  // font-size: .9rem;
}
.name {
  width: 200px;
  max-width: 100%;
}
.amount {
  &-mid {
    background-color: #ffff00;
  }
  &-many {
    background-color: #ffc000;
  }
}
</style>

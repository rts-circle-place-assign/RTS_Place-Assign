<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { getJointCircle, spKind, isAdultString, getMedia, getSakuhin, breakNewLine } from '~/lib/hooks/'
import { useKikakuAllStore } from '~/store/'
import { Circle } from '~/type'

interface Props {
  kikaku: Circle
}
const props = defineProps<Props>()

const store = useKikakuAllStore()
const { kikakuAll } = storeToRefs(store)
const jointCircle = getJointCircle(kikakuAll.value, props.kikaku) as Circle
</script>

<template>
  <div>
    <table v-if="jointCircle.id !== 9999">
      <thead>
        <tr>
          <th></th>
          <th>このサークル</th>
          <th>合体先サークル</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <th>企画カード</th>
          <td>
            <o-kikaku-card :kikaku="kikaku" />
          </td>
          <td>
            <o-kikaku-card :kikaku="jointCircle" />
          </td>
        </tr> -->
        <tr>
          <th>id</th>
          <td>
            <nuxt-link :to="'/kikaku/' + kikaku.id">{{ kikaku.id }}</nuxt-link>
          </td>
          <td>
            <nuxt-link :to="'/kikaku/' + jointCircle.id" rel="noopener">{{ jointCircle.id }}</nuxt-link>
          </td>
        </tr>
        <tr>
          <th>サークル名</th>
          <td>{{ kikaku.circlename }}</td>
          <td>{{ jointCircle.circlename }}</td>
        </tr>
        <tr>
          <th>ペンネーム</th>
          <td>{{ kikaku.penname }}</td>
          <td>{{ jointCircle.penname }}</td>
        </tr>
        <tr>
          <th>スペース</th>
          <td>{{ spKind(kikaku.spnum) }}</td>
          <td>{{ spKind(jointCircle.spnum) }}</td>
        </tr>
        <tr>
          <th>サークルカット</th>
          <td>
            <a-circle-cut :kikaku="kikaku" />
          </td>
          <td>
            <a-circle-cut :kikaku="jointCircle" />
          </td>
        </tr>
        <tr>
          <th>なかよしコード</th>
          <td>{{ kikaku.friendCode }}</td>
          <td>{{ jointCircle.friendCode }}</td>
        </tr>
        <tr>
          <th>成年向け頒布物有無</th>
          <td>{{ isAdultString(kikaku.seijin) }}</td>
          <td>{{ isAdultString(jointCircle.seijin) }}</td>
        </tr>
        <tr>
          <th>メディアコード</th>
          <td>{{ getMedia(kikaku.mediacode) }}</td>
          <td>{{ getMedia(jointCircle.mediacode) }}</td>
        </tr>
        <tr>
          <th>作品コード</th>
          <td>{{ getSakuhin(kikaku.sakuhincode) }}</td>
          <td>{{ getSakuhin(jointCircle.sakuhincode) }}</td>
        </tr>
        <tr>
          <th>配置希望の補足</th>
          <td v-html="breakNewLine(kikaku)"></td>
          <td v-html="breakNewLine(jointCircle)"></td>
        </tr>
        <tr>
          <th>キャラ・CP</th>
          <td>{{ kikaku.bookcharacter }}</td>
          <td>{{ jointCircle.bookcharacter }}</td>
        </tr>
        <tr>
          <th>作品傾向</th>
          <td>{{ kikaku.bookgenre }}</td>
          <td>{{ jointCircle.bookgenre }}</td>
        </tr>
        <tr>
          <th>成年向け作品傾向</th>
          <td>{{ kikaku.bookseijingenre }}</td>
          <td>{{ jointCircle.bookseijingenre }}</td>
        </tr>
        <tr>
          <th>音楽ジャンル</th>
          <td>{{ kikaku.musicgenre }}</td>
          <td>{{ jointCircle.musicgenre }}</td>
        </tr>
        <tr>
          <th>グッズ詳細</th>
          <td>{{ kikaku.goodsgenre }}</td>
          <td>{{ jointCircle.goodsgenre }}</td>
        </tr>
        <tr>
          <th>SNS</th>
          <td>
            <a-sns :kikaku="kikaku" />
          </td>
          <td>
            <a-sns :kikaku="jointCircle" />
          </td>
        </tr>
        <tr>
          <th>頒布物情報</th>
          <td>
            <m-hanpu-info-table :kikaku="kikaku" />
          </td>
          <td>
            <m-hanpu-info-table :kikaku="jointCircle" />
          </td>
        </tr>
        <tr>
          <th>過去配置情報</th>
          <td>
            <m-past-place-assign-table :kikaku="kikaku" />
          </td>
          <td>
            <m-past-place-assign-table :kikaku="jointCircle" />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>このサークルは合体サークルではありません。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
}

table th {
  border-bottom: solid 2px $main-dull;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px $main-soft;
  text-align: center;
  padding: 10px;
  max-width: 150px;
  @include mq(from-tab) {
    max-width: 400px;
  }
}
</style>

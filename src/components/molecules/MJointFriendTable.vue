<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import { Circle, FriendCodeInfo } from '~/type'

interface Props {
  friendsCircle: FriendCodeInfo[]
}
const props = defineProps<Props>()
const componentName = computed((id: number) => {
  return id !== 9999 ? resolveComponent('nuxt-link') : 'div'
})
</script>

<template>
  <table class="check-table mt-20">
    <thead>
      <tr>
        <th>なかよしコード</th>
        <th>id</th>
        <th>サークル名</th>
        <th>合体有無</th>
        <th>なかよしコード内合体成立</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="fcode in friendsCircle">
        <tr
          v-for="(circle, i) in fcode.circles"
          :key="i"
          :class="{ different: circle.jointCircle.circlename !== '該当なし' && !circle.isJointOk }"
        >
          <td v-if="i === 0" :rowspan="fcode.count">{{ fcode.code }}</td>
          <td>
            <nuxt-link :to="'/kikaku/' + circle.id" rel="noopener">{{ circle.id }}</nuxt-link>
          </td>
          <td>{{ circle.circlename }}</td>
          <!--          <td>-->
          <!--            <component :is="componentName(Number(circle.jointCircle.id))" :to="'/kikaku/' + circle.jointCircle.id">{{-->
          <!--              circle.jointCircle.circlename-->
          <!--            }}</component>-->
          <!--          </td>-->
          <td>
            {{ circle.isJointOk }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>

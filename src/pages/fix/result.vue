<script setup lang="ts">
import { useStudentDiscountStore } from '~/store/'

useHead({
  title: '申込情報集計',
})

const studentDiscountStore = useStudentDiscountStore()
const { fetchStudentDiscount } = studentDiscountStore
await fetchStudentDiscount()
</script>

<template>
  <o-article-template title="申込情報集計">
    <m-article-window head="概要">
      <template #head>
        <m-result-overview-table />
      </template>
    </m-article-window>
    <m-article-window head="学割申請関連">
      <template #head>
        <m-article-paragraph secondhead="学校種類別">
          <template #secondhead>
            <m-result-student-discount-school-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="申込プラン別">
          <template #secondhead>
            <m-result-student-discount-plan-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
    <m-article-window head="各種コード別サークル・スペース数">
      <template #head>
        <m-article-paragraph secondhead="成年向け有無別">
          <template #secondhead>
            <m-result-adult-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="申込プラン別">
          <template #secondhead>
            <m-result-plan-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="メディアコード別">
          <template #secondhead>
            <m-result-media-table />
          </template>
        </m-article-paragraph>
        <m-article-paragraph secondhead="なかよしコード別">
          <template #secondhead>
            <m-result-friend-code-table />
          </template>
        </m-article-paragraph>
      </template>
    </m-article-window>
  </o-article-template>
</template>
